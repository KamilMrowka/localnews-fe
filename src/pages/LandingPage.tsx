import { useEffect, useState } from "react";
import ArticlePreview from "../components/ArticlePreview";
import HorizontalNewsWrapper from "../components/HorizontalNewsWrapper";
import Navbar from "../components/Navbar";
import axios from "axios";
import useStore from "../functions/store";
import { useNavigate } from "react-router-dom";

export interface Article {
    title: string,
    id: number,
    description: string,
    article: string,
    cityId: number
}
export default function LandingPage () {
    const navigate = useNavigate();
    const [articles, setArticles] = useState<Article[]>();
    const [page, setPage] = useState<number>(0);
    const [global, setGlobal] = useState<boolean>(true);

    const selectedCity = useStore((state) => state.selectedCity);
  
    // useEffect(() => {
    //     if (selectedCity.id != -1) {
    //            const response = await fetchLocalArticles(selectedCity.id, page);
    //            setSelectedCity(response);
    //     }
    // }, [selectedCity]);

    // const fetchLocalArticles = async (city_id: number, getPage: number) => {
    //     try {
    //         const response = await axios.get(`http://localhost:8080/api/v1/news/local?page=${getPage}&city_id=${city_id}`);
    //         (response.data);
    //     } catch (error) {
    //         console.error("error fetching articles:", error);
    //     }
    // }

    useEffect(() => {
        const fetchArticles = async () => {
            if (selectedCity && selectedCity.id && selectedCity.id !== -1) {
                try {
                    const response = await fetchLocalOrGlobalArticles(selectedCity.id, page);
                    console.log(response);
                    setArticles(response);
                } catch (error) {
                    console.error("error fetching articles:", error);
                }
            }
        };
        fetchArticles();
    }, [selectedCity]);
    
    const fetchLocalOrGlobalArticles = async (city_id: number, getPage: number) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/news/local?page=${getPage}&city_id=${city_id}`);
            if (response.data.length > 0) {
                setGlobal(false);
                return response.data;
            } else {
                const globalArticles = await axios.get(`http://localhost:8080/api/v1/news?page=${getPage}`);
                return globalArticles.data;
            }
        } catch (error) {
            console.error("error fetching articles:", error);
            return null;
        }
    };


    return (
        <div className=" w-11/12 md:w-10/12 m-auto">
            <Navbar 
                className="mb-10">
            </Navbar>
            <div className="flex justify-between flex-col md:flex-row">
                <main className="w-full bg-gray-700 py-5 md:p-5 rounded-lg mb-20 lg:mb-0">
                    <h1 className="text-white text-4xl mb-10 mx-3 md:mx-0 text-start">
                        {global && "No local articles found" + (selectedCity.id != -1 && " for:")}
                        {global &&
                            (selectedCity.id != -1 && 
                                <span className="text-green-500">{
                                    " " + selectedCity.name
                                }</span>
                            ) 
                        }
                        {global && 
                            (selectedCity.id != -1) &&
                            ", showing global content:"
                        }
                        {!global && 
                            `Showing local articles for: ${selectedCity.name + ", " + 
                            selectedCity.stateName}`
                        }
                    </h1>
                    <HorizontalNewsWrapper>
                        { 
                            articles && articles.length > 0 &&
                            <>
                                {
                                    articles.map((article) => {
                                        if (article.id != undefined && article.title != undefined && article.description != undefined)  {
                                            return (
                                                <ArticlePreview className={"mb-4"} article={article} key={article.id}>
                                                </ArticlePreview>
                                            )
                                        }
                                })} 
                            </>
                        }
                    </HorizontalNewsWrapper>
                </main>
            </div>
        </div>
    );
}
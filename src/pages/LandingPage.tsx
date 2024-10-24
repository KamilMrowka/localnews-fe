import { useEffect, useState } from "react";
import ArticlePreview from "../components/ArticlePreview";
import HorizontalNewsWrapper from "../components/HorizontalNewsWrapper";
import Navbar from "../components/Navbar";
import axios from "axios";
import useStore from "../functions/store";

export interface Article {
    title: string,
    id: number,
    description: string,
    article: string,
    cityId: number
} 

export interface LandingPageResponse {
    articles: Article[],
    lastPage: number,
}

export default function LandingPage () {
    const [response, setResponse] = useState<LandingPageResponse>();
    const [page, setPage] = useState<number>(0);
    const [global, setGlobal] = useState<boolean>(true);
    const selectedCity = useStore((state) => state.selectedCity);

    useEffect(() => {
        if (selectedCity.id === -1) {
            const getGlobalArticles = async () => {
                try {
                    const response = await axios.get(`http://localhost:8080/api/v1/news?page=${page}`);
                    setResponse(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            getGlobalArticles();
        }
    }, [selectedCity, page])
  
    useEffect(() => {
        const fetchArticles = async () => {
            if (selectedCity && selectedCity.id && selectedCity.id !== -1) {
                try {
                    const response = await fetchLocalOrGlobalArticles(selectedCity.id, page);
                    console.log(response);
                    setResponse(response);
                } catch (error) {
                    console.error("error fetching articles:", error);
                }
            }
        };
        fetchArticles();
    }, [selectedCity, page]);

    useEffect(() => {
       setPage(0);
    }, [selectedCity])
    
    const fetchLocalOrGlobalArticles = async (city_id: number, getPage: number) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/v1/news/local?page=${getPage}&city_id=${city_id}`);
            if (response.data && response.data.articles.length > 0) {
                setGlobal(false);
                return response.data;
            } else {
                setGlobal(true);
                const globalArticles = await axios.get(`http://localhost:8080/api/v1/news?page=${getPage}`);
                return globalArticles.data;
            }
        } catch (error) {
            console.error("error fetching articles:", error);
            return null;
        }
    };
    console.log(page);

    return (
        <div className=" w-11/12 md:w-10/12 m-auto">
            <Navbar 
                className="mb-10">
            </Navbar>
            <div className="flex justify-between flex-col md:flex-row">
                <main className="w-full bg-gray-600 py-5 md:p-5 rounded-lg mb-20">
                    <h1 className="text-white text-5xl mb-10 mx-3 md:mx-0 text-start">
                        {global && selectedCity.id == -1 &&
                            "Find your city to get a local experience!"
                        }
                        {global && selectedCity.id != -1 && "No local articles found" + (selectedCity.id != -1 ? " for:" : "")}
                        {global &&
                            (selectedCity.id != -1 ? 
                                <span className="text-green-500">{
                                    " " + selectedCity.name
                                }</span> : ""
                            ) 
                        }
                        {global && 
                            (selectedCity.id != -1) ? 
                            ", showing global content:" : ""
                        }
                        {!global ?
                            `Showing local articles for: ${selectedCity.name + ", " + 
                            selectedCity.stateName}` : ""
                        }
                    </h1>
                    <HorizontalNewsWrapper>
                        { 
                            response && response.articles.length > 0 &&
                            <>
                                {
                                    response.articles.map((article) => {
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
                    <div className="flex justify-between text-white mt-5">
                        <button onClick={page > 0 ? () => {setPage(page - 1)} : () => {}} className={"bg-green-600 p-2 rounded-lg" + " " + (page === 0 ? "opacity-50" : "")} disabled={page === 0}>
                            Previous Page
                        </button>
                        <button onClick={response?.lastPage && page < response?.lastPage ? () => {setPage(page + 1)} : () => {}} className={"bg-green-600 p-2 rounded-lg" + " " + (page === response?.lastPage ? "opacity-50" : "")} disabled={page === response?.lastPage}>
                            Next Page
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
}
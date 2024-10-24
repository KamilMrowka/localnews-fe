import { useNavigate } from "react-router-dom"
import useStore from "../functions/store"
import { Article } from "../pages/LandingPage"

interface Props {
    className?: string
    article: Article
}

export default function ArticlePreview ( { article, className }: Props) {

    const selectedArticle = useStore((state) => state.selectedArticle);
    const setSelectedArticle = useStore((state) => state.setSelectedArticle);

    const navigate = useNavigate();
    return (
        <div className={"bg-gray-600 p-4 md:rounded-md md:h-64 overflow-hidden text-white flex " + " " + (className?className:"")}>
            <div className="">
                <h2 onClick={() => {
                    setSelectedArticle(article);
                    navigate("/article")
                } } className="font-bold text-xl md:text-2xl mb-1 hover:cursor-pointer hover:scale-y-105 hover:text-gray-400">{ article.title }</h2>
                <p className="text-xl">{ article.description }</p>
            </div>
        </div>
    )
}
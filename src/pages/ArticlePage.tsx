import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import useStore from "../functions/store";

export default function ArticlePage() {

    const selectedArticle = useStore((state) => state.selectedArticle);
    const setSelectedArticle = useStore((state) => state.setSelectedArticle);
    const navigate = useNavigate();

    if (selectedArticle == null) {
        navigate("/");
    }

    const onLeave = () => {
        setSelectedArticle(null);
        navigate("/");
    }
    return (
        <div className="w-11/12 m-auto text-white">
            <Navbar onHome={onLeave}></Navbar>
            {selectedArticle &&
                <main className="w-full p-5 rounded-md bg-gray-600 text-center">
                    <h2 className="text-6xl my-10 tracking-wide font-bold">{selectedArticle.title}</h2>        
                    <hr className="mb-8"></hr>
                    {
                        selectedArticle.article.split("\n").map((p) => {
                            return <p className="text-3xl text-start mb-5">{p}</p>
                        })
                    }
                </main>
            }
        </div>
    )
}
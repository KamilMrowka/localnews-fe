import ArticlePreview from "../components/ArticlePreview";
import HorizontalNewsWrapper from "../components/HorizontalNewsWrapper";
import Navbar from "../components/Navbar";

interface Article {
    title: string,
    description: string,
    article: string,
    cityId: string
}
export default function LandingPage () {

    

    return (
        <div className="w-10/12 m-auto">
            <Navbar className="mb-10"></Navbar>
            <div className="flex justify-between flex-col md:flex-row">
                <main className="w-100 bg-gray-700 p-5 rounded-lg mb-20 lg:mb-0">
                    <h1 className="text-white text-4xl mb-10 text-center">Global articles: </h1>
                    <HorizontalNewsWrapper>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                       <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                        <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                            className="mb-5"
                        ></ArticlePreview>
                       <ArticlePreview title="What You Need To Know About The 3 Advisory Questions On Your Ballot"
                            description="Ballotpedia staff writer shares what the questions mean if passed in Illinois this election."
                        ></ArticlePreview>
                    </HorizontalNewsWrapper>
                </main>
            </div>
        </div>
    );
}
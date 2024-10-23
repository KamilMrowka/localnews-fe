interface Props {
    title: string,
    description: string
    className?: string
}

export default function ArticlePreview ( { title, description, className }: Props) {
    return (
        <div className={"bg-gray-600 p-3 rounded-md text-white flex h-52" + " " + (className?className:"")}>
            <div className="w-3/4">
                <h2 className="font-bold text-3xl mb-1">{ title }</h2>
                <p className="text-xl">{ description }</p>
            </div>
            <div className="bg-black rounded-md w-1/4 text-center">
                Img
            </div>
        </div>
    )
}
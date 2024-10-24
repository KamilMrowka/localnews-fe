interface Props {
    title: string,
    description: string
    className?: string
}

export default function ArticlePreview ( { title, description, className }: Props) {
    return (
        <div className={"bg-gray-600 p-4 md:rounded-md md:h-56 overflow-hidden text-white flex " + " " + (className?className:"")}>
            <div className="">
                <h2 className="font-bold text-xl md:text-2xl mb-1 hover:cursor-pointer hover:scale-y-105 hover:text-gray-400">{ title }</h2>
                <p className="text-xl">{ description }</p>
            </div>
        </div>
    )
}
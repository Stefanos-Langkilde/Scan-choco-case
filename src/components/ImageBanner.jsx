


export default function ImageBanner({headerText, text, image_path, placeHolderText}) {
    return (
        <div className="bg-gray-200">
        <div className="container mx-auto">
            <div className="flex flex-row items-center justify-center py-12">
                <div className="flex flex-col items-center justify-center py-12">
                    <h1 className="text-4xl font-bold text-center text-gray-800">{headerText}</h1>
                    <p className="text-lg text-center text-gray-600">{text}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Læs mere</button>
                </div>
                <div className="flex flex-col items-center justify-center py-12">
                    <img src={image_path} alt={placeHolderText} />
                </div>
            </div>
        </div>
        </div>
    );
}
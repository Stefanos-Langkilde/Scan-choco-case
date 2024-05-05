


// Desc: Component for displaying a banner with an image and text
export default function ImageBanner({ dict }) {
    return (
        <div className="mx-auto bg-slate-200 rounded">
            <div className="flex flex-col-reverse sm:flex-row items-center justify-center max-h-[500px] sm:max-w-[1200px] overflow-hidden">
                <div className="flex flex-col items-center justify-center sm:w-2/4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-blue-600 w-auto mb-2 mt-5 sm:mt-0 sm:mb-6">{dict.title}</h1>
                    <p className="text-lg text-center text-gray-600 px-3 md:px-10">{dict.text}</p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white w-40 font-bold py-2 mb-7 px-4 rounded mt-7 sm:mt-16 md:mt-24">Læs mere</button>
                </div>
                <div className="flex flex-col items-center justify-center sm:w-2/4 overflow-hidden">
                    <img className="object-contain" src={dict.img_path} alt={dict.imgAlt} />
                </div>
            </div>
        </div>
    );
}
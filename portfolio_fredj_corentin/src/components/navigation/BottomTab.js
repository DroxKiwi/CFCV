import { AiOutlineBars } from "react-icons/ai";

export default function BottomTab({setPage, page}) {
    return (
        <div className="w-full">
            <section id="bottom-navigation" className="block fixed inset-x-0 top-0 z-10 bg-stone-950 shadow ">
                <div id="tabs" className="flex justify-left overflow-visible h-[50px] shadow-[0_-10px_50px_10px_rgba(100,100,100,0.4)]">
                    <button
                        onClick={() => setPage("index")}
                        className={`w-[90px] h-[60px] relative top-[25px] rounded-md hover:bg-green-500 hover:text-stone-950 transition ease-in-out delay-150 duration-1000 ${page === "index" ? "bg-red-500 text-stone-950" : "bg-stone-950 text-stone-500"} flex flex-col justify-center inline-block text-center pt-2 pb-1`}>
                        <AiOutlineBars className="self-center text-4xl"/>
                    </button>
                </div>
            </section>
        </div>
    );
}

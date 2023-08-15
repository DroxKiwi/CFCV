import logo from "../assets/Logo Orange.png";

export default function Index() {
    return (
        <div className="bg-stone-950 min-h-[100vh] flex flex-col items-center justify-center text-xl text-white text-center">
            <img src={logo} className="max-w-[50%] " alt="logo"/>

            <h1 className="text-4xl font-bold mb-5 mt-8">BeWave</h1>
            <p className="max-w-[90%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto asperiores cupiditate earum expedita harum in laboriosam laborum, maiores maxime nulla numquam odio omnis quae quaerat quas quidem repudiandae voluptas.</p>
        </div>
    )
}


export default function ProjectCard (props){
    // state

    // function


    // render
    const style={
        borderRadius: 25
    };

    if (props.image === null){
        return (
            <div onClick={() => {props.onClickBtn()}} className={`cursor-pointer grid justify-items-center flex items-center bg-slate-800 w-[250px] h-[250px] m-3 shadow-lg shadow-gray-950/50 ${props.class}`} style={style}>
                <span style={{fontSize: '200px'}}>{props.icone}</span>
            </div>
        )
    }
    else {
        return (
            <div onClick={() => {props.onClickBtn()}} className={`cursor-pointer grid justify-items-center flex items-center bg-slate-800 w-[250px] h-[250px] m-3 shadow-lg shadow-gray-950/50 ${props.class}`} style={style}>
                <img className="max-w-[80%]" src={props.image}/>
            </div>
        )
    }
}
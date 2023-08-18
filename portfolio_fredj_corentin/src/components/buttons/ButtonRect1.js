export default function ButtonRect1 (props){
    // state

    // function

    // render
    return (
        <button onClick={() => {props.onClickBtn()}} className={`${props.class} cursor-pointer touch-pan-left mx-5 px-5 py-1 rounded-md`}>
            <span style={{fontSize: '35px'}}>{props.icone}</span>
        </button>
    )
}
export default function ButtonRect1 (props){
    // state

    // functiona

    // render
    return (
        <button onClick={() => {props.onClickBtn()}} className={`${props.class} cursor-pointer touch-pan-left mx-5 px-5 py-1 rounded-md`}>
            <span style={{fontSize: '25px'}}>{props.icone}</span>
        </button>
    )
}
import style from "./Button.module.css"
function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(

        <div>
            <button className="button">Click me</button>
            <br />
            <br />
            <button className={style.button}>Click</button>
            <br />
            <br />
            <button style={styles}>Dont Click</button>
        </div>
        
    )
}
export default Button
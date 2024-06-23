import styles from "./Button.module.css"
function Button(){
    return(

        <div>
            <button className="button">Click me</button>
            <br />
            <br />
            <button className={styles.button}>Click</button>
        </div>
        
    )
}
export default Button
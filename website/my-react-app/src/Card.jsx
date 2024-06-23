import cardpic from "./assets/cardpic.png"
function Card(){
    return(
        <div className="card">
            
            {/* <img src="https://via.placeholder.com/150" alt="Picture" /> */}

            <img src={cardpic} alt="card" className="card-image" />

            <h2 className="card-title">ACE Card</h2>
            <p className="card-text">Card Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sed.</p>

        </div>
    )
}
export default Card

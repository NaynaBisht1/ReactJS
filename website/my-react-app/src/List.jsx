function List(){

    // const fruits = ["apple", "orange","banana","coconut","pineapple"]
    // fruits.sort()
    // return(fruits)
    
    // const listItems = fruits.map(fruit => <li>{fruit}</li> )
    // return( <ul> {listItems} </ul> )
    // return( <ol> {listItems} </ol> )

    // array of objects:
    const fruits = [
        {id : 1,  name: "apple", calories : 95} , 
        {id : 2,  name: "orange", calories : 45 } ,
        {id : 3,  name: "banana", calories : 105 } ,
        {id : 4,  name: "coconut", calories : 159 } ,
        {id : 5,  name: "pineapple", calories : 37 } 
    ]
    // const listItems = fruits.map(fruit => 
    // <li key={fruit.id}> {fruit.name}:
    //                     {fruit.calories} 
    // </li>  )
    
    // return( <ol> {listItems} </ol> )

// SORTING 
        // alphabetical
        // fruits.sort((a,b) => a.name.localeCompare(b.name) )

        // reverse alpha
        // fruits.sort((a,b) => b.name.localeCompare(a.name) )

        // by calories - numeric order
        // fruits.sort((a,b) => a.calories.- b.calories) 

        // descending order
        // fruits.sort((a,b) => b.calories - a.calories) 
        

// FILTER OBJECTS

    // filter those which have calorie less than 100
    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100 )
    // const lowItems = lowCalFruits.map(lowCalFruit => 
    //     <li key={lowCalFruit.id}> 
    //         {lowCalFruit.name}:
    //         {lowCalFruit.calories} 
    //     </li>)


    // filter those which have calorie greater than equal to  100
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100 )
    // const highItems = highCalFruits.map(highCalFruit => 
    //     <li key={highCalFruit.id}> 
    //         {highCalFruit.name}:
    //         {highCalFruit.calories} 
    //     </li>)


    const listItems = fruits.map(fruit => 
    <li key={fruit.id}> 
            {fruit.name}:
            {fruit.calories} 
    </li>  )



    return( <ol> 
        {/* low cal : 
        {lowItems}

        high cal: 
        {highItems}  */}

        {listItems}
        
        </ol> )

    

}
export default List
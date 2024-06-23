import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button/Button.jsx"
import Students from './Students.jsx';

function App() {
  return(
    <>
      <Students name = "spongebob" age={30} isStudent={true} />
      <Students name = "patrick" age={24} isStudent={false} />
      <Students name = "Squidward" age={40} isStudent={false} />
      <Students name = "Sandy" age={20} isStudent={true} />
      <Students/>


      <Card/>
      <Card/>
      <Card/>
      <Food/>
      <Header/>
      <Food/>
      <Footer/>
      <Button/>

    </>
    
  )
}

export default App

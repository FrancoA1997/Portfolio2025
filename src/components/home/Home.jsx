/* ------------------------------Imports---------------------------- */
//Styles
import '../../scss/components/home/home.scss'
//Components
import Navbar from "../Navbar";
import HomeHeader from './HomeHeader';
import Projects from './Projects';
//Icons
//Props
//React
//Images
//NextJs


/*---------------------------------------------------------------------- */
const Home = () => {
  return (
    <main className="home">
        <Navbar/>
        <article>
          <HomeHeader/>
          <Projects/>
        </article>
    </main>
  )
}

export default Home;
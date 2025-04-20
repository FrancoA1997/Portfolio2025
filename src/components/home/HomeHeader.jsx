/* ------------------------------Imports---------------------------- */
//Styles
import '../../scss/components/home/homeHeader.scss';
//Components
//Icons
import { GitHubLogoIcon, LinkedInLogoIcon, DownloadIcon, EyeOpenIcon, DimensionsIcon, LayersIcon } from "@radix-ui/react-icons"
import gif from '/images/homeHeaderAnimation.gif';
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <div className='homeHeader__container'>
        <div className="title">
        <h1>Franco Alvarez </h1>
        <h2><LayersIcon id='icon'/>Full stack web developer,<DimensionsIcon id='icon-frontend'/> Frontend Focused </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, doloribus, quia libero voluptate deserunt ea corrupti esse nobis, provident perferendis alias laboriosam quis? Deleniti quaerat, dignissimos harum magni eveniet dolorum excepturi, aperiam, quasi nemo ut dolor sequi. Exercitationem ea inventore fuga commodi.</p>
        </div>
        <div className="socials">
           <div className="socials__icon">
            <GitHubLogoIcon id='icon'/>
            </div>
            <div className="socials__icon">
            <LinkedInLogoIcon id='icon'/>
            </div> 
            <div className="socials__btn">
                <button>My resume <DownloadIcon/> </button>
            </div>
            <div className="socials__btn">
                <button>See projects <EyeOpenIcon/></button>
            </div>
        </div>
      
      </div>
    </header>
  )
}

export default HomeHeader
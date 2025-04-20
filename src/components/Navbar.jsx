/* ------------------------------Imports---------------------------- */
//Styles
import '../scss/components/navbar.scss'
//Components
//Icons
import { InfoCircledIcon, BackpackIcon, ChatBubbleIcon, HomeIcon, FileTextIcon } from "@radix-ui/react-icons"
//Props
//React
//Images
//NextJs
/*---------------------------------------------------------------------- */
const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav__container">
            <ul>
                <li>
                    <a href="#home" id='home'><HomeIcon className='nav-icon'/> Home</a>
                </li>
                <li>
                    <a href="#projects"><BackpackIcon className='nav-icon'/> Projects</a>
                </li>
                <li>
                    <a href="#experience"><FileTextIcon className='nav-icon'/> Experience</a>
                </li>
                <li>
                    <a href="#about"><InfoCircledIcon className='nav-icon'/> About me</a>
                </li>
                <li id='contact'> 
                    <a href="#contact">Contact <ChatBubbleIcon className='nav-icon-contact'/></a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
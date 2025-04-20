/* ------------------------------Imports---------------------------- */
//Styles
import "../../scss/components/projects/Projects.scss";
//Components
import { AspectRatio} from "radix-ui";
import CustomToolTip from "../ui/ToolTip";
//Icons
import {
  DimensionsIcon,
  CodeIcon,
  MixerVerticalIcon,
  Link1Icon,
  GitHubLogoIcon,
  RocketIcon
} from "@radix-ui/react-icons";
//Props
//React
//Images
import thumbnailTest from "/images/thumbnail-test.png";
import { Link } from "react-router-dom";
//NextJs
/*---------------------------------------------------------------------- */

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__container">
        <h2>Projects & Experience</h2>
        <div className="projects__content">
          <div className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="badges">
                <div className="badge">
                  <p className="badge-text">Design</p>
                  <DimensionsIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">frontend-Development</p>
                  <CodeIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Api implementation</p>
                  <Link1Icon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Optimization</p>
                  <MixerVerticalIcon className="badge-icon" />
                </div>
              </div>
              <div className="title">
                <h3>DestinyTI Website</h3>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum amet corporis, ea suscipit blanditiis quae aliquam id perferendis quasi dolorem harum laboriosam, porro ipsa minima numquam placeat totam sed, sit quia iste. Eaque natus culpa sapiente ab, explicabo velit.</p>
              </div>
              <div className="links  ">
                <CustomToolTip content={'Source not available: this is a private client repository.'}>
                <div className="links-item disabled">
                      <p className="links-item-text">Code</p>
                      <GitHubLogoIcon className="links-item-icon"/>
                  </div>
                </CustomToolTip>
                <div className="links-item">
                    <p className="links-item-text">Deploy</p>
                    <RocketIcon className="links-item-icon"/>
                </div>
              </div>
            </div>
          </div>
          <div  className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="badges">
                <div className="badge">
                  <p className="badge-text">Design</p>
                  <DimensionsIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">frontend-Development</p>
                  <CodeIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Api implementation</p>
                  <Link1Icon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Optimization</p>
                  <MixerVerticalIcon className="badge-icon" />
                </div>
              </div>
              <div className="title">
                <h3>Lexlogos Website</h3>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum amet corporis, ea suscipit blanditiis quae aliquam id perferendis quasi dolorem harum laboriosam, porro ipsa minima numquam placeat totam sed, sit quia iste. Eaque natus culpa sapiente ab, explicabo velit.</p>
              </div>
              <div className="links  ">
                <CustomToolTip content={'Source not available: this is a private client repository.'}>
                <div className="links-item disabled">
                      <p className="links-item-text">Code</p>
                      <GitHubLogoIcon className="links-item-icon"/>
                  </div>
                </CustomToolTip>
                <div className="links-item">
                    <p className="links-item-text">Deploy</p>
                    <RocketIcon className="links-item-icon"/>
                </div>
              </div>
            </div>
          </div>
          <div  className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="badges">
                <div className="badge">
                  <p className="badge-text">Design</p>
                  <DimensionsIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">frontend-Development</p>
                  <CodeIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Api implementation</p>
                  <Link1Icon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Optimization</p>
                  <MixerVerticalIcon className="badge-icon" />
                </div>
              </div>
              <div className="title">
                <h3>Frutales Website</h3>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum amet corporis, ea suscipit blanditiis quae aliquam id perferendis quasi dolorem harum laboriosam, porro ipsa minima numquam placeat totam sed, sit quia iste. Eaque natus culpa sapiente ab, explicabo velit.</p>
              </div>
              <div className="links">
                <CustomToolTip content={'Source not available: this is a private client repository.'}>
                <div className="links-item disabled">
                      <p className="links-item-text">Code</p>
                      <GitHubLogoIcon className="links-item-icon"/>
                  </div>
                </CustomToolTip>
                <div className="links-item">
                    <p className="links-item-text">Deploy</p>
                    <RocketIcon className="links-item-icon"/>
                </div>
                
              </div>
            </div>
          </div>
          <div  className="projects__item">
            <AspectRatio.Root ratio={16 / 9}>
              <img src={thumbnailTest} alt="" />
            </AspectRatio.Root>
            <div className="projects__item-info">
              <div className="badges">
                <div className="badge">
                  <p className="badge-text">Design</p>
                  <DimensionsIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">frontend-Development</p>
                  <CodeIcon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Api implementation</p>
                  <Link1Icon className="badge-icon" />
                </div>
                <div className="badge">
                  <p className="badge-text">Optimization</p>
                  <MixerVerticalIcon className="badge-icon" />
                </div>
              </div>
              <div className="title">
                <h3>Solmedicam Website</h3>
              </div>
              <div className="description">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eum amet corporis, ea suscipit blanditiis quae aliquam id perferendis quasi dolorem harum laboriosam, porro ipsa minima numquam placeat totam sed, sit quia iste. Eaque natus culpa sapiente ab, explicabo velit.</p>
              </div>
              <div className="links">
                <CustomToolTip content={'Source not available: this is a private client repository.'}>
                <div className="links-item disabled">
                      <p className="links-item-text">Code</p>
                      <GitHubLogoIcon className="links-item-icon"/>
                  </div>
                </CustomToolTip>
                <div className="links-item">
                    <p className="links-item-text">Deploy</p>
                    <RocketIcon className="links-item-icon"/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

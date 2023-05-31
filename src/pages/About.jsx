import {Link} from 'react-router-dom'
import Background from '../components/Background'
import '../css/About.css'
import avatar from '../images/avatar.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import git from '../images/git.jpg'
import yahoo from '../images/yahoo.png'

const About = () => {
  return (
    <div>
      <Background/>
      <div className='main-about'>
        <div className='top'>
          <div className='left-top'>
            <div className='my-img'>
              <img src={avatar}/>
            </div>
            <div className='my-name'>
              <span>Japmann Kaur Banga</span>
            </div>
            <div className='lines'></div>
            <div className='socials'>
              <a href="https://www.linkedin.com/in/japmann-kaur-banga-43962b1bb/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn"/></a>
              <a href="https://www.instagram.com/japmann3003/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram"/>
              </a>
              <a href="https://github.com/JapmannKaur" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="Github"/>
              </a>
              <a href="mailto:kaurbanga30@yahoo.com">
                <img src={yahoo} alt="Yahoo" className='i1'/>
              </a>
            </div>
            <div className='navs'>
              <Link to = '/'>Home</Link>
              <Link to = '/about'>About</Link>
              <Link to = '/projects'>Projects</Link>
              <Link to = '/blogs'>Blogs</Link>
              <Link to = '/contact'>Contact</Link>
            </div>
          </div>
          <div className='mid-top'>
            <span className='this-text'>ABOUT ME</span>
          </div>
          <div className='right-top'>
            <div className='my-about'>
              <div className='about-top'>
                <span>About Me</span>
              </div>
              <div className='about-bottom'>

              </div>
            </div>
            <div className='card'>
              <span>If you have npm and npx installed, run the following command:</span>
              <div className='card-in'>
                <div className='abc'>npx japmann</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-up'>

        </div>
        <div className='bottom-down'>

        </div>
      </div>
    </div>
  )
}
export default About 
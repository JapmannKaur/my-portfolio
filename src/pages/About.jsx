import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Background from '../components/Background'
import '../css/About.css'
import avatar from '../images/avatar.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import git from '../images/git.jpg'
import yahoo from '../images/yahoo.png'
import GitHubCalendar from "react-github-calendar";
import Skills from '../components/Skills'

const About = ({isDarkMode}) => {

  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const text = `> 🙋‍♀️ Hello!!
    My name is Japmann and I am 21 years old


    > Education:
      B. Tech Computer Science with AI and Robotics
      Vellore Institute of Technology, Chennai - (2020/2024)
      Carmel School, Rourkela - (2020)

    > Interests:
    ["Front-End Web Development", "UX/UI Designing", "Data Analytics", "AI and Machine Learning"]

    > Hobbies:
    ["Music", "Dance", "Bicycle-Riding"]
    
    
    > Please continue exploring to get to know more about me. 
    Have a great day :)`;

    let currentIndex = 0;
    let tempText = '';

    const typeText = () => {
      if (currentIndex < text.length) {
        const char = text.charAt(currentIndex)
        if (char === "\n") {
          tempText += "<br>"
        } else if (char === "[" || char === "]" || char === "(" || char === ")" || char === "{" || char === "}" || char === ">") {
          tempText += `<span class="brackets">${char}</span>`
        } else if (char === "'") {
          tempText += `<span class="string">${char}`
        } else if (char === ",") {
          tempText += `${char}</span>`
        } else {
          tempText += char
        }
        setTypedText(tempText)
        currentIndex++
        setTimeout(typeText, 50)
      }
    }

    typeText();
  }, []);

  return (
    <div className='about-page-main'>
      <Background />
      <div className='main-about'>
        <div className='top'>
          <div className='left-top'>
            <div className='my-img'>
              <img src={avatar} />
            </div>
            <div className='my-name'>
              <span>Japmann Kaur Banga</span>
            </div>
            <div className='lines'></div>
            <div className='socials'>
              <a href="https://www.linkedin.com/in/japmann-kaur-banga-43962b1bb/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/japmann3003/" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" />
              </a>
              <a href="https://github.com/JapmannKaur" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="Github" />
              </a>
              <a href="mailto:kaurbanga30@yahoo.com">
                <img src={yahoo} alt="Yahoo" className='i1' />
              </a>
            </div>
            <div className='navs'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/blogs'>Blogs</Link>
              <Link to='/contact'>Contact</Link>
            </div>
          </div>
          <div className='mid-top'>
            <span className='this-text'>ABOUT ME</span>
          </div>
          <div className='right-top'>
            <div className='my-about'>
              <div className='about-top'>
                <div className='dots'>
                  <div className='c1'></div>
                  <div className='c2'></div>
                  <div className='c3'></div>
                </div>
                <span>About Me</span>
              </div>
              <div className='about-bottom'>
                <div className='typing-text' dangerouslySetInnerHTML={{ __html: typedText }}></div>
              </div>
            </div>
            <div className='card'>
              <div className={`npxcmd ${isDarkMode?"dark4-color":"light4-color"}`}>If you have npm and npx installed, run the following command:</div>
              <div className='card-in'>
                <div className='abc'>npx japmann</div>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-up'>
          <Skills isDarkMode={isDarkMode}/>
        </div>
        <div className='bottom-down'>
          <div className='git-text'>
              <div className={`my ${isDarkMode?"dark4-color":"light4-color"}`}>Japmann's</div>
              <div className={`graph ${isDarkMode?"dark5-color":"light5-color"}`}>Github</div>
              <div className={`contri ${isDarkMode?"dark4-color":"light4-color"}`}>Contribution Graph</div>
          </div>
          <div className='git-graph'>
            <GitHubCalendar
              style={{ marginBottom: "50px" }}
              username="JapmannKaur"
              blockMargin={6.5}
              blockSize={14}
              fontSize={16}
              color={isDarkMode?'#32CD30':'black'}
              colorScheme={isDarkMode?'light':'dark'}
            />
          </div>
        </div>
      </div>
      <div className="buffer"></div>
    </div>
  )
}
export default About
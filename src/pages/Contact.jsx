import Navbar from '../components/Navbar'
import Background from '../components/Background'
import '../css/Contact.css'
import Form from '../components/Form.jsx'
import codechef from '../images/codechef.png'
import leetcode from '../images/Leetcode.png'
import gfg from '../images/gfg.png'
import hrank from '../images/hrank.png'
import git from '../images/git.png'
import linkedin from '../images/linkedin.png'
import instagram from '../images/instagram.png'
import yahoo from '../images/yahoo.png'

const Contact = ({isDarkMode}) => {
  return (
    <div>
      <Navbar isDarkMode={isDarkMode}/>
      <Background />
      <div className='contact-page'>
        <div className='contact-top'>
          <div className='contact-prof'>
            <div className='contact-text'>
              <p className={` ${isDarkMode?"dark5-color":"light5-color"}`}>Let's Connect!!!</p>
              <div className={`sugg ${isDarkMode?"dark4-color":"light4-color"}`}>Feel free to drop any suggestions or feedback. Besides, I am also ready to join a company to contribute to the projects and put forth the best of my potential.</div>
            </div>
            <div className='the-prof'>
              <div className={`dev-prof ${isDarkMode?"dark8-color":"light8-color"}`}>
                <p className='dev-text'>Dev Profiles</p>
                <div className='d1'>
                  <a href="https://www.codechef.com/users/kaur3003">Codechef</a>
                  <img src={codechef}/>
                </div>
                <div className='d1'>
                  <a href="https://leetcode.com/JapmannKaur/">Leetcode</a>
                  <img src={leetcode}/>
                </div>
                <div className='d1'>
                  <a href="https://auth.geeksforgeeks.org/user/kaurbanga30">GeeksForGeeks</a>
                  <img src={gfg}/>
                </div>
                <div className='d1'>
                  <a href="https://www.hackerrank.com/japmannkaur30?hr_r=1">HackerRank</a>
                  <img src={hrank}/>
                </div>
                <div className='d1'>
                  <a href="https://github.com/JapmannKaur">Github</a>
                  <img src={git}/>
                </div>
              </div>
              <div className={`social-prof ${isDarkMode?"dark8-color":"light8-color"}`}>
                <p className='social-text'>Social Profiles</p>
                <div className='d2'>
                  <a href="https://www.linkedin.com/in/japmann-kaur-banga-43962b1bb/">LinkedIn</a>
                  <img src={linkedin}/>
                </div>
                <div className='d2'>
                  <a href="https://www.instagram.com/japmann3003/">Instagram</a>
                  <img src={instagram}/>
                </div>
                <div className='d2'>
                  <a href="mailto:kaurbanga30@yahoo.com">Email</a>
                  <img src={yahoo}/>
                </div>
              </div>
            </div>
          </div>
          <div className='contact-msg'>
            <Form isDarkMode={isDarkMode}/>
          </div>
          <div className='contact-tag'>
            <div className='dark-tag'>CONTACT</div>
            <div className={`tag-line ${isDarkMode?"color-wht":"light8-color"}`}></div>
          </div>
        </div>
        <div className={`contact-bottom ${isDarkMode?"dark7-color":"light7-color"}`}>
          <div className={` ${isDarkMode?"dark4-color":"light4-color"}`}>Designed and Developed by Japmann Kaur Banga</div>
          <p className={`copyrights ${isDarkMode?"dark4-color":"light4-color"}`}>© Copyrights</p>
        </div>
      </div>
    </div>
  )
}
export default Contact
import {Link} from 'react-router-dom'
import Background from '../components/Background'
import TypingAnimation from '../components/TypingAnimation'
import '../css/Home.css'
import icon from '../images/icon.png' 
import { socialLinks } from '../data'

const Home = () => {
  return (
    <div className='main-main'>
      <Background/>
      <div className='main'>
        <div className='left-main'>
          <div className='left'>
            <TypingAnimation/>
          </div>
          <div className='bottom'> 
            {socialLinks.map((social) =>{
              const {id,href,icon} = social;
              return(
                <div className='my-social' key={id}>
                  <a href={href} target="_blank" className='footertext'><i className={icon} style={{ fontSize: '24px', width: '24px', height: '24px', color:'#2dcf18', backgroundColor:'#002854'}}></i></a>
                </div>
              )
            })}
          </div>
        </div>
        <div className='right'>
          <img src = {icon}/> 
        </div>
      </div>
    </div>
  )
}
export default Home 
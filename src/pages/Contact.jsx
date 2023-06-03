import Navbar from '../components/Navbar'
import Background from '../components/Background'
import '../css/Contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Background />
      <div className='contact-page'>
        <div className='contact-top'>
          <div className='contact-text'>
            <p>Let's Connect!!!</p>
            <span>Feel free to drop any suggestions or feedback. Besides, I am also ready to join a company to contribute to the projects and put forth the best of my potential.</span>
          </div>
          <div className='contact-msg'>
            <input className='send-name' placeholder='Your Name' type='text'></input>
            <input className='send-mail' placeholder='Your Email' type='mail'></input>
            <input className='send-msg' placeholder='Your Message' type='text'></input>
            <button className='send-btn'>Send 📩</button>
          </div>
          <div className='contact-tag'>
            <div className='dark-tag'>CONTACT</div>
            <div className='tag-line'></div>
          </div>
        </div>
        <div className='contact-bottom'>
          <div className='devs'>

          </div>
          <div className='thanks'>

          </div>
          <div className='social-pros'>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
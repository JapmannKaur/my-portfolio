import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1> About </h1>
      <button><Link to="/projects">Projects</Link></button>
      <button><Link to="/blogs">Blogs</Link> </button>
      <button><Link to="/contact">Contact</Link></button> 
       
    </div>
  )
}
export default About
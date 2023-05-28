import {Link} from 'react-router-dom'
import '../css/Navbar.css'
const Navbar = () => {
  return (
    <div className='nav-parent'>
      <div className="logo">
        <div className='l1'>JAPMANN</div>
        <div className='l2'>JAPMANN</div> 
      </div>
      <div className="navlinks">
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/blogs'>Blogs</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link> 
        </li>
      </div>
    </div>
  )
}
export default Navbar
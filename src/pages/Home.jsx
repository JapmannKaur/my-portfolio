import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1> Jappi </h1>
      <button>
        <Link to="/about">About</Link> 
      </button>
    </div>
  )
}
export default Home 
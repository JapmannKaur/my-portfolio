import Navbar from '../components/Navbar'
import Background from '../components/Background'
import '../css/Blogs.css'
import '../css/Scrollbar.css';
import UI from '../images/UI.jpg'


const Blogs = () => {

  const handleDivClick = () => {
    // Logic to execute when the div is clicked
    // For example, you can use the location.href to navigate to a specific URL
    window.location.href = 'https://japmann.hashnode.dev/journey-to-becoming-a-uiux-designer';
  };

  return (
    <div>
      <Navbar/>
      <Background/>
      <div className='cont'>
        <div className='title'>All Posts</div>
        <div className='line'></div>
      </div>
      <div className='articles' style={{ overflow: 'auto' }}>
        <div className='my-blog' onClick={handleDivClick}>
          <div className='blog-text'>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className='dates'>
                Jan 6, 2023 |
              </div>
              <div className='book'>
                <i class="fas fa-book-open"></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design  </span>
              <span>#User Research  </span>
              <span>#User Experience  </span>
            </div>
            <div className='in-txt'>
            User interface (UI) design is the process designers use to create interfaces in software or computerized devices emphasizing appearance and style. Designers aim to create user-friendly and enjoyable interfaces. UI design refers to graphical user interfaces and other forms such as Voice control interfaces.
            </div>
          </div>
          <div className='blogimg'>
            <img src={UI}/>
          </div>
        </div>
        <div className='my-blog'>
          <div className='blog-text'>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className='dates'>
                Jan 6, 2023 |
              </div>
              <div className='book'>
                <i class="fas fa-book-open"></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design</span>
              <span>#User Research</span>
              <span>#User Experience</span>
            </div>
            <div className='in-txt'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti maiores, sapiente qui doloremque totam officia? Ex aliquam aperiam quam saepe! Ea, magni suscipit. Assumenda amet ea laboriosam. Nisi, ea dignissimos?
            </div>
          </div>
          <div className='blogimg'>
            <img src={UI}/>
          </div>
        </div>
        <div className='my-blog'>
          <div className='blog-text'>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className='dates'>
                Jan 6, 2023 |
              </div>
              <div className='book'>
                <i class="fas fa-book-open"></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design</span>
              <span>#User Research</span>
              <span>#User Experience</span>
            </div>
            <div className='in-txt'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti maiores, sapiente qui doloremque totam officia? Ex aliquam aperiam quam saepe! Ea, magni suscipit. Assumenda amet ea laboriosam. Nisi, ea dignissimos?
            </div>
          </div>
          <div className='blogimg'>
          <img src={UI}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Blogs 
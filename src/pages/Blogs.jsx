import Navbar from '../components/Navbar'
import Background from '../components/Background'
import '../css/Blogs.css'
import '../css/Scrollbar.css';
import UI from '../images/UI.jpg'


const Blogs = ({isDarkMode}) => {

  const handleDivClick = () => {
    // Logic to execute when the div is clicked
    // For example, you can use the location.href to navigate to a specific URL
    window.location.href = 'https://japmann.hashnode.dev/journey-to-becoming-a-uiux-designer';
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode}/>
      <Background/>
      <div className='cont'>
        <div className={`title ${isDarkMode?"dark4-color":"light4-color"}`}>All Posts</div>
        <div className={`line ${isDarkMode?"dark6-color":"light6-color"}`}></div>
      </div>
      <div className='articles' style={{ overflow: 'auto' }}>
        <div className='my-blog' onClick={handleDivClick}>
          <div className={`blog-text ${isDarkMode?"dark5-color":"light5-color"}`}>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className={`dates ${isDarkMode?"dark4-color":"light4-color"}`}>
                Jan 6, 2023 |
              </div>
              <div className={`book ${isDarkMode?"dark4-color":"light4-color"}`}>
                <i class={`fas fa-book-open ${isDarkMode?"dark5-color":"light5-color"}`}></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design  </span>
              <span>#User Research  </span>
              <span>#User Experience  </span>
            </div>
            <div className={`in-txt ${isDarkMode?"dark4-color":"light4-color"}`}>
            User interface (UI) design is the process designers use to create interfaces in software or computerized devices emphasizing appearance and style. Designers aim to create user-friendly and enjoyable interfaces. UI design refers to graphical user interfaces and other forms such as Voice control interfaces.
            </div>
          </div>
          <div className='blogimg'>
            <img src={UI}/>
          </div>
        </div>
        <div className='my-blog'>
          <div className={`blog-text ${isDarkMode?"dark5-color":"light5-color"}`}>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className={`dates ${isDarkMode?"dark4-color":"light4-color"}`}>
                Jan 6, 2023 |
              </div>
              <div className={`book ${isDarkMode?"dark4-color":"light4-color"}`}>
                <i class={`fas fa-book-open ${isDarkMode?"dark5-color":"light5-color"}`}></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design</span>
              <span>#User Research</span>
              <span>#User Experience</span>
            </div>
            <div className={`in-txt ${isDarkMode?"dark4-color":"light4-color"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti maiores, sapiente qui doloremque totam officia? Ex aliquam aperiam quam saepe! Ea, magni suscipit. Assumenda amet ea laboriosam. Nisi, ea dignissimos?
            </div>
          </div>
          <div className='blogimg'>
            <img src={UI}/>
          </div>
        </div>
        <div className='my-blog'>
          <div className={`blog-text ${isDarkMode?"dark5-color":"light5-color"}`}>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className={`dates ${isDarkMode?"dark4-color":"light4-color"}`}>
                Jan 6, 2023 |
              </div>
              <div className={`book ${isDarkMode?"dark4-color":"light4-color"}`}>
                <i class={`fas fa-book-open ${isDarkMode?"dark5-color":"light5-color"}`}></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design</span>
              <span>#User Research</span>
              <span>#User Experience</span>
            </div>
            <div className={`in-txt ${isDarkMode?"dark4-color":"light4-color"}`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti maiores, sapiente qui doloremque totam officia? Ex aliquam aperiam quam saepe! Ea, magni suscipit. Assumenda amet ea laboriosam. Nisi, ea dignissimos?
            </div>
          </div>
          <div className='blogimg'>
          <img src={UI}/>
          </div>
        </div>
        <div className='my-blog' onClick={handleDivClick}>
          <div className={`blog-text ${isDarkMode?"dark5-color":"light5-color"}`}>
            <h4>Journey to becoming a UI/UX Designer</h4>
            <div className='read'>
              <div className={`dates ${isDarkMode?"dark4-color":"light4-color"}`}>
                Jan 6, 2023 |
              </div>
              <div className={`book ${isDarkMode?"dark4-color":"light4-color"}`}>
                <i class={`fas fa-book-open ${isDarkMode?"dark5-color":"light5-color"}`}></i>
                5 min read
              </div>
            </div>
            <div className='tags'>
              <span>#UX/UI Design  </span>
              <span>#User Research  </span>
              <span>#User Experience  </span>
            </div>
            <div className={`in-txt ${isDarkMode?"dark4-color":"light4-color"}`}>
            User interface (UI) design is the process designers use to create interfaces in software or computerized devices emphasizing appearance and style. Designers aim to create user-friendly and enjoyable interfaces. UI design refers to graphical user interfaces and other forms such as Voice control interfaces.
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
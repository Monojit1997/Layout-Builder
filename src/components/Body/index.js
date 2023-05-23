// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const leftNavbarMenu = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-bg-container">
          {showLeftNavbar && (
            <div className="left-navbar-container">
              <h1>Left Navbar Menu</h1>
              <ul className="unordered-element">
                {leftNavbarMenu.map(eachItem => (
                  <li>{eachItem}</li>
                ))}
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content-bg-container">
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar-container">
              <h1>Right Navbar</h1>
              <div>
                <h1>Ad 1</h1>
              </div>
              <div>
                <h1>Ad 2</h1>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body

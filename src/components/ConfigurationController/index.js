// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const showContentresults = event => {
        onToggleShowContent(event.target.value)
      }
      const showLeftNavbarresults = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const showRightNavbarresults = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      return (
        <div className="ConfigurationController-bg-container">
          <h1 className="layout-heading">Layout</h1>
          <ul className="unordered-element">
            <li>
              <input
                type="checkbox"
                value={showContent}
                id="content"
                onChange={showContentresults}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                type="checkbox"
                value={showLeftNavbar}
                id="Left Navbar"
                onChange={showLeftNavbarresults}
              />
              <label htmlFor="Left Navbar">Left Navbar</label>
            </li>
            <li>
              <input
                type="checkbox"
                value={showRightNavbar}
                id="Right Navbar"
                onChange={showRightNavbarresults}
              />
              <label htmlFor="Right Navbar">Right Navbar</label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController

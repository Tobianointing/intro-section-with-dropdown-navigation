/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

function App() {

  const [isMobileDrowOpen, setIsMobileDropOpen] = React.useState(false)
  const [isOpenNav, setIsOpenNav] = React.useState(false)


  return (
    <div className="container">
      <header>
        <img src="./images/logo.svg" alt="logo" />

        <img className="menu-btn" src="./images/icon-menu.svg" alt="menu-icon" />

        <nav>
          <ul className="menus">
            <li className="exit-btn">
              <img src="./images/icon-close-menu.svg" alt="icon-close-menu" />
            </li>
            <li className="menu-item">
              <div>
                <span>Features</span>
                <img src="./images/icon-arrow-up.svg" alt="arrow-up" />
              </div>
              <ul className="drop-down-menus dd-left">
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    <img src="./images/icon-todo.svg" alt="dd-menu-img" />
                    Todo List
                  </a>
                </li>
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    <img src="./images/icon-calendar.svg" alt="dd-menu-img" />
                    Calendar
                  </a>
                </li>
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    <img src="./images/icon-reminders.svg" alt="dd-menu-img" />
                    Remainder
                  </a>
                </li>
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    <img src="./images/icon-planning.svg" alt="dd-menu-img" />
                    Planning
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-item">
              <div>
                <span>Company</span>
                <img src="./images/icon-arrow-up.svg" alt="arrow-up" />
              </div>
              <ul className="drop-down-menus dd-right">
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    History
                  </a>
                </li>
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    Our Team
                  </a>
                </li>
                <li className="dd-menu">
                  <a className="dd-link" href="#">
                    Blog
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="#">Careers</a>{" "}
            </li>
            <li className="menu-item">
              <a href="" className="active">
                About
              </a>
            </li>

            <li className="menu-item auth-btns">
              <a href="#" className="btn">
                Login
              </a>
              <a href="#" className="btn outline">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="left">
          <h1>Make remote work</h1>
          <p>
            {" "}
            Get your team in sync, no matter your location. Streamline processes, create team
            rituals, and watch productivity soar.
          </p>
          <button className="cta">Learn more</button>

          <div className="partners-logo">
            <img src="./images/client-databiz.svg" alt="client-databiz" />
            <img src="./images/client-audiophile.svg" alt="client-audiophile" />
            <img src="./images/client-meet.svg" alt="client-meet" />
            <img src="./images/client-maker.svg" alt="client-maker" />
          </div>
        </div>
        <div className="right"></div>
      </main>
    </div>
  )
}

export default App

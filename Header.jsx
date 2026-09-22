import './Header.css'

function Header() {
  return (
    <header className="header">

      <div className="logo">

        <div className="logo-box">
          D
        </div>

        <div className="logo-text">
          The Daily Dispatch
        </div>

      </div>


      <nav className="navigation">

        <a href="#world">World</a>
        <a href="#politics">Politics</a>
        <a href="#business">Business</a>
        <a href="#technology">Technology</a>
        <a href="#culture">Culture</a>

      </nav>


      <div className="header-actions">

        <button className="search-button" aria-label="Search">
          <span className="search-icon"></span>
        </button>

        <button className="subscribe-button">
          Subscribe
        </button>

      </div>

    </header>
  )
}

export default Header

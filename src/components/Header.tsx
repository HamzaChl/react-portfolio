const Header = () => {
    return (
        <>
        <header className="fade-in desktop-nav">
  <a href="/"><p className="header-p">Portfolio de <span className="special-word">Hamza</span></p></a>
  <nav>
      <a href="/" className="nav-item <%= currentPage === 'home' ? 'active' : '' %>">Accueil</a>
      <a href="/projects" className="nav-item <%= currentPage === 'projects' ? 'active' : '' %>">Projets</a>
      <a href="/contact" className="nav-item <%= currentPage === 'contact' ? 'active' : '' %>">Contact</a>
      <i id="theme-icon" className="fa-solid fa-moon fa-xl" ></i>
  </nav>
</header>

<header className="mobile-nav fade-in">
  <a href="/"><p className="header-p">Portfolio de <span className="special-word">Hamza</span></p></a>
  <i className="fa-solid fa-bars fa-xl" id="hamburger-icon"></i>
</header>

<div id="mobile-menu" className="mobile-menu">
  <div className="mobile-wrapper">
    <i className="fa-solid fa-moon fa-xl" id="theme-icon-mobile" ></i>
    <i className="fa-solid fa-times fa-xl" id="close-icon"></i>
  </div>
  <nav className="mobile-menu-nav">
    <a href="/" className="nav-item <%= currentPage === 'home' ? 'active' : '' %>">Accueil</a>
    <a href="/projects" className="nav-item <%= currentPage === 'projects' ? 'active' : '' %>">Projets</a>
    <a href="/contact" className="nav-item <%= currentPage === 'contact' ? 'active' : '' %>">Contact</a>
  </nav>
  
</div>



        </>
    )
}

export default Header;
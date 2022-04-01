import "../Navbar/NavBar.css"

export const Navbar=()=>{
    return(
        <div className="NavBarContainer " >
            
            <nav className="navbar navbar-expand-lg col-10 m-auto">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img className="icono-navBar" src="https://i.postimg.cc/9MGySG0F/blanco2-2.png"></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
          <img className="icono-collapse" src="https://i.postimg.cc/R0J5x0wD/menu-2.png"></img>
          </span>
    </button>
    <div className="collapse navbar-collapse navBar-style" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">QUIENES SOMOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MENÚ</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">RESERVA</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">UBICACIÓN</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTACTO</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
        
    )
}

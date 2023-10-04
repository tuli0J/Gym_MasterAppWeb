import { Link, useNavigate } from "react-router-dom";
import logoImage from "../assets/logo.png";
const NavBar = () => {
  const admin = localStorage.getItem("admin");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleSession = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    navigate("/ingresar")
  }

  return (
    <nav style={{ height: "100px" }}>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#333",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <a className="navbar-brand">
          <img
            style={{
              width: "150px",
              maxHeight: "100px",
            }}
            srcSet={logoImage}
            alt=""
          />
        </a>

        <div className="" id="navbarSupportedContent" style={{ width: token?"40%":"20%" }}>
          <ul
            style={{
              listStyle: "none",
              color: "white",
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <li style={{ textAlign: "center" }}>
              <Link className="dropdown-item" to="/inicio">
                Inicio
              </Link>
            </li>
            {token &&
            
              <>
              <li style={{ textAlign: "center" }}>
                <Link className="dropdown-item" to="/dietas">
                  Dietas
                </Link>
              </li>
              <li style={{ textAlign: "center" }}>
                <Link className="dropdown-item" to="/rutinas">
                  Rutinas
                </Link>
              </li>
              </>
            }
            {admin && (
              <>
                {
                  /*
                  <li style={{ textAlign: "center" }}>
                  <Link className="dropdown-item" to="/ventas">
                    Ventas
                  </Link>
                </li>
                  */
                }
                <li style={{ textAlign: "center" }}>
                  <Link className="dropdown-item" to="/usuarios">
                    Usuarios
                  </Link>
                </li>
              </>
            )}
            {/*fontFamily:"Barlow"*/}

            <li style={{ textAlign: "center" }}>
              <Link className="dropdown-item" to="/ingresar" onClick={()=>handleSession()}>
                {token ? "Cerrar sesion" : "Iniciar Sesión"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

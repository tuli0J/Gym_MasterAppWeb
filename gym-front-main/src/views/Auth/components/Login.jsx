import { AiOutlineUser } from "react-icons/ai";
import { MdPassword } from "react-icons/md";
import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router";
import loginImage from "./../../../assets/logo.png";

const LoginForm = () => {
  const navigate = useNavigate();

  const [state,setState] = useState({
    PV_NOM_USUARIO:"",
    PV_PASS:""
  });
  const handleSubmit = async (e) =>{
    console.log("Click");
    e.preventDefault();
    axios.post("https://strengthened-intelligent-scent.glitch.me/login",state).then(res=>{
      console.log(res); 
      if(res.data.token){
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("admin", res.data.admin);
        navigate("/inicio");
      }
    })
  }

  const handleChange = (e)=>{
    const {value,name} = e.target;
    setState({...state,[name]:value});
    console.log(state);
  }
  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "40%",
        background: "#222",
        paddingLeft: "20px",
      }}
    >
      <div style={{width:"100%",display: "flex",
            justifyContent: "center",
            alignItems: "center",flexDirection:"column"}}>
        <div
          style={{
            width: "250px",
            height: "250px",
            
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={loginImage}
            alt=""
          />
        </div>
        <div style={{ width: "80%", height: "70%", background: "#222" }}>
          <div
            className="card-body"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="card-header"
              style={{
                marginBottom: "20px",
                width: "240px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "none",
                height: "50px",
              }}
            ></div>
            <div className="container">
              <div className="input-group mb-3" style={{ marginBottom: "100px" }}>
                <span className="input-group-text">
                  <AiOutlineUser />
                </span>
                <div className="form-floating">
                  <input
                    onChange={(e)=>handleChange(e)}
                    name="PV_NOM_USUARIO"
                    value={state.PV_NOM_USUARIO}
                    type="text"
                    className="form-control "
                    placeholder="Usuario"
                    required
                  />
                  <label>Usuario</label>
                </div>
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">
                  <MdPassword />
                </span>
                <div className="form-floating">
                  <input
                    onChange={(e)=>handleChange(e)}
                    type="password"
                    className="form-control "
                    placeholder="Contraseña"
                    name="PV_PASS"
                    value={state.PV_PASS}
                    required
                  />
                  <label>Contraseña</label>
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                padding: "10px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a
                href="#"
                className="card-link"
                style={{ marginBottom: "10px", marginRight: "20px" }}
              >
                Olvide mi contraseña
              </a>
              <button
                onClick={(e)=>handleSubmit(e)}
                className="btn btn-outline-primary"
                style={{ marginBottom: "10px", width: "200px" }}
              >
                Iniciar sesion
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

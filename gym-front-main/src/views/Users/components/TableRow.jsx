import axios from "axios";
import { useState } from "react";
import {AiFillEdit} from "react-icons/ai"

const TableRow = (props) =>{
    const [state,setState] = useState({
        nom_usuario:props.nom_usuario,
        contrasena:props.contrasena
    });

    const handleChange = (e)=>{
        const {value,name} = e.target;
        setState({...state,[name]:value});
        console.log(state);
    }
// [
//     const handleEdit = (e) =>{
//         axios.put("",state);

//     }]
    return(
        <div className="accordion" id="accordionExample" style={{marginBottom:"10px"}}>
        <div className="accordion-item">
          <div>
            
              <ul
                id={props.index}
                style={{
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-around",
                  padding: "10px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "5%",
                    boder: "1px solid black",
                  }}
                >
                  {props.index + 1}
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    boder: "1px solid black",
                  }}
                >
                    <input type="text" onChange={(e)=>handleChange(e)} placeholder="Nombre usuario" value={state.nom_usuario} name="nom_usuario" />
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    boder: "1px solid black",
                  }}
                >
                    <input type="text" onChange={(e)=>handleChange(e)} placeholder="Contraseña" value={state.contrasena} name="contrasena" />
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    boder: "1px solid black",
                  }}
                >
                  {props.fec_registro.split('T')[0]}
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "30%",
                    boder: "1px solid black",
                  }}
                >
                  <button style={{background:"none",border:"none"}}><AiFillEdit/></button>
                </li>
              </ul>
          </div>

        </div>
      </div>

    );

}

export default TableRow;
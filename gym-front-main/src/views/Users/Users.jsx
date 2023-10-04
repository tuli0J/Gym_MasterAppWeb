import NavBar from "../../interface/NavBar";
import UserTable from "./components/UserTable";

const Users = () =>{
    return(
        <div>
        <NavBar/>

    <div>


      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1 style={{textAlign:"center",marginBottom:"30px"}}>Usuarios</h1>
        <div  style={{marginTop:"30px",height:"70vh",overflow:"auto",width:"70%"}}>
            
            <UserTable/>
        </div>
      </div>

      <div className="row">
        <div className="col-6"></div>
        <div className="col-6"></div>
      </div>
    </div>

    </div>

    );

}

export default Users;
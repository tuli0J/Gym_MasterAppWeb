import Table from "./components/Table";
import NavBar from "../../interface/NavBar";
const Diet = () => {
  return (
    <div>
        <NavBar/>

    <div>


      <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1 style={{textAlign:"center",marginBottom:"30px"}}>Dietas</h1>
        <div  style={{marginTop:"30px",height:"70vh",overflow:"auto",width:"70%"}}>
            
            <Table/>
        </div>
      </div>

      <div className="row">
        <div className="col-6"></div>
        <div className="col-6"></div>
      </div>
    </div>

    </div>
  );
};

export default Diet;

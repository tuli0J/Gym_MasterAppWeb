import NavBar from "../../interface/NavBar";

const Sales = () => {
  return (
    <div>
      <NavBar />

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Ventas</h1>
          <div
            style={{
              marginTop: "30px",
              height: "70vh",
              overflow: "auto",
              width: "70%",
            }}
          >
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Sales;

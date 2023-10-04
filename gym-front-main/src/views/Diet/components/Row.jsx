const Row = (props) => {
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <div>
          <button
            data-bs-toggle="collapse"
            data-bs-target={`#${props.id}`}
            aria-expanded="false"
            aria-controls={props.id}
            style={{
              height: "100px",
              width: "100%",
              border: "none",
            }}
          >
            <ul
              id={props.id}
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
                {props.id}
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
                {props.title}
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
                {props.categorie}
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
                {props.price}
              </li>
            </ul>
          </button>
        </div>
        <div
          id={props.id}
          className="accordion-collapse collapse "
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems:"center"
              }}
            >
              <div style={{ width: "40%" }}>
                <table className="table caption-top">

                  <tbody>
                    <tr>
                      <th scope="row">Calorias</th>
                      <td>{props.calories}</td>
                    </tr>
                    <tr>
                      <th scope="row">Carboidratos</th>
                      <td>{props.carbs}</td>
                    </tr>
                    <tr>
                      <th scope="row">Proteinas</th>
                      <td>{props.proteins}</td>
                    </tr>
                    <tr>
                      <th scope="row">Grasa</th>
                      <td>{props.fat}</td>
                    </tr>
                    <tr>
                      <th scope="row">Tiempo</th>
                      <td>{props.time}</td>
                    </tr>
                    <tr>
                      <th scope="row">Porciones</th>
                      <td>{props.portions}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ width: "20%", height: "100%",borderRadius:"20px",overflow:"hidden" }}>
                <img
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  src={props.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Row;

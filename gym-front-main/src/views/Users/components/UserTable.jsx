import { useEffect, useState } from "react";
import axios from "axios";
import TableRow from "./TableRow";

const UserTable = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios("https://strengthened-intelligent-scent.glitch.me/personas").then((res) => {
      console.log(res);
      setState(res.data.data);
    });
  }, []);

  const generateCSV = () => {
    const header = ["Codigo", "Clase", "Seccion"];
    const data = state.sections.map(
      (row) =>
        `${row.course.CODE_COURSE},${row.course.NAME},${row.SECTION_CODE}\n`
    );
    const csvContent = `data:text/csv;charset=utf-8,${header[0]},${header[1]},${header[2]}\n
            ${data}
          `;

    const downloadLink = document.createElement("a");
    downloadLink.href = encodeURI(csvContent);
    downloadLink.target = "_blank";
    downloadLink.download = "datos.csv";

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div>
      <div className="m-3 flex justify-around">
        
        {/*
            <button
          onClick={generateCSV}
          className="bg-lime-500 text-white w-40 rounded-md h-8 m-3 hover:bg-lime-600"
        >
          Descargar CSV
        </button>
          
                <button
            onClick={handleDownload}
            className="bg-red-500 text-white w-40 rounded-md h-8 m-3 hover:bg-red-600"
          >
            Descargar PDF
          </button>
          */}
      </div>
      <div
        style={{
          width: "850px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <ul
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
              }}
            >
              #
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
              }}
            >
              Nombre
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
              }}
            >
              Contraseña
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
              }}
            >
              Fecha de entrada
            </li>
            <li
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "30%",
              }}
            >
              Acciones
            </li>
          </ul>
        </div>
        <div>
          <div className="accordion" id="accordionExample">
            {state.map((user,index)=><TableRow key={index} {...user} index = {index} />)}
              
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;

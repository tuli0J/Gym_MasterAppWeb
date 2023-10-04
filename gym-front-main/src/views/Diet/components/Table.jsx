import Row from "./Row";

let props =[
    {
        id:"1",
        price:"200 L",
        title:"Dieta 1",
        categorie:"Categoria 1",
        img:"https://cdn0.recetasgratis.net/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_600.webp",
        calories:"200",
        carbs:"100",
        proteins:"30",
        fat:"30%",
        time:"3 meses",
        portions:"2 diarias",
    },
    {
        id:"3",
        price:"200 L",
        title:"Dieta 1",
        categorie:"Categoria 1",
        img:"https://cdn0.recetasgratis.net/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_600.webp",
        calories:"200",
        carbs:"100",
        proteins:"30",
        fat:"30%",
        time:"3 meses",
        portions:"2 diarias",
    },
    {
        id:"2",
        price:"200 L",
        title:"Dieta 1",
        categorie:"Categoria 1",
        img:"https://cdn0.recetasgratis.net/es/posts/3/2/6/ensalada_de_verduras_variadas_57623_600.webp",
        calories:"200",
        carbs:"100",
        proteins:"30",
        fat:"30%",
        time:"3 meses",
        portions:"2 diarias",
    }
];


const Table = () => {
  return (
    <div style={{width:"850px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        
      <div>
        <ul style={{
            listStyle:"none",
            display:"flex",
            justifyContent:"space-around",
            padding:"10px"
        }}>
          <li style={{display:"flex",justifyContent:"center",alignItems:"center",width:"5%",}}>#</li>
          <li style={{display:"flex",justifyContent:"center",alignItems:"center",width:"30%",}}>Titulo</li>
          <li style={{display:"flex",justifyContent:"center",alignItems:"center",width:"30%",}}>Categoria</li>
          <li style={{display:"flex",justifyContent:"center",alignItems:"center",width:"30%",}}>Precio</li>

        </ul>
      </div>
      <div >
        <div className="accordion" id="accordionExample">
            {props.map(diet=><Row {...diet}/>)}
        </div>
      </div>
    </div>
  );
};


export default Table;

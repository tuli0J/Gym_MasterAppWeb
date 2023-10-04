import { Routes,Route} from "react-router-dom";
import Diet from "../views/Diet/Diet";
import Routines from "../views/Routines/Routines";
import LandingPage from "../views/LandingPage/LandingPage";
import Auth from "../views/Auth/Auth";
import Sales from "../views/Sales/Sales";
import Users from "../views/Users/Users";
export const AppRouter = () => {

    return(
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/inicio" element={<LandingPage/>}/>
          <Route path="/dietas" element={<Diet/>}/>
          <Route path="/rutinas" element={<Routines/>}/>
          <Route path="/ingresar" element={<Auth/>}/>
          <Route path="/ventas" element={<Sales/>}/>
          <Route path="/usuarios" element={<Users/>}/>

        </Routes>
    );
  };
  
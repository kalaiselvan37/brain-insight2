import  {Outlet} from "react-router-dom";
import Header from "../Header/Header";


const Main=()=>{
    
    return(
        <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
      
        </div>


    );
    
};

export default Main;
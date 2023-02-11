import { NavLink,Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return ( 

        <div className="root-layout" >
            <header>
                {/* <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/About'>About</NavLink>
                </nav> */}

                <Navbar/>
            </header>
            <main className="m-4 p-4" >
                <Outlet/>
            </main>
        </div>
     );
}
 
export default RootLayout;
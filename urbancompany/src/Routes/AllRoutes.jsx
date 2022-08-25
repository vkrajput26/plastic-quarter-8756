
import {Link,Route,Routes} from "react-router-dom"
import Hygienic from "../Pages/Hygienic"
import Home from "../Pages/Home"

function Allroutes(){

    return(
        <Routes>
            <Route path="/" element={<Hygienic/>}/>
            <Route path="/home" element={<Home/>} />
        </Routes>
    )
}
export default Allroutes
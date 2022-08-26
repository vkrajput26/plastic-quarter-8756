
import {Link,Route,Routes} from "react-router-dom"
import Hygienic from "../Pages/Hygienic"
import Home from "../Pages/Home"
import LoginVerification from "../Pages/LoginVerificatoin"
function Allroutes(){

    return(
        <Routes>
            <Route path="/" element={<Hygienic/>}/>
            <Route path="/home" element={<Home/>} />
            <Route path="/LoginVerification" element={< LoginVerification/>} />
        </Routes>
    )
}
export default Allroutes
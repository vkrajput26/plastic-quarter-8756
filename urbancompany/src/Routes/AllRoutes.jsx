
import {Link,Route,Routes} from "react-router-dom"
import Hygienic from "../Pages/Hygienic"
function Allroutes(){

    return(
        <Routes>
            <Route path="/" element={<Hygienic/>}/>
        </Routes>
    )
}
export default Allroutes
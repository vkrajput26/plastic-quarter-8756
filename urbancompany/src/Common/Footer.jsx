import {Box} from "@chakra-ui/react"
 import {Link} from "react-router-dom"
export default function Footer(){
    let style={marginBottom:"25px", display:"flex" ,
    gap:"2rem", marginLeft:"4rem"  }
    

    return(
        <>
        <div style={{background:"black", color:"white" ,height:"200px"}}>
            <ul style={style}>
                <Link to="#">About Us</Link>
                <li>UC Impact</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>

                <li style={{width:"15%"}}>Interest-Based Advertising</li>
                <li>Anti Discrimination Policy</li>
                <li>Blog</li>
                <li>Reviews</li> 
                <li>Near Me</li>
                <li>Careers</li>
                <li>Gift Cards</li>
                <li>Contact Us</li>
                <li>Quick Links</li>

            </ul>
            <hr />

            <div>
                <h4 style={{marginBottom:"25px"}}>Serving In</h4>
                <span >Aus</span>
              <ul style={style}>
                <Link to="#">Melbourne</Link>
                <li>Sydney</li>
              </ul>
            </div>
        </div>
        </>
    )
}
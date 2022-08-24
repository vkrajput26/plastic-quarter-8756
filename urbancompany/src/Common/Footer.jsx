import {Box} from "@chakra-ui/react"
 import {Link} from "react-router-dom"
export default function Footer(){

    return(
        <>
        <div style={{background:"black", color:"white" ,height:"200px"}}>
            <ul style={{display:"flex",justifyContent:"space-between" ,
            gap:"2rem", marginLeft:"4rem"  }}>
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
        </div>
        </>
    )
}
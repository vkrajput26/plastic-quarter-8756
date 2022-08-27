import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
export default function MensGrooming(){

    const [data,setData]=useState([])

    useEffect(()=>{
        axios.get(`https://urbancompanydata.herokuapp.com/api/urbanmensdata`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{console.log(err)})
        
    },[])
       console.log("datamens",data)
    return <div>

        {
            data?.map((el)=>{
                return  <div>
                <div>
                    <div>
                            <h1>{el.package}</h1>
                            <h5>{el.description}</h5>
                            <h1>*{el.rating}</h1>

                            <div >
                                 <h1>{el.price}</h1>
                                 <h1>{el.time}</h1>           
                            </div>

                        <div>
                            <button>{el.button}</button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <ul>
                            <li>{el.feature}</li>
                            <li>{el.benefits}</li>
                        </ul>
    
                    </div>
                    
                </div>
    
                <div>
                        <img src={el.image}  />
                        <button>{el.addbutton}</button>
                </div>
             </div>
            })
        }
        

    </div>
}
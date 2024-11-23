// import { useContext } from "react";
// import ThemeContext from "../contexts/theme";

import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeProvider";

export default function Card() {

const {name,setName} = useTheme()




const[value , setValue ] = useState(" ");

useEffect(()=>{
 value && setName(value)
},[value,setName])  

    return (
        <>
         <input style={{border:"2px solid red ",padding: "10px"}}
         type="text"  
         onChange={(e)=> setValue(e.target.value)}
         value={value} 
         />

         <h1>Hello my name is {name}</h1>

         
     
        </>
       
    );
}

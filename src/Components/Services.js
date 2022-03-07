import React,{useState,} from "react";
import EaringsSlide from "./Services/EaringsSlide";
import Title from "./Title/Title";
import TitleBracelets from "./TitleBracelets/TitleBracelets";
import TitleEarings from "./TitleEarings/TitleEarings";
import { AiOutlineArrowRight,AiOutlineArrowLeft} from 'react-icons/ai';
import './Services.css'

function Servises() {
 
    const slideArr = [<TitleBracelets/>,<Title/>,<TitleEarings/>]    

const [i, setI] = useState(0)


// useEffect(() => {
    
//      setInterval(() => {
        
//         setI((current) => {
            
//             const res = current === slideArr.length - 1 ? 0 : current + 1
           
//             return res
//         })
//     }, 8000)
    
//     return () => clearInterval()
// }, [])




const next =()=>{
    setI( i === slideArr.length - 1 ? 0 : i + 1)
}          


 const prev = ()=>{
    setI(i=== 0 ? slideArr.length - 1 : i - 1)
              
 }


const slide = slideArr.filter((el,ind)=>{
     return  ind===i
})


    return(<div >
    
             <div className="slide_div">
                 {slide}
                
                <AiOutlineArrowRight className={"btn_nextserv"} onClick={next}/>
                <AiOutlineArrowLeft className={"btn_prevserv"} onClick={prev}/>
            </div>
            <div className="EaringsSlide_div">
            <EaringsSlide/>

            </div>
    </div>
    )
}


export default Servises
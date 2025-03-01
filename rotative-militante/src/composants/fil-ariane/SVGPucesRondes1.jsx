import {React} from "react"

function SVGPucesRondes1({nombre,index}){
    return(
        <g id="filariane">
            <circle id="puce_1" cx="10" cy="30" r="8" fill="#ffffff" fillOpacity="1" stroke="#ffffff" strokeWidth="1.5"/>
            <circle id="puce_2" cx="30" cy="30" r="8" fill="#ffffff" fillOpacity="0.3" stroke="#ffffff" strokeWidth="1.5"/>
            <circle id="puce_3" cx="50" cy="30" r="8" fill="#ffffff" fillOpacity="1" stroke="#ffffff" strokeWidth="1.5"/>
        </g>
            
    )
}
export {SVGPucesRondes1}
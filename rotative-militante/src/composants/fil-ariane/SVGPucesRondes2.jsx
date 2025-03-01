import {React} from "react"

function SVGPucesRondes2(){
    return(
        <>
            <defs>
                <radialGradient id="fillGradient" gradientUnits="objectBoundingBox" cx="50%" cy="100%" r="100%">
                    <stop offset="0%" stopColor="#ffffffaa"/>
                    <stop offset="1000%" stopColor="#ffffff00"/>
                </radialGradient>
                <radialGradient id="strokeGradient" gradientUnits="objectBoundingBox" cx="50%" cy="0%" r="100%">
                    <stop offset="0%" stopColor="#ffffff55"/>
                    <stop offset="1000%" stopColor="#ffffff00"/>
                </radialGradient>
            </defs>
            <g id="fil_ariane">
                <circle id="puce_01" cx="10"  cy="10" r="8" fill="url(#fillGradient)" fillOpacity="1" stroke="url(#strokeGradient)" strokeWidth="1"/>
                <circle id="puce_02" cx="30"  cy="10" r="5" fill="url(#fillGradient)" fillOpacity="1" stroke="url(#strokeGradient)" strokeWidth="1"/>
                <circle id="puce_02" cx="50"  cy="10" r="8" fill="url(#fillGradient)" fillOpacity="1" stroke="url(#strokeGradient)" strokeWidth="1"/>
            </g>
        </>
            
    )
}
export {SVGPucesRondes2}
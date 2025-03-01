import Image from "next/image";
import styles from "./page.module.css";
import {SVGPucesRondes1} from "@/composants/fil-ariane/SVGPucesRondes1";
import {SVGPucesRondes2} from "@/composants/fil-ariane/SVGPucesRondes2";

export default function Home() {
  return (
    <div className={styles.page}>
      
      <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" width="200" height="200">
        <rect x="0" y="0" width="600" height="600" fill="green" />
        <SVGPucesRondes2/>
        <SVGPucesRondes1/>
      </svg>
    </div>
  );
}

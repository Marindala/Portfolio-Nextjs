import Head from 'next/head'
import Image from 'next/image'
import * as Components from "../components";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
     
      

      <main>
      <div>
      <Components.About/>
       <Components.CardProjects/>
       </div>

       

        <div className={styles.grid}>
          

          

         

         
        </div>
      </main>

    </div>
  )
}

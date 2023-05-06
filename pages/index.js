import Head from "next/head";
import Image from "next/image";
import * as Components from "../components";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main>
      <div>
      
        <Components.Navbar/>
      
      </div>
      <div>
        <Components.About />
      </div>
      <div>
        <Components.CardProjects />
      </div>
    </main>
  );
}

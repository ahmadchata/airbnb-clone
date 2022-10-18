import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
    </div>
  );
}

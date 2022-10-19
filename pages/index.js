import Head from "next/head";
import NavBar from "../components/Navbar";
import Listings from "../components/Listings";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta name="description" content="Airbnb App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Listings />
      <Footer />
    </div>
  );
}

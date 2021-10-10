// import Contact from "async!./Contact";
import Footer from "./Footer";
import Landing from "async!./Landing";
import NavBar from "./NavBar";

const Home = () => (
  <div>
    <NavBar />
    <Landing />
    {/* <Contact /> */}
    <Footer />
  </div>
);

export default Home;

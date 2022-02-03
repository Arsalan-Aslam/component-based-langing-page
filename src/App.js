import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import NewProduct from "./components/NewProduct/NewProduct";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <NewProduct />
      <Footer />
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Categories from "./components/Categories";
// import Product from "./components/Product";

// import Discount from "./components/Discount";
// import Services from "./components/Services";
// import Facebook from "./components/Facebook";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Categories />
      <Product />
      <Discount />
      <Services />
      <Facebook /> */}
      <Homepage/>
      <Footer />
     
    </div>
  );
}

export default App;

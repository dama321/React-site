import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Sidebar from "../Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

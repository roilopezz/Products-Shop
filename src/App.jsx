import "./App.css";
import NavBar from "./components/pages/navbar/navbar";
import Dashboard from "./components/pages/dashboard/dashboard";
import CartsContexts from "./contexts/contexCart";
import Footer from "./components/pages/footer/footer";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <CartsContexts>
        <header className="fixed-top">
          <NavBar />
        </header>

        <main className="container-fluid pt-5 flex-fill ">
          <Route path="/" component={Dashboard} />
        </main>

        <footer>
          <Footer />
        </footer>
      </CartsContexts>
    </div>
  );
}

export default App;

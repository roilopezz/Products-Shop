import "./App.css";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer/footer";
import ShopContext from "./services/shopContext";
import UserContext from "./services/userContext";

function App() {
  return (
    <div className="App">
      <UserContext>
        <ShopContext>
          <Dashboard />

          <footer>
            <Footer />
          </footer>
        </ShopContext>
      </UserContext>
    </div>
  );
}

export default App;

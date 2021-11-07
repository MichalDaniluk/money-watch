import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";
import StartPage from "./Pages/Start";
import FormPage from "./Pages/Form";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h2>Moje finanse</h2>
          <Header />
        </header>
        <div className="main-container">
        <Route path="/" exact component={StartPage} />
          <Route
            path="/logout"
            render={() => (
                <LoginForm />
            )}
          />
          <Route path="/form" component={FormPage} />
          <Footer></Footer>
      </div>
      </div>
    </Router>
  );
}

export default App;

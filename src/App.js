import Header from "./components/Header";
import Home from "./components/Home";
import ShowSummary from "./components/ShowSummary";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/show/:id" element={<ShowSummary/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

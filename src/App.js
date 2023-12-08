import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/front/home';
import ProceedAs from './pages/front/continueAs';
import MerchantForm from './pages/merchant';
import "antd/dist/reset.css"
function App() {
  return (
   <Router>
      <Routes>
        <Route path={"/"} element={<Home />} exact />
        <Route path={"/proceesAs"} element={<ProceedAs />} exact />
        <Route path={"/merchantIndex"} element={<MerchantForm />} exact />
      </Routes>
   </Router>
  );
}

export default App;

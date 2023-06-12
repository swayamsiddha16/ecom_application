import './App.css';
import LoginPage from './components/pages/LoginPage';
import { Routes, Route } from "react-router-dom"
import ShopList from './components/pages/ShopList';
import { useRoutes } from "react-router-dom";


const routes = ()=>[
  
    { path: "/", element: <LoginPage /> },
    { path: "shop", element: <ShopList /> },
]
function App() {
  const routing = useRoutes(routes());
  return (
    <div className="App">
   {routing}
      
    </div>
  );
}

export default App;

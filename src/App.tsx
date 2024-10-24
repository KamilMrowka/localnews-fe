import {Route, Routes} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ArticlePage from "./pages/ArticlePage";


function App() {
    return (
        <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/article" element={ <ArticlePage /> } />
        </Routes>
  )
}

export default App
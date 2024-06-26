import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Pages
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

//Components
import NavBar from './components/NavBar';

function App() {

    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product_details/:id" element={<ProductDetails />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App

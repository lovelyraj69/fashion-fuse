import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Listing from './pages/Listing';
import ProductDetails from './pages/ProductDetails';

const MyContext = createContext()

function App() {

  const [productsData, setProdctsData] = useState([]);

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [openProduct, setOpenProduct] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isToggleSlidebar, setToggleSlidebar] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    userId: ''
  })

  const [baseUrl, setBaseUrl] = useState('http://localhost:8080');

  const [progress, setProgress] = useState(0);
  const [alertBox, setAlertBox] = useState({
    msg: '',
    error: false,
    open: false
  });

  useEffect(() => {
    getCountryList('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const getCountryList = async (url) => {
    const respons = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  useEffect(() => {
    const token =  localStorage.getItem('token');

    if (token !== '' && token !== undefined && token !== null) {
      setIsLogin(true);

      const userData = JSON.parse(localStorage.getItem('user'));

      setUser(userData);

    } else {
      setIsLogin(false);
    }
  },[isLogin]);

  const handleClose = (event,reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open: false
    });
  }

  // const fetchProducts = () => {
  //   fetchDataFromApi('/api/products')
  //   .then((res) => {
  //     setProdctsData(res);
  //     setProgress(100);
  //   })
  // }

  const values = {
    baseUrl,
    countryList,
    selectedCountry, setSelectedCountry,
    openProduct, setOpenProduct,
    isHideSidebarAndHeader, setIsHideSidebarAndHeader,
    progress, setProgress,
    alertBox, setAlertBox,
    isLogin, setIsLogin,
    isToggleSlidebar, setToggleSlidebar,
    user, setUser,

    // productsData, fetchProducts
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/cat/:id' exact={true} element={<Listing />} />
          <Route exact={true} path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Footer />
        {
          openProduct === true && <ProductModal />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

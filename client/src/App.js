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
import Cart from './pages/Cart';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const MyContext = createContext()

function App() {

  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [openProduct, setOpenProduct] = useState({
    id: '',
    open: false
  });
  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [isToggleSlidebar, setToggleSlidebar] = useState(false);


  const [productsData, setProdctsData] = useState([]);
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

  // fetch country data

  useEffect(() => {
    getCountryList('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const getCountryList = async (url) => {
    const respons = await axios.get(url).then((res) => {
      setCountryList(res.data.data)
      console.log(res.data.data)
    })
  }

  // fetch products data

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('http://localhost:8080/api/products');
      const jsonResult = await result.json();

      setProdctsData(jsonResult);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token !== '' && token !== undefined && token !== null) {
      setIsLogin(true);

      const userData = JSON.parse(localStorage.getItem('user'));

      setUser(userData);

    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open: false
    });
  }

  const values = {
    baseUrl,
    countryList,
    selectedCountry, setSelectedCountry,
    openProduct, setOpenProduct,
    isHeaderFooterShow, setIsHeaderFooterShow,
    isHideSidebarAndHeader, setIsHideSidebarAndHeader,
    progress, setProgress,
    alertBox, setAlertBox,
    isLogin, setIsLogin,
    isToggleSlidebar, setToggleSlidebar,
    user, setUser,

    productsData
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        <Routes>
          <Route path='/' exact={true} element={<Home />} />
          <Route path='/cat/:id' exact={true} element={<Listing />} />
          <Route exact={true} path='/product/:id' element={<ProductDetails />} />
          <Route exact={true} path='/cart' element={<Cart />} />
          <Route exact={true} path='/signIn' element={<SignIn />} />
          <Route exact={true} path='/signUp' element={<SignUp />} />
        </Routes>
        {
          isHeaderFooterShow === true && <Footer />
        }

        {
          openProduct.open === true && <ProductModal data={productsData} />
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext };

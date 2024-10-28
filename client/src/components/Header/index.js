import { Link } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { Button } from "@mui/material";
import { LuUser } from "react-icons/lu";
import { RiShoppingCart2Line } from "react-icons/ri";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext } from "react";
import { MyContext } from "../../App";
import Logo from '../../asserts/images/bacola-logo.png'

const Header = () => {

    const context = useContext(MyContext)

    return (
        <>
            <div className="headerWrapper">

                <div className="top-strip bg-orange">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center"><b>Fashion </b>is what  you buy. <b>Style</b> is what you do with it</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                            </div>
                            <div className="part2 col-sm-10 d-flex align-items-center">

                                {
                                    context.countryList.length!==0 && <CountryDropdown />
                                }
                                
                                <SearchBox />

                                <div className="part3 d-flex align-items-center">
                                    <Button className="circle mr-3"><LuUser /></Button>
                                    <div className="cartTab ml-auto d-flex align-items-center">
                                        <span className="price">$3.69</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle"><RiShoppingCart2Line /></Button>
                                            <span className="count d-flex align-items-center justify-content-center">1</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> 
                </header>

                <Navigation />

            </div>
        </>
    )
}

export default Header;
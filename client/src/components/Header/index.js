import { Link, useNavigate } from "react-router-dom";
import CountryDropdown from "../CountryDropdown";
import { Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { RiShoppingCart2Line } from "react-icons/ri";
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { useContext, useState } from "react";
import { MyContext } from "../../App";
import Logo from '../../asserts/images/bacola-logo.png';
import { Logout, Mail, PersonAdd } from "@mui/icons-material";

const Header = () => {

    const context = useContext(MyContext);
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpenAcc, setIsOpenAcc] = useState(false);
    const openAcc = Boolean(anchorEl);
    const [isOpenNotificationDrop, setIsOpenNotificationDrop] = useState(false);
    const openNotification = Boolean(isOpenNotificationDrop);

    const handleClick = () => {
        navigate('/cart');
    }

    const handleCloseAccDrop = () => {
        setAnchorEl(null);
    }

    const handleOpenAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleOpenNotificationDrop = () => {
        setIsOpenNotificationDrop(true);
    }

    const handleLogout = () => {
        localStorage.clear();

        setAnchorEl(null);

        context.setAlertBox({
            open: true,
            error: false,
            msg: 'Logout successfully!'
        })

        setTimeout(() => {
            navigate('/signin')
        },2000);
    }

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
                                    context.countryList.length !== 0 && <CountryDropdown />
                                }

                                <SearchBox />

                                <div className="part3 d-flex align-items-center">

                                    {
                                        context.isLogin !== true ? <Link to={'/signIn'}>
                                            <Button className="logBtn me-1">Sign In </Button>
                                        </Link> : <div>
                                            <Button className="circle me-1" onClick={handleOpenAccDrop}>
                                                {context.user?.name?.charAt(0)}
                                            </Button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                id="accMenu"
                                                open={openAcc}
                                                onClose={handleCloseAccDrop}
                                                onClick={handleCloseAccDrop}
                                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                            >
                                                <MenuItem onClick={handleCloseAccDrop}>
                                                    <ListItemIcon>
                                                        <PersonAdd />
                                                    </ListItemIcon>
                                                    {context.user?.name}
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseAccDrop}>
                                                    <ListItemIcon>
                                                        <Mail />
                                                    </ListItemIcon>
                                                    {context.user?.email}
                                                </MenuItem>
                                                <MenuItem onClick={handleLogout}>
                                                    <ListItemIcon>
                                                        <Logout />
                                                    </ListItemIcon>
                                                    Logout
                                                </MenuItem>
                                            </Menu>
                                        </div>
                                    }

                                    <div className="cartTab ml-auto d-flex align-items-center">
                                        <span className="price">$3.69</span>
                                        <div className="position-relative ml-2">
                                            <Button className="circle ms-1" onClick={handleClick}><RiShoppingCart2Line /></Button>
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
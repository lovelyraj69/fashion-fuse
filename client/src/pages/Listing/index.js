import React, { useState } from "react";
import SideBar from "../../components/SideBar";
import bannerImg5 from '../../asserts/images/banner_img_5.webp';
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { FaAngleDown } from "react-icons/fa";
import { Button } from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from "../../components/ProductItem";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Listing = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [productView, setProductView] = useState('four');
    const openDropDown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <section className="product_listing_page">
                <div className="container">
                    <div className="productListing d-flex">
                        <SideBar />
                        <div className="content_right">
                            <img src={bannerImg5} className="w-100" />

                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button className={productView === 'one' && 'act'}
                                        onClick={() => setProductView('one')}><GiHamburgerMenu /></Button>
                                    <Button className={productView === 'three' && 'act'}
                                        onClick={() => setProductView('three')}><TfiLayoutGrid2Alt /></Button>
                                    <Button className={productView === 'four' && 'act'}
                                        onClick={() => setProductView('four')}><TfiLayoutGrid3Alt /></Button>
                                </div>

                                <div className="ml-auto showByFilter">
                                    <Button onClick={handleClick}>Show 9 <FaAngleDown /></Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropDown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>40</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>
                                        <MenuItem onClick={handleClose}>60</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing">
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                                <ProductItem itemView={productView} />
                            </div>

                            <div className="d-flex align-items-center justify-content-center mt-5">
                                <Pagination count={10} color="warning" shape="rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Listing;
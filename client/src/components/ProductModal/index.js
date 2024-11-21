import { Button, Dialog, Rating } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { useContext } from "react";
import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MyContext } from "../../App";
import ProductZoom from "../ProductZoom";
import { RiShoppingCart2Line } from "react-icons/ri";



const ProductModal = () => {

    const context = useContext(MyContext)

    const closeProduct = () => {
        context.setOpenProduct(false);
    }

    return (
        <>
            <Dialog className="productModal" open={true} onClose={closeProduct} >
                <Button className='close' onClick={closeProduct} ><IoCloseSharp /></Button>
                <h4 className="mb-1">The anime printed black t-shir</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center me-4">
                        <span>Brand :</span>
                        <span className="ms-2 text-danger"><b>Jackey</b></span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
                </div>

                <hr />

                <div className="row mt-2 productDetaileModal">
                    <div className="col-md-5">
                        
                        <ProductZoom />

                    </div>
                    <div className="col-md-7">
                        <div className="d-flex lign-items-center info">
                            <span className="oldPrice lg">$9.05</span>
                            <span className="netPrice lg text-danger">$5.25</span>
                        </div>
                        <span className="badge text-success fs-6 ms-3">In Stock</span>
                        <p className="mt-3 ms-3">Ready to wear the good product</p>
                        <div className="d-flex align-items-center ms-4">
                            <QuantityBox />
                            <Button className="cartBtn"><RiShoppingCart2Line className="fs-5 me-2" />Add to Cart</Button>
                        </div>
                        <div className="d-flex align-itmes-center mt-3 ms-3 gap-3">
                            <Button className="text-secondary border-light rounded-0" variant="outlined">
                                <FaRegHeart className="fs-6 me-2" />ADD TO WISHLIST</Button>
                            <Button className="text-secondary border-light rounded-0" variant="outlined">
                                <MdCompareArrows className="fs-5 me-2" />COMPARE</Button>
                        </div>
                        <div className="remark mt-4 ms-3">
                            <h5 className="text-secondary fs-6">
                                <TiTick className="text-success fs-5 me-2" />Get the latest trends here!</h5>
                            <h5 className="text-secondary fs-6">
                                <TiTick className="text-success fs-5 me-2" />Discover your personal style!</h5>
                            <h5 className="text-secondary fs-6">
                                <TiTick className="text-success fs-5 me-2" />Looking for something unique?</h5>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    )
}

export default ProductModal;
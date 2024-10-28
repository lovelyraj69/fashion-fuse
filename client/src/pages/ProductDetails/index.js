import ProductZoom from "../../components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../components/QuantityBox";
import { Button } from "@mui/material";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";


const ProductDetails = () => {
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <ProductZoom />
                        </div>

                        <div className="col-md-8 ps-5">
                            <h2 className="hd text-capitalize ms-3">All Natural Italian-Style Chicken Meatballs</h2>
                            <ul className="list list-inline d-flex align-items-center ms-3">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-secondary me-2">Brand: </span>
                                        <span className="text-dark">Waln's</span>
                                    </div>
                                </li>
                                <li className="list-inline-item ms-3">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" size="small" value={4.5} precision={0.5} readOnly />
                                        <span className="ms-2 text-secondary cursor">1 Review</span>
                                    </div>
                                </li>
                            </ul>

                            <div className="d-flex info">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ms-2">$14.00</span>
                            </div>

                            <span className="badge badge-successes text-success ms-3 fs-5">In Stack</span>

                            <p className="mt-3 ms-3">
                                It seems like I can’t generate any more images right now. Please try again later. If you need help with
                                anything else in the meantime, feel free to ask!
                                It seems like I can’t generate any more images right now. Please try again later. If you need help with
                                anything else in the meantime, feel free to ask!
                            </p>

                            <div className="d-flex align-items-center mt-4">
                                <QuantityBox />
                                <Button className="cartBtn"><RiShoppingCart2Line className="fs-6" /> &nbsp; Add To Cart</Button>
                            </div>

                            <div className="d-flex align-itmes-center mt-4 ms-3 gap-3">
                                <Button className="text-secondary border-light rounded-0" variant="outlined">
                                    <FaRegHeart className="fs-6 me-2" />ADD TO WISHLIST</Button>
                                <Button className="text-secondary border-light rounded-0" variant="outlined">
                                    <MdCompareArrows className="fs-5 me-2" />COMPARE</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails;
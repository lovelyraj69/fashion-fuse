import ProductZoom from "../../components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../components/QuantityBox";
import { Button } from "@mui/material";
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { MdCompareArrows } from "react-icons/md";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import reviewImg from '../../asserts/images/avathor_img_1.jpg';
import Relatedproducts from "./RelatedProducts";


const ProductDetails = () => {

    const [activeSize, setActiveSize] = useState(null);
    const [like, setLike] = useState(false);
    const [activeTabs, setActiveTabs] = useState(0);

    const isActive = (index) => {
        setActiveSize(index);
    }

    const handleLike = () => {
        setLike(!like);
    };

    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <ProductZoom />
                            </div>
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

                            <div className="productSize d-flex align-items-center mt-4 ms-3">
                                <span>Size: </span>
                                <ul className="list list-inline mb-0 pl-4">
                                    <li className="list-inline-item d-flex ms-3">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`}
                                            onClick={() => setActiveSize(0)} > S </a>
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`}
                                            onClick={() => setActiveSize(1)} > M </a>
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`}
                                            onClick={() => setActiveSize(2)} > L </a>
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`}
                                            onClick={() => setActiveSize(3)} > XL </a>
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`}
                                            onClick={() => setActiveSize(4)} > XXL </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <QuantityBox />
                                <Button className="cartBtn ms-3"><RiShoppingCart2Line className="fs-6" /> &nbsp; Add To Cart</Button>
                                <Tooltip title='Add to Wishlist' placement='top'>
                                    <Button className="btn btn-cricle ms-3" onClick={handleLike}>
                                        {like ? (
                                            <FaHeart className="fs-6 color-danger" />
                                        ) : (
                                            <FaRegHeart className="fs-6" />
                                        )}
                                    </Button>
                                </Tooltip>
                                <Tooltip title='Add to Compare' placement='top'>
                                    <Button className="btn btn-cricle ms-1"><MdCompareArrows className="fs-6" /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline d-flex">
                                <li className="list-inline=-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => setActiveTabs(0)}>
                                        Description
                                    </Button>
                                </li>
                                <li className="list-inline=-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => setActiveTabs(1)}>
                                        Additional info
                                    </Button>
                                </li>
                                <li className="list-inline=-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => setActiveTabs(2)}>
                                        Reviews (3)
                                    </Button>
                                </li>
                            </ul>

                            <br />

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>
                                        Although cloth is a type of fabric, not all fabrics can be classified as cloth
                                        due to differences in their manufacturing processes, physical properties, and intended uses.
                                        Materials that are woven, knitted,Although cloth is a type of fabric, not all fabrics
                                        can be classified as cloth due to differences in their manufacturing processes, physical
                                        properties, and intended uses. Materials that are woven, knitted,
                                    </p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&

                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>32.5″ × 32.5″ × 32.5″</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        <p>32.5″ × 32.5″ × 32.5″</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-w-wheels">
                                                    <th>Folded (w/ wheels)</th>
                                                    <td>
                                                        <p>32.5″ × 32.5″ × 32.5″</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="frame">
                                                    <th>Frame</th>
                                                    <td>
                                                        <p>Aluminum</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-wo-wheels">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight-capacity">
                                                    <th>Weight Capacity</th>
                                                    <td>
                                                        <p>20 LBS</p>
                                                    </td>
                                                </tr>
                                                <tr className="weight">
                                                    <th>Weight (w/o wheels)</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>Handle height (ground to handle)</th>
                                                    <td>
                                                        <p>37-45</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>Wheels</th>
                                                    <td>
                                                        <p>12 air / wide track slick tread</p>
                                                    </td>
                                                </tr>
                                                <tr className="seat-back-height">
                                                    <th>Seat back height</th>
                                                    <td>
                                                        <p>21.5</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Head room (inside canopy)</th>
                                                    <td>
                                                        <p>37-45</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Color</th>
                                                    <td>
                                                        <p>Black, Blue, Red, White</p>
                                                    </td>
                                                </tr>
                                                <tr className="head-room-inside-canopy">
                                                    <th>Size</th>
                                                    <td>
                                                        <p>M,S</p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            }

                            {
                                activeTabs === 2 &&

                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Customer questions & answers</h3>

                                            <br />

                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image">
                                                    <div className="rounded-circle">
                                                        <img src={reviewImg} className="avathorImg" />
                                                    </div>
                                                    <span className="text-g d-block text-center font-weight-bold mt-3">
                                                        Eniyaraj
                                                    </span>
                                                </div>

                                                <div className="info pl-5">
                                                    <div className="d-flex align-items-center w-100">
                                                        <h5 className="text-secondary">28-10-2024</h5>
                                                        <div className="ml-auto">
                                                            <Rating value={4.5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Fashion is most often thought of as a global industry that is invested
                                                        in anticipating what wewear and how we wish to appear to others. But fashion
                                                        isn’t just a business. It’s also a cultural and.
                                                    </p>
                                                </div>
                                            </div>

                                            <br className="res-hide" />
                                            <br className="res-hide" />

                                            <form className="reviewForm">
                                                <h4>Add a review</h4>
                                                <div className="form-group mt-4">
                                                    <textarea className="form-control textBox" placeholder="Write a review . . ." name="review">
                                                    </textarea>
                                                </div>

                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text"
                                                                placeholder="Name"
                                                                className="form-control"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <Rating name="rating" value={3} precision={0.5} />
                                                    </div>
                                                </div>

                                                <br />

                                                <div className="form-group">
                                                    <Button type="submit" className="cartBtn">Submit Review</Button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <br />

                    <Relatedproducts title="RELATED PRODUCTS" />

                    <Relatedproducts title="RECENTLY VIEWED PRODUCTS" />
                </div>
            </section>
        </>
    )
}

export default ProductDetails;
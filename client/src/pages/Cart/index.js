import { Button, Rating } from '@mui/material';
import productImg1 from '../../asserts/images/products_img_2.jpeg';
import { Link } from 'react-router-dom';
import QuantityBox from '../../components/QuantityBox/index';
import { IoClose } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";

const Cart = () => {
    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-2">Your Cart</h2>
                    <p>There are <b className='text-red'>3</b> products in your cart</p>
                    <div className="row">
                        <div className="col-md-9 pe-5">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th width='40%'>Product</th>
                                            <th width='15%'>Unit Price</th>
                                            <th width='20%' style={{ paddingRight: '10px' }}>Quantity</th>
                                            <th width='15%'>Subtotal</th>
                                            <th width='10%'>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1' className='productLink'>
                                                    <div className="d-flex align-items-center cartImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src={productImg1} className='w-100' />
                                                        </div>

                                                        <div className='info px-3'>
                                                            <h6 className='productName'>The product name</h6>
                                                            <Rating value={4} precision={0.5} readOnly size='small' />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%' className='quantityDrop'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoClose /></span></td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1' className='productLink'>
                                                    <div className="d-flex align-items-center cartImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src={productImg1} className='w-100' />
                                                        </div>

                                                        <div className='info px-3'>
                                                            <h6 className='productName'>The product name</h6>
                                                            <Rating value={4} precision={0.5} readOnly size='small' />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%' className='quantityDrop'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoClose /></span></td>
                                        </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td width='40%'>
                                                <Link to='/product/1' className='productLink'>
                                                    <div className="d-flex align-items-center cartImgWrapper">
                                                        <div className="imgWrapper">
                                                            <img src={productImg1} className='w-100' />
                                                        </div>

                                                        <div className='info px-3'>
                                                            <h6 className='productName'>The product name</h6>
                                                            <Rating value={4} precision={0.5} readOnly size='small' />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='20%' className='quantityDrop'>
                                                <QuantityBox />
                                            </td>
                                            <td width='15%'>$7.25</td>
                                            <td width='10%'><span className='remove'><IoClose /></span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className='card border p-2 cartDetails'>
                                <h4>CART TOTALS</h4>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Subtotal</span>
                                    <span className='ml-auto text-red fw-bold'>$7.25</span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Shipping</span>
                                    <span className='ml-auto'><b>FREE</b></span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Estimate for</span>
                                    <span className='ml-auto'><b>United Kingdom</b></span>
                                </div>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Total</span>
                                    <span className='ml-auto text-red fw-bold'>$7.25</span>
                                </div>

                                <Button className='cartBtn'><RiShoppingCart2Line className='fs-5 me-2' />Place order</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;
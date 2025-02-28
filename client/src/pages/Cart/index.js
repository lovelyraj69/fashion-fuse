import { Button, Rating } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/cartSlice";
import QuantityBox from '../../components/QuantityBox/index';
import Tshirt from '../../asserts/images/products_img_1.jpeg'

const Cart = () => {
    const navigator = useNavigate();

    const dispatch = useDispatch();
    const { cartItems, totalQuantity, totalPrice } = useSelector((state) => state.cart);

    return (
        <>
            <section className="section cartPage">
                <div className="container">
                    <h2 className="hd mb-2">Your Cart</h2>
                    <p>There are <b className='text-red'>{totalQuantity}</b> products in your cart</p>

                    <div className="row">
                        <div className="col-md-9 pe-5">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th width='40%'>Product</th>
                                            <th width='15%'>Unit Price</th>
                                            <th width='20%'>Quantity</th>
                                            <th width='15%'>Subtotal</th>
                                            <th width='10%'>Remove</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.length === 0 ? (
                                            <tr>
                                                <td colSpan="5">
                                                    <p className="text-center text-red">Your cart is empty!</p>
                                                </td>
                                            </tr>
                                        ) : (
                                            cartItems.map((item) => (
                                                <tr key={item.id}>
                                                    <td width='40%'>
                                                        <Link to={`/product/${item.id}`} className='productLink'>
                                                            <div className="d-flex align-items-center cartImgWrapper">
                                                                <div className="imgWrapper">
                                                                    <img src={Tshirt} className='w-100' alt={item.name} />
                                                                </div>
                                                                <div className='info px-3'>
                                                                    <h6 className='productName'>{item.name}</h6>
                                                                    <Rating value={item.rating || 4} precision={0.5} readOnly size='small' />
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </td>
                                                    <td width='15%'>₹{item.price}</td>
                                                    <td width='20%' className='quantityDrop'>
                                                        <QuantityBox />
                                                    </td>
                                                    <td width='15%'>₹{item.price * item.quantity}</td>
                                                    <td width='10%'>
                                                        <span className='remove'>
                                                            <IoClose onClick={() => dispatch(removeFromCart(item.id))} />
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Cart Summary Section */}
                        <div className="col-md-3">
                            <div className='card border p-2 cartDetails'>
                                <h4>CART TOTALS</h4>

                                <div className='d-flex align-items-center mb-3'>
                                    <span>Subtotal</span>
                                    <span className='ml-auto text-red fw-bold'>₹{totalPrice.toFixed(2)}</span>
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
                                    <span className='ml-auto text-red fw-bold'>₹{totalPrice.toFixed(2)}</span>
                                </div>

                                <Button className='cartBtn'>
                                    <RiShoppingCart2Line className='fs-5 me-2' onClick={() => navigator("/signIn")} />Place order
                                </Button>

                                <Button className='cartBtn mt-2' color="error" onClick={() => dispatch(clearCart())}>
                                    Clear Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;

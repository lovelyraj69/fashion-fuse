import { MdVerified } from "react-icons/md";
import { PiSealWarningFill } from "react-icons/pi";
import { BiSolidOffer } from "react-icons/bi";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row topInfo">
                        <div className="col d-flex align-items-center gap-2">
                            <span><MdVerified /></span>
                            <span>Everyday fresh products</span>
                        </div>
                        <div className="col d-flex align-items-center gap-2">
                            <span>< PiSealWarningFill /></span>
                            <span>Free devlivery for order over $70</span>
                        </div>
                        <div className="col d-flex align-items-center gap-2">
                            <span><BiSolidOffer /></span>
                            <span>Daily mega discounts</span>
                        </div>
                        <div className="col d-flex align-items-center gap-2">
                            <span><BiSolidBadgeDollar /></span>
                            <span>Best price on the market</span>
                        </div>
                    </div>

                    <div className="row mt-4 linksWrapper">
                        <div className="col">
                            <h5>CLOTHING</h5>
                            <ul>
                                <li><Link>Shirt</Link></li>
                                <li><Link>Pants</Link></li>
                                <li><Link>Dresses $ Skirts</Link></li>
                                <li><Link>Coats & Jackets</Link></li>
                                <li><Link>Underwear</Link></li>
                                <li><Link>Hoodies & Sweatshirts</Link></li>
                                <li><Link>Suits</Link></li>
                                <li><Link>Sweaters</Link></li>
                                <li><Link>Socks</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>FOOTWEAR</h5>
                            <ul>
                                <li><Link>Athletic</Link></li>
                                <li><Link>Boots</Link></li>
                                <li><Link>Fashio Sneakers</Link></li>
                                <li><Link>Loafers & Slip Ons</Link></li>
                                <li><Link>Outdoor</Link></li>
                                <li><Link>Oxfords</Link></li>
                                <li><Link>Sandals</Link></li>
                                <li><Link>Slippers</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>ACCESSORIES</h5>
                            <ul>
                                <li><Link>Hats</Link></li>
                                <li><Link>Watches</Link></li>
                                <li><Link>Jewelry</Link></li>
                                <li><Link>Wigs</Link></li>
                                <li><Link>Handbags</Link></li>
                                <li><Link>Belts</Link></li>
                                <li><Link>Wallets</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>BEAUTY</h5>
                            <ul>
                                <li><Link>Hair</Link></li>
                                <li><Link>Mackup</Link></li>
                                <li><Link>Perfume</Link></li>
                                <li><Link>Coats & Jackets</Link></li>
                                <li><Link>Underwear</Link></li>
                                <li><Link>Hoodies & Sweatshirts</Link></li>
                                <li><Link>Suits</Link></li>
                                <li><Link>Sweaters</Link></li>
                                <li><Link>Socks</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="copyright mt-3 pb-3 pt-3 d-flex">
                        <p className="mb-0">© Copyright 2024. All rights reserved</p>
                        <ul className="list list-inline ml-auto mb-0">
                            <li className="list-inline-item d-flex">
                                <Link to='#'><FaFacebookF /></Link>
                                <Link to='#'><AiFillInstagram /></Link>
                                <Link to='#'><FaTwitter /></Link>
                                <Link to='#'><FaLinkedinIn /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
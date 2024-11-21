import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import axios from "axios";

const Navigation = () => {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false);

    // try

    const [category, setCategory] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('http://localhost:8080/api/category');
            const jsonResult = await result.json();

            setCategory(jsonResult);
        }

        fetchData();
    }, [])

    //  

    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1">
                            <div className="catWrapper">
                                <Button className="allCatTab align-items-center d-flex gap-2"
                                    onClick={() => setIsOpenSidebar(!isOpenSidebar)}>
                                    <span className="icon1 mr-2"><AiOutlineMenu /></span>
                                    <span className="text">ALL CATEGORIES</span>
                                    <span className="icon2 ml-2">{isOpenSidebar === true ? <FaAngleDown /> : <FaAngleRight />}</span>
                                </Button>
                                <div className={`sidebarNav ${isOpenSidebar === true ? 'open' : ''}`}>

                                    {
                                        category.map(data => <ul>
                                            <li key={data._id} className="d-flex align-items-center">
                                                <img src={data.images} className="catIconImg" />
                                                <Link><Button>{data.name} </Button></Link>
                                                <FaAngleRight className="ml-auto" />
                                                <div className="submenu">
                                                    <Link><Button>Shirt</Button></Link>
                                                    <Link><Button>T-Shirt</Button></Link>
                                                    <Link><Button>Pant</Button></Link>
                                                </div>
                                            </li>
                                        </ul>)
                                    }

                                    {/* <ul>
                                        <li>
                                            <Link><Button>Men <FaAngleRight className="ml-auto" /></Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link><Button>Women <FaAngleRight className="ml-auto" /></Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link><Button>Kids</Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link><Button>Gadgets</Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link><Button>Footwear</Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link><Button>Accessories</Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                        <li><Link><Button>Beauty</Button></Link>
                                            <div className="submenu">
                                                <Link><Button>Shirt</Button></Link>
                                                <Link><Button>T-Shirt</Button></Link>
                                                <Link><Button>Pant</Button></Link>
                                            </div>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center">
                            <ul className="list list-inline ml-auto">
                                <li className='list-inline-items'><Link to={'/'}>Home</Link></li>
                                <li className='list-inline-items'><Link to={'/'}>Men
                                    <div className="submenu">
                                        <Link><Button>Shirt</Button></Link>
                                        <Link><Button>T-Shirt</Button></Link>
                                        <Link><Button>Pant</Button></Link>
                                    </div>
                                </Link>
                                </li>
                                <li className='list-inline-items'><Link to={'/'}>Women
                                    <div className="submenu">
                                        <Link><Button>Shirt</Button></Link>
                                        <Link><Button>T-Shirt</Button></Link>
                                        <Link><Button>Pant</Button></Link>
                                    </div>
                                </Link>
                                </li>
                                <li className='list-inline-items'><Link to={'/'}>Kids
                                    <div className="submenu">
                                        <Link><Button>Shirt</Button></Link>
                                        <Link><Button>T-Shirt</Button></Link>
                                        <Link><Button>Pant</Button></Link>
                                    </div>
                                </Link>
                                </li>
                                <li className='list-inline-items'><Link to={'/'}>Gadgets
                                    <div className="submenu">
                                        <Link><Button>Shirt</Button></Link>
                                        <Link><Button>T-Shirt</Button></Link>
                                        <Link><Button>Pant</Button></Link>
                                    </div>
                                </Link>
                                </li>
                                <li className='list-inline-items'><Link to={'/'}>Fashion
                                    <div className="submenu">
                                        <Link><Button>Shirt</Button></Link>
                                        <Link><Button>T-Shirt</Button></Link>
                                        <Link><Button>Pant</Button></Link>
                                    </div>
                                </Link></li>
                                <li className='list-inline-items'><Link to={'/'}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
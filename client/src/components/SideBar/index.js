import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import offBannerImg3 from '../../asserts/images/off_banner_img3.jpeg';

const SideBar = () => {

    const [value, setValue] = useState([100, 60000]);
    const [subValue, setSubValue] = useState(0);

    return (
        <>
            <div className="sidebar">
                <div className='sticky'>
                    <div className="filterBox">
                        <h6>PRODUCT CATEGORIES</h6>
                        <div className='scroll mt-4'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Gadgets" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Beaty" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Gadgets" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Beaty" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Men" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Women" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Kids" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Gadgets" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Beaty" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='filterBox'>
                        <h6>FLITER BY PRICE</h6>

                        <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />

                        <div className='d-flex pt-2 pb-2 priceRange'>
                            <span>From: <strong className='text-dark'>Rs: {value[0]}</strong></span>
                            <span className='ml-auto'>To: <strong className='text-dark'>Rs: {value[1]}</strong></span>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>PRODUCT STATUS</h6>
                        <div className='scroll mt-4'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="In stock" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="On sale" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="filterBox">
                        <h6>BRANDS</h6>
                        <div className='scroll mt-4'>
                            <ul>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Live" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Otto" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Jack" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Frito Lay" />
                                </li>
                                <li>
                                    <FormControlLabel className='w-100' control={<Checkbox />} label="Nespresso" />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <Link to={'#'}>
                        <img className='w-100' src={offBannerImg3} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideBar;
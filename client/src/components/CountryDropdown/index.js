import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import { Dialog } from '@mui/material';
import { IoSearchOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry = (index,country) => {
        setSelectedTab(index);
        setIsOpenModal(false);
        context.setSelectedCountry(country)
    }

    useEffect(() => {
        setCountryList(context.countryList);
    }, []);

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword !== '') {
            const list = countryList.filter((item) => {
                return item.country.toLowerCase().includes(keyword);
            })

            setCountryList(list);

        } else {
            setCountryList(context.countryList);
        }

    }

    return (
        <>
            <Button className="countryDrop" onClick={() => setIsOpenModal(true)}>
                <div className="info d-flex flex-column">
                    <span className='label'>Select Your</span>
                    <span className='name'>{context.selectedCountry !== '' ? context.
                          selectedCountry.length > 10 ? context.selectedCountry?.substr(0,10) + '...' : context.
                          selectedCountry : 'Location'}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModal' open={isOpenModal} onClose={() => setIsOpenModal(false)} TransitionComponent={Transition}>
                <h5 className='mb-0'>Choose Your Delivery Location</h5>
                <p>Enter your address and we will specify the offer for your area.</p>
                <Button className='close' onClick={() => setIsOpenModal(false)}><IoCloseSharp /></Button>

                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area . . ." onChange={filterList} />
                    <Button><IoSearchOutline /></Button>
                </div>

                <ul className='countryList mt-3'>

                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index,item.country)}
                                    className={`${selectedTab === index ? 'active' : ''}`}
                                >{item.country}</Button></li>
                            )
                        })
                    }

                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;
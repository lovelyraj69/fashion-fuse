import ProductImage1 from '../../asserts/images/products_img_1.jpeg';
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa6";
import { Button } from '@mui/material';
import { MyContext } from '../../App';
import { useContext } from 'react';

const ProductItem = ({itemView}) => {

    const context = useContext(MyContext);

    const viewProduct = () => {
        context.setOpenProduct(true);
    }

    return (
        <>
            <div className={`productItem ${itemView}`}>
                <div className="imgWrapper">
                    <img src={ProductImage1} alt="img" className="w-100" />
                    <sapn className='badge'>20%</sapn>
                    <div className="actions">
                        <Button  onClick={viewProduct}><SlSizeFullscreen /></Button>
                        <Button><FaRegHeart style={{fontSize:'19px'}} /></Button>
                    </div>
                </div>
                <div className="info">
                    <h6>100% cotton, available in various colors.</h6>
                    <span className="text-success d-block">In Stock</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small"
                        precision={0.5} />
                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger">$15.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem;
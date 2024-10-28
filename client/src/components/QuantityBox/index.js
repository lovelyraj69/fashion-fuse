import { Button } from "@mui/material";
import { useState } from "react";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";

const QuantityBox = () => {

    const [inputVal, setInputVal] = useState(1);

    const handleMinus = () => {
        if (inputVal <= 1) {
            setInputVal(1);
        } else {
            setInputVal(inputVal - 1);
        }
    }

    const handlePlus = () => {
        if (inputVal === 10) {
            setInputVal(10);
            alert('You can only order miaximum 10 items');
        } else {
            setInputVal(inputVal + 1);
        }
    }

    return (
        <>
            <div className="d-flex align-items-center justify-content-center quantityDrop">
                <Button onClick={handleMinus}><TiMinus /></Button>
                <input type="text" value={inputVal} />
                <Button onClick={handlePlus}><TiPlus /></Button>
            </div>
        </>
    )
}

export default QuantityBox;
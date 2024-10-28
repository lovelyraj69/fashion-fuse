import { Button, Dialog } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";

const SignUp = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPaassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsConfirmPassword] = useState(false);

    const [formfields, setFormfields] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        isAdmin: true
    });

    const history = useNavigate();

    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
        window.scrollTo(0, 0);
    },[]);

    const focusInput = (index) => {
        setInputIndex(index);
    }

    const onchangeInput = (e) => {
        setFormfields(() => ({
            ...formfields,
            [e.target.name]:e.target.value
        }))
    }

    const signUp = (e) => {
        e.preventDefault();

        if (formfields.name === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'name can not be blank!'
            })
            return false;
        }

        if (formfields.email === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'email can not be blank!'
            })
            return false;
        }   

        if (formfields.phone === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'phone can not be blank!'
            })
            return false;
        }

        if (formfields.password === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'password can not be blank!'
            })
            return false;
        }

        if (formfields.confirmPassword === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'confirm password can not be blank!'
            })
            return false;
        }

        if (formfields.confirmPassword !== formfields.password) {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'password not match!'
            })
            return false;
        }

        postData('/api/users/signup',formfields)
        .then((res) => {
            context.setAlertBox({
                open: true,
                error: false,
                msg: 'Register Successfully!'
            });

            setTimeout(() => {
                history('/login');
            },2000);
        })
    }

    return (
        <>
            <div className="col-md-4 pr-0">
                <div>
                    <div className="wrapper mt-3 card border">
                        <form onSubmit={signUp}>
                            <div className={`form-grop position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className="icon"></span>
                                <input type="text" className="form-control" placeholder="Enter your name . . ."
                                    onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus
                                    name="name" onChange={onchangeInput}
                                />
                            </div>

                            <div className={`form-grop position-relative ${inputIndex === 2 && 'focus'}`}>
                                <span className="icon"></span>
                                <input type="text" className="form-control" placeholder="Enter your email . . ."
                                    onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} autoFocus
                                    name="email" onChange={onchangeInput}
                                />
                            </div>

                            <div className={`form-grop position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className="icon"></span>
                                <input type="text" className="form-control" placeholder="Enter your phone . . ."
                                    onFocus={() => focusInput(2)} onBlur={() => setInputIndex(null)} autoFocus
                                    name="phone" onChange={onchangeInput}
                                />
                            </div>

                            <div className={`form-grop position-relative ${inputIndex === 3 && 'focus'}`}>
                                <span className="icon"></span>
                                <input type="text" className="form-control" placeholder="Enter your password . . ."
                                    onFocus={() => focusInput(3)} onBlur={() => setInputIndex(null)} autoFocus
                                    name="password" onChange={onchangeInput}
                                />
                                <span className="toggleShowPassword" onClick={() => setIsShowPassword(!isShowPaassword)}>
                                    {
                                        isShowPaassword === true ? <IoEyeOff /> : <IoEye />
                                    }
                                </span>
                            </div>

                            <div className={`form-grop position-relative ${inputIndex === 4 && 'focus'}`}>
                                <span className="icon"></span>
                                <input type={`${isShowConfirmPassword === true ? 'text' : 'password'}`} className="form-control" 
                                    placeholder="Confirm your password . . ."
                                    onFocus={() => focusInput(4)} onBlur={() => setInputIndex(null)}
                                    name="confirmPassword" onChange={onchangeInput}
                                />
                                <span className="toggleShowPassword" onClick={() => setIsShowPassword(!isShowPaassword)}>
                                    {
                                        isShowConfirmPassword === true ? <IoEyeOff /> : <IoEye />
                                    }
                                </span>
                            </div>
                            <div className="form-group">
                                <Button>Sign Up</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp;
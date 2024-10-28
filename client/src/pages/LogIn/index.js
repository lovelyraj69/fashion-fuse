import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { Button } from "@mui/material";
import { postData } from "../../utils/api";


const LogIn = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);

    const history = useNavigate();
    const context = useContext(MyContext);

    const [formfields, setFormfields] = useState({
        email: "",
        password: "",
        isAdmin: true
    });

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index);
    }

    const onchangeInput = (e) => {
        setFormfields(() => ({
            ...formfields,
            [e.target.name]: e.target.value
        }))
    }

    const signIn = (e) => {
        e.preventDefault();

        if (formfields.email === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'email can not be blank!'
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

        postData('/api/users/signin', formfields)
            .then((res) => {
                try {

                    console.log(res);

                    localStorage.setItem('token',res.token);

                    const user = {
                        name: res.user?.name,
                        name: res.user?.email,
                        userId: res.user?.id
                    }

                    localStorage.setItem('user',JSON.stringify(user));

                    context.setAlertBox({
                        open: true,
                        error: false,
                        msg: 'User Login Successfully!'
                    });
    
                    setTimeout(() => {
                        // history('/login');
                        window.location.href = '/login';
                    }, 2000);
                } catch (error) {
                    console.log(error);
                }
            })
    }

    return (
        <>
            <div className="weapper mt-3 card border">
                <form onSubmit={signIn}>
                    <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                        <span className="icon"></span>
                        <input type="text" className="form-control" placeholder="Enter your email"
                            onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus
                            name="name" onChange={onchangeInput} />
                    </div>
                    <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                        <span className="icon"></span>
                        <input type={`${isShowPassword === true ? 'text' : 'password'}`} className="form-control" placeholder="Enter your password"
                            onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} autoFocus
                            name="password" onChange={onchangeInput} />

                        <span className="toggleShowPassword" onClick={() => setIsShowPassword(!isShowPassword)}>
                            {
                                isShowPassword === true ? <IoEyeOff /> : <IoEye />
                            }
                        </span>
                    </div>
                    <div className="form-group">
                        <Button>Sign In</Button>
                    </div>
                    <div className="form-group text-center mb-0">
                        <Link to={'/forgot-password'} className="link">FORGOT PASSWORD</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LogIn;
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Logo from '../../asserts/images/bacola-logo.png';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { postData } from "../../utils/api";


const SignIn = () => {

    const context = useContext(MyContext);
    const history = useNavigate();

    const [inputIndex, setInputIndex] = useState(null);
    const [formFields, setFormFields] = useState({
        email: '',
        password: ''
    })

    const focusInput = (index) => {
        setInputIndex(index);
    }

    const onChangeInput = (e) => {
        setFormFields(() => ({
            ...formFields,
            [e.target.name]: e.target.value
        }))
    }

    const signInForm = (e) => {
        e.preventDefault();

        if (formFields.email === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'email can not be blank!'
            })
        }
        if (formFields.password === '') {
            context.setAlertBox({
                open: true,
                error: true,
                msg: 'password can not be blank!'
            })
        }

        postData('/api/users/signin', formFields)
            .then((res) => {

                try {
                    console.log(res);

                    localStorage.setItem('token', res.token);

                    const user = {
                        name: res.user?.name,
                        email: res.user?.email,
                        userId: res.user?.id
                    }

                    localStorage.setItem('user',JSON.stringify(user));

                    context.setAlertBox({
                        open: true,
                        error: false,
                        msg: 'User Login Successfully!'
                    });

                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                } catch (error) {
                    console.log(error);
                }
            })

    }

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
    }, []);

    return (
        <>
            <section className="section signInPage">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="box card p-3 mt-4 shadow border-0">
                        <div className="text-center">
                            {/* <img src={Logo} /> */}
                        </div>
                        <Button className="closeBtn" onClick={() => context.setIsHeaderFooterShow(true)}>
                            <Link to={'/'}><IoClose /></Link>
                        </Button>
                        <form className="mt-3" onSubmit={signInForm}>
                            <h2>SignIn</h2>
                            <div className="form-group mt-3 mb-3">
                                <TextField id="outlined-basic"
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    type="email"
                                    className="inputField w-100"
                                    color="dark"
                                    required
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                    name="email"
                                    onChange={onChangeInput}
                                />
                            </div>
                            <div className="form-group mb-3">
                                <TextField id="outlined-basic"
                                    label="Password"
                                    placeholder="Enter your password"
                                    variant="outlined"
                                    type="password"
                                    className="inputField w-100"
                                    color="dark"
                                    required
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}
                                    name="password"
                                    onChange={onChangeInput}
                                />
                            </div>
                            <a className="borderEffect cursor">Forget password..?</a>
                            <Button className="btn btn-dark btn-lg mt-3 w-100" type="submit">Sign In</Button>
                            <p className="mt-3">Not Registered? <Link to={'/signUp'} className="borderEffect">SignUp</Link></p>
                            <h3 className="mt-4 text-center fs-6 fw-bold">Or continue with social account</h3>
                            <ul className="list list-inline mt-3 mb-3 socials w-100 center">
                                <li className="list-inline-item d-flex">
                                    <Link to='#'><FaGoogle /></Link>
                                    <Link to='#'><FaTwitter /></Link>
                                    <Link to='#'><FaFacebookF /></Link>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignIn;
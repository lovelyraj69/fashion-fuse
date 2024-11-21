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


const SignUp = () => {

    const context = useContext(MyContext);
    const history = useNavigate();

    const [inputIndex, setInputIndex] = useState(null);

    const [formFields, setFormFields] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    })

    useEffect(() => {
        context.setIsHeaderFooterShow(false);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index);
    }

    const signUpForm = (e) => {
        e.preventDefault();

        try {
            if (formFields.name === '') {
                context.setAlertBox({
                    open: true,
                    error: true,
                    msg: 'name can not be blank!'
                })
            }
            if (formFields.email === '') {
                context.setAlertBox({
                    open: true,
                    error: true,
                    msg: 'email can not be blank!'
                })
            }
            if (formFields.phone === '') {
                context.setAlertBox({
                    open: true,
                    error: true,
                    msg: 'phone can not be blank!'
                })
            }
            if (formFields.password === '') {
                context.setAlertBox({
                    open: true,
                    error: true,
                    msg: 'password can not be blank!'
                })
            }

            postData('/api/users/signup', formFields)
                .then((res) => {

                    if (res.status !== false) {
                        
                        context.setAlertBox({
                            open: true,
                            error: false,
                            msg: 'Register Successfully!'
                        });
    
                        setTimeout(() => {
                            history('/signin');
                        }, 2000);
                    } else {
                        context.setAlertBox({
                            open: true,
                            error: true,
                            msg: res.msg
                        });
                    }

                })
        } catch (error) {
            console.log(error);
        }
    }

    const onChangeInput = (e) => {
        setFormFields(() => ({
            ...formFields,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <>
            <section className="section signInPage">
                <div className="container d-flex align-items-center justify-content-center">
                    <div className="box card p-3 shadow border-0 signUpBox">
                        <div className="text-center">
                            {/* <img src={Logo} /> */}
                        </div>
                        <Button className="closeUpBtn" onClick={() => context.setIsHeaderFooterShow(true)}>
                            <Link to={'/'}><IoClose /></Link>
                        </Button>
                        <form className="mt-3" onSubmit={signUpForm}>
                            <h2>SignUp</h2>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group mt-3 mb-3">
                                        <TextField id="outlined-basic"
                                            label="Name"
                                            placeholder="Enter your name"
                                            variant="outlined"
                                            type="text"
                                            className="inputField w-100"
                                            color="dark"
                                            required
                                            onFocus={() => focusInput(0)}
                                            onBlur={() => setInputIndex(null)}
                                            name="name"
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group mt-3 mb-3">
                                        <TextField id="outlined-basic"
                                            label="Phone No."
                                            placeholder="Enter your number"
                                            variant="outlined"
                                            type="text"
                                            className="inputField w-100"
                                            color="dark"
                                            required
                                            onFocus={() => focusInput(1)}
                                            onBlur={() => setInputIndex(null)}
                                            name="phone"
                                            onChange={onChangeInput}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group mt-3 mb-3">
                                <TextField id="outlined-basic"
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="outlined"
                                    type="email"
                                    className="inputField w-100"
                                    color="dark"
                                    required
                                    onFocus={() => focusInput(2)}
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
                                    onFocus={() => focusInput(3)}
                                    onBlur={() => setInputIndex(null)}
                                    name="password"
                                    onChange={onChangeInput}
                                />
                            </div>
                            <Button className="btn btn-dark btn-lg mt-3 w-100" type="submit">Sign Up</Button>
                            <p className="mt-3">Already you have a account? <Link to={'/signIn'} className="borderEffect">SignIn</Link></p>
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

export default SignUp;
import React, { useState } from 'react';
import { Link,useHistory,useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';
const SignUp = () => {
    const history = useHistory();
    const [data,setData] = useState({
        name:'',
        email:'',
        password:'',
        confirm_password:''
    });
    const{setIsLoading,manualSignUp,updateUserProfile,googleSignInLogin} = useAuth();
    //useLocation
    const location = useLocation();
    //condition 
    const location_uri = location.state?.from || '/';
    ////handleGoogle Login
    const handlegoogleSign = () => {
        googleSignInLogin()
        .then((result)=>{
            history.push(location_uri);
        }).catch(err=>{
            console.log(err);
        }).finally(()=>{
            setIsLoading(false);
        })
    }
    //handle input
    const InputEvent = (event) => {
        const{name,value} = event.target;
        setData((prev)=>{
            return {
                ...prev,
                [name] : value,
            }
        });
    }
    //handleManualSignUp
    const handleManualSignUp = (e) => {
        e.preventDefault();
        if(data.password.length > 6){
            toast.error("Password Min Length Is Six");
            return;
        }
        if(data.password !== data.confirm_password){
            toast.error("Password And Confirm Password Are Not Match");
            return;
        }
        manualSignUp(data.email,data.password)
        .then((result)=>{
            //update user
            updateUserProfile(data.name);
            setData({
                name:'',
                email:'',
                password:'',
                confirm_password:''
            });
            // setUser(result.user);
            // console.log(result.user);
            toast.success("Sign Up Success! Please Login.");
            window.location.href = "/home";
        }).catch(err => {
            toast.error(err.message);
        }).finally(()=>{
            setIsLoading(false);
        });
    } 
    return (
        <>
            <div className='login-banner'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card m-auto my-5" style={{maxWidth: '25rem'}}>
                                <div className="card-body">
                                <span style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none',fontWeight:'700'}}>Create An Account</span>
                                    <form onSubmit={handleManualSignUp}>
                                        <input type="text" name="name" value={data.name} onChange={InputEvent} className='form-control my-3' placeholder="Enter Name" required/>

                                        <input type="email" name="email" value={data.email} onChange={InputEvent} className='form-control my-3' placeholder="Enter Email" required />

                                        <input name="password" value={data.password} onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Password" />

                                        <input name="confirm_password" value={data.confirm_password} onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Confirm Password" />

                                        <input type="submit" value="submit" className="submit-btn my-4" />
                                    </form>
                                    <Link to='/login' style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none'}}>Already Have An Account?</Link>
                                    <hr />
                                    <h5 className="text-center my-3">OR</h5>
                                    <button onClick={handlegoogleSign} className="google-btn"><i className="fab fa-google text-primary"></i> Sign In With Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SignUp;
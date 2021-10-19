import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import './Login.css';
const Login = () => {
    const[signloading,setSignloding] = useState(false);
    const [data,setData] = useState({
        email:'',
        password:''
    });
    
    const history = useHistory();
    const {googleSignInLogin,emailPasswordSignIn,setIsLoading} = useAuth();
    //useLocation
    const location = useLocation();
    //condition 
    const location_uri = location.state?.from || '/';
    //handleGoogle Login
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
    //emailPasswordSignIn
    const handleEmailPasswordSignIn = (e) => {
        setSignloding(true);
        e.preventDefault();
        emailPasswordSignIn(data.email,data.password)
        .then((result)=>{
            history.push(location_uri);
        }).catch(err=>{
            console.log(err);
            toast.error(err.message);
        }).finally(()=>{
            setSignloding(false);
            setIsLoading(false);
        })
    }
    return (
        <>
            <div className='login-banner'>
                <div className='container '>
                    <div className="row ">
                        <div className="col-md-12">
                            <div className="card m-auto my-5" style={{maxWidth: '25rem'}}>
                                <div className="card-body">
                                <span style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none',fontWeight:'700'}}>Log In Here</span>
                                    <form onSubmit={handleEmailPasswordSignIn}>
                                        <input name="email" value={data.email} onChange={InputEvent} className='form-control my-3' placeholder="Enter Email" required />

                                        <input name="password" value={data.password} onChange={InputEvent} className='form-control my-3' type="password" placeholder="Enter Password" required />

                                        <input type="submit" value={signloading?'Loging..':'submit'} className="submit-btn my-4" />
                                    </form>
                                    <Link to="/signup" style={{display:'block',textAlign:'center',margin: '15px 0',color:'red',fontSize:'20px',textDecoration:'none'}}>Need A Account?</Link>
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

export default Login;
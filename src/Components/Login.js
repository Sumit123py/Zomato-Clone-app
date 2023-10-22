import React, {useContext, useState} from 'react'
import { ProductContext } from './ProductContext';

const Login = () => {
    // Accessing ShowLogin and setShowLogin functions from ProductContext
    const {ShowLogin, setShowLogin}= useContext(ProductContext)
    const {setShowSignUp}= useContext(ProductContext)

    // State to hold password and username
    const [checkPassword, setCheckPassword] = useState(null)
    const [UserName, setUserName] = useState(null)
    
    // Accessing setAuthenticated function from ProductContext
    const {setAuthenticated} = useContext(ProductContext)

    // Accessing SignUpData from ProductContext
    const {SignUpData} = useContext(ProductContext)

    // Function to compare user details during login
    const CompareDetails = () => {

        const name = SignUpData.map((curelem) => curelem.name)
        const password = SignUpData.map((curelem) => curelem.password)

        if(name.includes(UserName) === true && password.includes(checkPassword) === true ){
            
            setShowLogin(false)
            setAuthenticated(true)
            alert('Login Successful')
        }
        else{
            alert('Wrong Username or Password')
        }

    }

    return(
        <>
        
        <div style={{transform: `scale(${ShowLogin ? '1.2' : '0'})`, transition: 'all 0.5s ease'}} className="login_container">
            <form  className="container">
                <div className="title">
                    <p>Log in</p>
                    <p onClick={() => setShowLogin(false)}><i class="fa-solid fa-xmark"></i></p>
                </div>
                <input onInput={(e) => setUserName(e.target.value)} type="Username" placeholder='Username' required />
                <input onInput={(e) => setCheckPassword(e.target.value)} type="text" placeholder='Password' required />

                <p onClick={CompareDetails} className="continue">Log in</p>

                <p className='or'>or</p>
                
                <p className="login">
                    New to Zomato? <span onClick={() =>{ setShowSignUp(true)
                    setShowLogin(false)
                    
                    }} style={{color: 'red', }} className='login_hover'>Create account</span>
                </p>
            </form>
        </div>
        
        </>
    )
}

export default Login;

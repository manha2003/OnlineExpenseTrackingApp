import React , {useState} from 'react'
import './LoginSignup.css'
import axios from 'axios';
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

const [action , setAction] = useState("Login");
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");

    const handleSubmit = async () => {
        if (action === "Sign Up") {
            const userDto = { username, password, email};

            try {
                const response = await axios.post('http://https://localhost:7142/api/Users/Register', userDto, {
                    headers: {
                        'Content-Type': 'application/json'
                    }});

                setMessage('Registration successful:', response.data);
            } catch (error) {
                if (error.response) {
                    setMessage(error.response.data.message);
                } 
                
                else {
                    setMessage('An unexpected error occurred.');
                }
            }
        }
    };

  return (
        <div className='container'>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <img src={user_icon} alt="" />
                        <input 
                            type="text" 
                            placeholder="UserName" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                )}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>

                {action === "Sign Up" ? null : (
                    <div className="forgot-password">
                        Lost Password? <span>Click Here</span>
                    </div>
                )}
            </div>

            <div className="submit-container">
                <div 
                    className={action === "Login" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Sign Up")}
                >
                    Sign Up
                </div>
                <div 
                    className={action === "Sign Up" ? "submit gray" : "submit"} 
                    onClick={() => setAction("Login")}
                >
                    Login
                </div>
                <div 
                    className="submit" 
                    onClick={handleSubmit}
                >
                    {action} 
                </div>
            </div>

            {message && <div className="message">{message}</div>}
        </div>
    );
};

//     <div className = 'container'> 
//         <div className="header">
//             <div className="text">{action}</div>
//             <div className="underline"></div>
//         </div>

//         <div className="inputs">
//             {action==="Login"? <div></div>: <div className="input">
//             <img src={user_icon} alt="" />
//             <input type="text" placeholder = "UserName"/>
//             </div>}
            
           
//             <div className="input">
//             <img src={email_icon} alt="" />
//             <input type="email" placeholder="Email" />
//             </div>

//             <div className="input">
//             <img src= {password_icon} alt="" />
//             <input type="password" placeholder="Password"/>
            
//             </div>
//             {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
            
           
//         </div>
//         <div className="submit-container">
//         <div className={action === "Login" ? "submit gray" : "submit "} onClick = {() => {setAction("Sign Up")}}>Sign Up</div>
//         <div className={action === "Sign Up" ? "submit gray" : "submit"}  onClick = {() => {setAction("Login")}}>Login</div>
//         </div>

     
//     </div>
//   );
// };

export default LoginSignup

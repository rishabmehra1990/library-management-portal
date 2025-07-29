import './login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import handleSubmit from "../util/handleSubmit"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <form className="login-form" onSubmit={(e) => handleSubmit(e, email, password, navigate)}>
                    <input
                        type="email"
                        placeholder="Email"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;

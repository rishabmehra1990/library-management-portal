import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { postData } from '../util/api';
import './login.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await postData("auth/login", { email, password });
            navigate('/dashboard');
        } catch {
            alert('Login failed');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Admin Login</h2>
                <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
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

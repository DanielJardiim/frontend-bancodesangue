import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './styles.css';

const LoginPage = () => {    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        navigate('/home');
    };

    const handleRegistrar = e => {
        e.preventDefault();
        navigate('/cadastro');
    };

    return (
        <div className="login">
            <div className="login_container">
                <div className="gmcImg_login">                    
                </div>
                <h1 className="h1_login">Login</h1>
                <form className="form_login">
                    <div className="field_login">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your e-mail"
                            autoComplete="off"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <span id="auth"></span>
                    </div>
                    <div className="field_login">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="actions_login">
                        <button
                            className="btn_login"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Login
                        </button>
                    </div>
                    <div className="actions_login">
                        <button
                            className="btn_login"
                            type="submit"
                            onClick={handleRegistrar}
                        >
                            Registrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

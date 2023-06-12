import React, { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import './styles.css';
import imgGMC from '../../img/GMC.png';

const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        if (email && password) {
            login(email, password);
            return;
        }

        document.getElementById(
            'auth'
        ).innerHTML = `Entre com o email e a senha!`;
        setTimeout(function () {
            document.getElementById('auth').innerHTML = '';
        }, 2000);
    };

    return (
        <div className="login">
            <div className="login_container">
                <div className="gmcImg_login">
                    <img src={imgGMC} alt="gmc" />
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
                </form>
            </div>
        </div>
    );
};

export default LoginPage;

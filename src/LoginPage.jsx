import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginpageimage from './assets/LoginPageImage.png';
import styles from './loginstyles.module.css';

export default function LoginPage() {
    const navigation = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login attempt with:', email, password);
        if (email === 'cyber' && password === '123') {
            window.alert('Login Success');
            navigation('/HomePage');
        } else {
            window.alert('User Not Found');
        }
    };

    return (
        <div className={styles.login_container}>
            {/* Left side - Image */}
            <div className={styles.login_image_section}>
            <img 
                src={loginpageimage} 
                alt="Circuit board" 
                className={styles.login_image}
            />
            </div>

            {/* Right side - Login Form */}
            <div className={styles.login_form_section}>
                <div className={styles.login_form_container}>
                    <div className={styles.login_header}>
                    <h1 className={styles.login_title}>Login</h1>
                    <div className={styles.login_underline}></div>
                    </div>

                    <form className={styles.login_form}>
                    <div className={styles.form_group}>
                        <input
                            type="text"
                            placeholder="Email or Username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.login_input}
                        />
                    </div>

                    <div className={styles.form_group}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.login_input}
                            style={{ marginBottom: '1rem' }}
                        />
                    </div>

                    <div className={styles.form_group}>
                        <button 
                            type="button" 
                            onClick={() => handleLogin()}
                            className={styles.login_button}
                        >
                        LOGIN
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
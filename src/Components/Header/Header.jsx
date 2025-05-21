import { useState } from "react";
import headerStyles from './headerstyles.module.css';
import logo from '../../assets/logo.png';
import { LogoutButton } from "./logout";
import { toast } from "react-toastify";

export default function Header({ navigation }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleLogout = () => {
        toast((props) => (
            <LogoutButton {...props} navigation={navigation} />
        ));
    };

    return (
        <header>
            <div className={`${headerStyles.menu_container} ${isSidebarOpen ? headerStyles.menu_open : headerStyles.menu_close}`}>
                <h2 className={isSidebarOpen ? headerStyles.menu_close : ''} onClick={() => {setIsSidebarOpen(!isSidebarOpen)}}>X</h2>
                <ul>
                    <li onClick={() => {navigation('/HomePage')}}>Home</li>
                    <li onClick={() => {navigation('/AboutPage')}}>About</li>
                    <li onClick={() => {navigation('/TipsPage')}}>Tips</li>
                    <li onClick={handleLogout}>Logout</li>
                </ul>
                <div className={headerStyles.bottom}>
                    All Rights Reserved 2025.
                </div>
            </div>
            
            <div className={headerStyles.left_side}>
                <h2 style={{ cursor: 'pointer' }} onClick={() => {setIsSidebarOpen(!isSidebarOpen)}}>☰</h2>
                <img className={headerStyles.logo} src={logo} alt='CyberSafe Academy Logo' />
                <h3>E-Learning Website for CyberSecurity</h3>
            </div>
        </header>
    );
}

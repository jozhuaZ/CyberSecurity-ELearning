import { toast } from "react-toastify";

export const LogoutButton = ({ closeToast, navigation }) => {
    const handleConfirm = () => {
        closeToast();
        navigation('/LoginPage'); 
        toast.success('Successfully logged out!');
    };

    const handleCancel = () => {
        closeToast();
        toast.info('Logout cancelled.');
    };

    return (
        <div
            style={{
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'Poppins, Segoe UI, sans-serif',
            }}
        >
            <p style={{ margin: 0, fontSize: '1rem', color:'black' }}>
                Are you sure you want to logout?
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={handleConfirm}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#d9534f',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'background-color 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#c9302c'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#d9534f'}
                >
                    Confirm
                </button>
                <button
                    onClick={handleCancel}
                    style={{
                        padding: '6px 12px',
                        backgroundColor: '#5bc0de',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        transition: 'background-color 0.2s ease-in-out',
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#31b0d5'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#5bc0de'}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
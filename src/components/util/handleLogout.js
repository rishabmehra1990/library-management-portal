const handleLogout = async (navigate) => {
    try {
        const response = await fetch('http://localhost:4000/auth/logout', {
            method: 'POST',
            credentials: 'include',
        });

        if (!response.ok) {
            throw new Error('Logout failed');
        }
        navigate('/');
    } catch (err) {
        console.error('Logout failed', err);
    }
};

export default handleLogout

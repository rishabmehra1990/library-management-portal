const handleSubmit = async (e, email, password, navigate) => {
    e.preventDefault();
    try {
        const res = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include',
        });
        if (!res.ok) throw new Error();
        navigate('/dashboard');
    } catch {
        alert('Login failed');
    }
};

export default handleSubmit

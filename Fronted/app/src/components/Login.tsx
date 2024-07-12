export function Login() {
    const handleGoogleLogin = () => {
        window.open('http://localhost:3000/auth/google', '_self');
    };

    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div>
    );
};


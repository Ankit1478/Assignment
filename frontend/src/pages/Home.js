import React from 'react';

export function Home() {
 
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


export default Home;

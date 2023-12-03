import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="login">
                <h3>Login</h3>

                <label>Email:</label>
                <input 
                    type="email" 
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}   
                />
                   <label>Passsword:</label>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    value={password}   
                />

                <button disabled={isLoading}>Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </div>
    )
}

export default Login
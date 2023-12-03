import { useState } from "react"
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {

    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext();

    const signup = async (email, password) => {

        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password})
        })
        const json = await response.json();

        if(!response.ok) {
            setError(json.error);
            setIsLoading(false);
        } else {
            setError(null);
            setIsLoading(false);

            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update auth context
            dispatch({type: 'LOGIN', payload: json})
        }
    }

    return { signup, isLoading, error }
}
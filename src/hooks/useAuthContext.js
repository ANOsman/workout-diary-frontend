import { AuthContext } from '../context/authContextContext';
import { useContext } from 'react';

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('useAuthContex must be used inside WorkoutsContext');
    }

    return context;
}
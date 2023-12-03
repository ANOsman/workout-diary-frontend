import { WorkoutsContext } from '../context/WorkoutsContext';
import { useContext } from 'react';

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if(!context) {
        throw Error('useWorkoutsContex must be used inside WorkoutsContext');
    }

    return context;
}
import { setLoading } from '../store/slices/spinner.slice';
import { useDispatch } from 'react-redux';

const useSpinner = () => {

    const dispatch = useDispatch()

    const toggle = (status) => { 
        dispatch(setLoading(status)) 
    }

    return {
        toggle,
    }
}

export default useSpinner
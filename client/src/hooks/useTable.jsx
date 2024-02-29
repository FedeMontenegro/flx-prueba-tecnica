import { useDispatch } from 'react-redux';
import { setUsers } from '../store/slices/user.slice';

const useTable = () => {

    const dispatch = useDispatch()

    const handleEditClick = (record, form) => {
        dispatch(setUsers( { selectedUser : record }))
        form?.setFieldsValue(record);
    };

    const handleDeleteClick = (record, form) => {
        dispatch(setUsers( { selectedUser : record }))
        form?.setFieldsValue(record);
    }

    return {
        handleEditClick,
        handleDeleteClick,
    }
}

export default useTable
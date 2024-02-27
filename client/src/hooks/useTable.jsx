import { useDispatch } from 'react-redux';
import { setUsers } from '../store/slices/user.slice';

const useTable = () => {

    const dispatch = useDispatch()

    const handleEditClick = (record, form, showModal, users) => {
        dispatch(setUsers({ ...users, selectedUser: record }))
        form?.setFieldsValue(record);
        showModal()
    };

    const handleDeleteClick = (record, form, showModal, users) => {
        dispatch(setUsers({ ...users, selectedUser: record }))
        form?.setFieldsValue(record);
        showModal()
    }

    return {
        handleEditClick,
        handleDeleteClick,
    }
}

export default useTable
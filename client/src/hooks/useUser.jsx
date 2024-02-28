import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { destroy, get, patch } from '../services/api.services';
import { setUsers } from '../store/slices/user.slice';
import { post } from "../services/api.services";
import { v4 as uuidv4 } from 'uuid';
import useSpinner from "./useSpinner"

const useUser = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const { toggle } = useSpinner()
    const [success, setSuccess] = useState(false)

    const fetchUsers = async () => {

        toggle(true)
        
        try {
            const response = await get("/users")

            if(response.ok) {
                setTimeout(() => {
                    toggle(false)
                    dispatch(setUsers({ 
                        ...users,
                        all: response.data,
                    }))
                }, 1000)
            }

            return
        } catch (error) {
            console.log("Error de solicitud (getUsers): ", error);
            return
        }
    }

    const getUsersByStatus = async (status) => {
        
        toggle(true)

        try {
            const response = await get("/users?status=" + status)

            if(response.ok) {
                setTimeout(() => {
                    toggle(false)
                    dispatch(setUsers({ 
                        ...users,
                        all: response.data
                    }))
                }, 1000)
            }

            return
        } catch (error) {
            throw new Error("Error de solicitud (getUsersByStatus): ", error);    
        }
    }

    const searchUsers = async (searchTerm) => {
                
        toggle(true)

        try {
            const response = await get(`/users?q=${searchTerm}`)

            if(response.ok) {
                setTimeout(() => {
                    toggle(false)
                    dispatch(setUsers({ 
                        ...users,
                        all: response.data
                    }))
                }, 1000)
            }

            return
        } catch (error) {
            throw new Error("Error de solicitud (searchUsers): ", error);    
            
        }
    }

    const getUsersPagination = async (current, size) => {

        toggle(true)

        try {
            const response = await get(`/users?_start=${(current - 1) * size}&_limit=${size}`)
            const totalCount = await response.headers.get('X-Total-Count')

            if(response.ok) {
                setTimeout(() => {
                    toggle(false)
                    dispatch(setUsers({ 
                        ...users,
                        all: response.data,
                        pagination: { 
                            ...users.pagination, 
                            current: current, 
                            pageSize: size 
                        },
                        total: parseInt(totalCount, 10)
                    }))
                }, 1000)
            }

            return
        } catch (error) {
            console.log("Error de solicitud (getUsersPagination): ", error)
            throw new Error("Error de solicitud (getUsersPagination): ", error);    
            
        }
    }

    const createUser = async (values) => {
        values = {
            ...values,
            id: uuidv4()
        }

        toggle(true)

        try {
            const response = await post("/users", values)

            if (response.ok) {
                setTimeout(() => {
                    setSuccess(true)
                    toggle(false)
                }, 2000);

                fetchUsers()
            }

            setTimeout(() => {
                setSuccess(false)
            }, 6000);

            return

        } catch (error) {
            throw new Error("Error de solicitud (createUser): ", error)
        }
    }

    const updateUser = async (values) => {

        toggle(true)

        try {
            const response = await patch("/users/" + users.selectedUser.id, values)

            if (response.ok) {
                setTimeout(() => {
                    setSuccess(true)
                    toggle(false)
                }, 2000);

                fetchUsers()
            }

            setTimeout(() => {
                setSuccess(false)
            }, 6000);

            return

        } catch (error) {
            throw new Error("Error de solicitud (updateUser): ", error)
        }
    }

    const deleteUser = async (handleDangerCancel) => {

        toggle(true)

        try {
            const response = await destroy("/users/" + users.selectedUser.id)

            if (response.ok) {
                setTimeout(() => {
                    toggle(false)
                    setSuccess(true)
                }, 2000);

                fetchUsers()
            }
            
            setTimeout(() => {
                setSuccess(false)
                handleDangerCancel()
            }, 6000);

            return

        } catch (error) {
            throw new Error("Error de solicitud (updateUser): ", error)
        }
    }

    useEffect(() => {
        getUsersPagination(users.pagination.current, users.pagination.size)
    }, [])

    return {
        fetchUsers,
        users,
        success,
        createUser,
        updateUser,
        deleteUser,
        getUsersByStatus,
        searchUsers,
        getUsersPagination,
    }
}

export default useUser
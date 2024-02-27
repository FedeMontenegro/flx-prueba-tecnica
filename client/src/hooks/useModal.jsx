import { useState } from "react"
import useUser from "./useUser"

const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { deleteUser } = useUser()

    const showModal = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    
    const handleDeleteModal = async () => {
        try {
            await deleteUser(handleCancel)
        } catch (error) {
            throw new Error("Error al eliminar el usuario: ", error)
        }
    }
 
    return {
        isModalOpen,
        showModal,
        handleCancel,
        handleDeleteModal,
    }
}

export default useModal
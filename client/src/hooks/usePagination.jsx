import useUser from "./useUser";

const usePagination = () => {

    const { getUsersPagination } = useUser()

    const handlePageChange = (current, size) => {
        getUsersPagination(current, size)
    }

    return {
        handlePageChange,
    }
}

export default usePagination
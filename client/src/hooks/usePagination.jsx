import useUser from "./useUser";

const usePagination = () => {

    const { getUsersPagination } = useUser()

    const handlePageChange = (current, pageSize) => {
        getUsersPagination(current, pageSize)
    }

    return {
        handlePageChange,
    }
}

export default usePagination
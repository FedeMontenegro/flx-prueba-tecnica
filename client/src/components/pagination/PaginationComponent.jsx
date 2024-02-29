import { Pagination } from "antd"
import usePagination from "../../hooks/usePagination"

const PaginationComponent = ({ pagination, total }) => {

    const { handlePageChange } = usePagination()

    return (
        <>
            <Pagination
                current={pagination?.current}
                pageSize={pagination?.pageSize}
                total={total}
                onChange={handlePageChange}
                style={{
                    color: "white",
                    textAlign: "end",
                    marginTop: 15,
                    paddingBottom: 50
                }}
            />
        </>
    )
}

export default PaginationComponent
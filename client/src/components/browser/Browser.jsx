import { useState } from "react"
import Styles from "./browser.module.css"
import { SearchOutlined } from "@ant-design/icons"
import useUser from "../../hooks/useUser"

const iconStyle = {
    color: "gray",
    cursor: "pointer",
    height: "14px",
    padding: "9px",
    width: "14px",
}

const Browser = () => {

    let [ term, setTerm ] = useState("")
    const { searchUsers } = useUser()

    return (
        <div className={Styles.container}>
            <input 
                className={Styles.browser} 
                type="search" 
                name="browser" 
                id=""
                placeholder="Buscar usuarios"
                onChange={(e) => setTerm(e.target.value)}
            />
            <SearchOutlined style={iconStyle} onClick={() => searchUsers(term)}/>
        </div>
    )
}

export default Browser
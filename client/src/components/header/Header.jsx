import Styles from "./header.module.css"
import FlexxusLogo from "../../assets/Flexxus-Logo.svg"

const Header = () => {
    return (
        <div className={Styles.container}>
            <img src={FlexxusLogo} alt="flexxus-logo" className={Styles.logo} />
        </div>
    )
}

export default Header
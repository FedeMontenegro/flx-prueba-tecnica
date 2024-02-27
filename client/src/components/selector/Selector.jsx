import Styles from "./selector.module.css"
import useUser from "../../hooks/useUser"

const Selector = () => {

    const { getUsersByStatus } = useUser()

    return (
        <select 
            className={Styles.container} 
            name="" 
            id="" 
            onChange={(e) => getUsersByStatus(e.target.value) }
        >
            <option className={Styles.option} value="">Filtrar por estado</option>
            <option className={Styles.option} value="active">Activo</option>
            <option className={Styles.option} value="inactive">Inactivo</option>
        </select>
    )
}

export default Selector
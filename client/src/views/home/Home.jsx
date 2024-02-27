import Styles from "./home.module.css"
import {
    Header,
    BreadcrumbComponent,
    Browser,
    Selector,
    TableComponent,
    ModalComponent,
    FormComponent,
} from "../../components"
import { Button, Spin, Alert } from 'antd';
import useModal from "../../hooks/useModal"
import useForm from "../../hooks/useForm"
import useUser from "../../hooks/useUser";
import { useSelector } from "react-redux";

const btnStyles = {
    height: "40px",
    margin: 0,
    width: "138px",
}

const Home = () => {

    const {
        showModal,
        isModalOpen,
        handleCancel
    } = useModal()

    const { createUser, success } = useUser()
    const { onFinishFailed } = useForm()
    const loading = useSelector(state => state.spinnerSlice)

    return (
        <div className={Styles.container}>
            <Header />
            <div className={Styles.body}>
                <BreadcrumbComponent />
                <section className={Styles.filtersBtnContainer}>
                    <div className={Styles.filters}>
                        <Browser />
                        <Selector />
                    </div>
                    <Button type="primary" style={btnStyles} onClick={showModal}>
                        Agregar Usuario
                    </Button>
                </section>

                <Spin
                    size="large"
                    spinning={loading}
                >
                    <TableComponent />
                </Spin>
            </div>

            <ModalComponent
                isModalOpen={isModalOpen}
                handleOk={handleCancel}
                handleCancel={handleCancel}
                footer={null}
                title="Agregar usuario"
            >
                <Spin
                    size="large"
                    spinning={loading}
                >
                    <FormComponent
                        onFinish={createUser}
                        onFinishFailed={onFinishFailed}
                        btnText="Agregar Usuario"
                        name="createUser"
                    />
                </Spin>
                {success
                    &&
                    (<Alert
                        message="¡Éxito!"
                        description="Registro exitoso"
                        type="success"
                    />)
                }
            </ModalComponent>
        </div>
    )
}

export default Home
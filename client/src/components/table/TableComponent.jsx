import { useState } from 'react';
import { Space, Table, Tag, Spin, Form, Alert, Divider } from 'antd';
import Styles from "./tableComponent.module.css"
import useUser from '../../hooks/useUser';
import useModal from '../../hooks/useModal';
import useForm from '../../hooks/useForm';
import { useSelector } from 'react-redux';
import ModalComponent from '../modal/ModalComponent';
import FormComponent from '../form/FormComponent';
import useTable from '../../hooks/useTable';

const TableComponent = () => {

    const [ form ] = Form.useForm()

    const {
        showModal,
        isModalOpen,
        handleCancel,
        handleDeleteModal,
    } = useModal()

    const { onFinishFailed } = useForm()
    const loading = useSelector(state => state.spinnerSlice)
    const [typeForm, setTypeForm] = useState("")

    const { Column } = Table
    const { users, updateUser, success } = useUser()
    const { handleEditClick, handleDeleteClick } = useTable()

    return (
        <div className={Styles.container}>
            <Table
                dataSource={users.all}
                onRow={(record) => ({
                    onClick: () => {
                        handleEditClick(record)
                        handleDeleteClick(record)
                    }
                })}
            >
                <Column title="Usuario" dataIndex="username" key="username" />
                <Column title="Nombre" dataIndex="name" key="name" />
                <Column title="Apellido" dataIndex="lastname" key="lastname" />
                <Column
                    title="Estado"
                    dataIndex="status"
                    key="status"
                    render={(data) => (
                        <Tag color={data === "active" ? "green" : "red"}>
                            {data}
                        </Tag>
                    )}
                />
                <Column
                    title="Acciones"
                    dataIndex="actions"
                    key="actions"
                    render={(_, record) => (
                        <Space size="middle">
                            <a onClick={() => {
                                setTypeForm("update")
                                handleEditClick(record, form, showModal, users)
                            }}
                            >
                                Editar
                            </a>
                            <a onClick={() => {
                                setTypeForm("delete")
                                handleDeleteClick(record, form, showModal, users)
                            }}
                            >
                                Eliminar
                            </a>
                        </Space>
                    )}
                />
            </Table>

            {
                typeForm === "update"
                    ?
                    (<ModalComponent
                        isModalOpen={isModalOpen}
                        handleOk={handleEditClick}
                        handleCancel={handleCancel}
                        footer={null}
                        title="Editar usuario"
                    >
                        <Spin
                            size="large"
                            spinning={loading}
                        >
                            <FormComponent
                                onFinish={updateUser}
                                onFinishFailed={onFinishFailed}
                                btnText="Editar Usuario"
                                form={form}
                                name="updateUser"
                            />
                        </Spin>
                        {success
                            &&
                            (<Alert
                                message="¡Éxito!"
                                description="Registro actualizado exitosamente"
                                type="success"
                            />)
                        }
                    </ModalComponent>)
                    :
                    (<ModalComponent
                        isModalOpen={isModalOpen}
                        handleOk={handleDeleteModal}
                        handleCancel={handleCancel}
                        title="Eliminar usuario"
                        okText="Eliminar"
                        cancelText="Cancelar"
                        color="#E23336"
                    >
                        <Spin
                            size="large"
                            spinning={loading}
                        >
                            <Divider />
                            <p>
                                ¿Está seguro que quiere eliminar al usuario <span className={Styles.userToDelete}>@{users.selectedUser.username}</span>?
                            </p>
                            <Divider />
                        </Spin>
                            {success
                                &&
                                (<Alert
                                    message="¡Éxito!"
                                    description="Registro eliminado exitosamente"
                                    type="success"
                                />)
                            }
                    </ModalComponent>)

            }

        </div>
    )
}

export default TableComponent
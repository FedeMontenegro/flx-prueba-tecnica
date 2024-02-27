import { Modal } from 'antd';
import useModal from 'antd/es/modal/useModal';

const ModalComponent = ({ 
    isModalOpen, 
    handleOk, 
    handleCancel, 
    children, 
    footer, 
    title,
    okText,
    cancelText,
    color,
}) => {
    
    return (
        <Modal
            title={title}
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={footer}
            width="572px"
            okButtonProps={{
                style: { backgroundColor: color || "default" }
            }}
            okText={okText}
            cancelText={cancelText}
        >
            { children }
        </Modal>
    )
}

export default ModalComponent
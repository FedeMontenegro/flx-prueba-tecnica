import { Breadcrumb } from 'antd';

const BreadcrumbComponent = () => {
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <a href="">Usuarios</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <a href="">Listado de usuarios</a>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default BreadcrumbComponent
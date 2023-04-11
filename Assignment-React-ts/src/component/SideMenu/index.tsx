import { LineChartOutlined, IdcardOutlined, AppstoreOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons"
import { Menu } from "antd"
import { useNavigate } from "react-router-dom"

function SideMenu() {
    const navigate = useNavigate()
    return <div className='SideMenu'>
        <Menu
            onClick={(items) => {
                navigate(items.key)
            }}
            items={[

                {
                    label: 'Product',
                    key: '/admin/products',
                    icon: <AppstoreOutlined />
                },
                {
                    label: 'User',
                    key: '/admin/user',
                    icon: <UserOutlined />
                },
                {
                    label: 'Category',
                    key: '/admin/category',
                    icon: <IdcardOutlined />
                },
                {
                    label: 'Logout',
                    key: '/logout',
                    icon: <LogoutOutlined />
                }
            ]}
        ></Menu>
    </div>
}

export default SideMenu
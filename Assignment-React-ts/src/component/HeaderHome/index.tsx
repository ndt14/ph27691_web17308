import { HomeFilled, UserOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import Typography from "antd/es/typography/Typography";
import { useNavigate, Link } from "react-router-dom";

function HeaderHome() {
    const navigate = useNavigate()
    const onMenuClick = (item) => {
        navigate(`/${item.key}`)
    }

    return (
        <div className="HeaderHome">
            <Menu
                onClick={onMenuClick}
                mode="horizontal"
                items={[
                    {
                        label: <HomeFilled />,
                        key: "",
                    },
                    {
                        label: "About",
                        key: "about",
                    },
                    {
                        label: "Page",
                        key: "page",
                        children: [
                            {
                                label: "Page Products",
                                key: "page-products",
                            },
                            {
                                label: "Page Products",
                                key: "page-user",
                            },
                            {
                                label: "Page Products",
                                key: "page-category",
                            },
                        ]
                    },

                    {
                        label: "Contact",
                        key: "contact",
                    },
                ]}
            />
            <Typography.Title>Home</Typography.Title>
            <div>
                <Button><Link to={"/signup"}>Đăng kí</Link></Button>
                <Button><Link to={"/signin"}>Đăng nhập</Link></Button>
            </div>
        </div>
    )
}

export default HeaderHome
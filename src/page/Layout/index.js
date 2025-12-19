import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            一级路由layout
            <Link to="/board">面板</Link>
            <br />
            <Link to="/about">关于</Link>
            <Outlet />
        </div>
    );
};

export default Layout;
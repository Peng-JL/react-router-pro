/*
  声明式导航
      是指通过在模版中通过 `<Link/>` 组件描述出要跳转到哪里去，比如后台管理系统的左侧菜单通常使用这种方式进行
    代码示例：
      <Link to="/article">文章</Link>
    语法说明：
      通过给组件的to属性指定要跳转到路由path，组件会被渲染为浏览器支持的a链接，如果需要传参直接通过字符串拼接的方式拼接参数即可
*/
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1>我是Login</h1>
      <Link to="/article">跳转到article</Link>
    </div>
  );
};
export default Login;
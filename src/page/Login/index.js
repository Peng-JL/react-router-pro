/*
  声明式导航
      是指通过在模版中通过 `<Link/>` 组件描述出要跳转到哪里去，比如后台管理系统的左侧菜单通常使用这种方式进行
    代码示例：
      <Link to="/article">文章</Link>
    语法说明：
      通过给组件的to属性指定要跳转到路由path，组件会被渲染为浏览器支持的a链接，如果需要传参直接通过字符串拼接的方式拼接参数即可
*/
/*
  searchParams传参
  传递时
    import { useNavigate } from "react-router-dom";
    const Login = () => {
    const navigate = useNavigate();
    return (
      <div>
        <button onClick={() => navigate("/article?id=888&name=jack")}>跳转到article</button>
      </div>
    );
    };
    export default Login;
  -------------------------------------------
  获取时
    import { useSearchParams } from "react-router-dom";
      const Article = () => {
      const [params] = useSearchParams();
      const id = params.get("id");
      const name = params.get("name");
      return (
        <div>
          <h1>我是Article:{id}-{name}</h1>
        </div>
      );
    };
    export default Article;
  ------------------------------------------------------------------------------------
  
  params传参
  传递时
    import { useNavigate } from "react-router-dom";
    const Login = () => {
      const navigate = useNavigate();
      return (
        <div>
          <h1>我是Login</h1>
          <button onClick={() => navigate("/article/888/jack")}>params传参跳转到article</button>
        </div>
      );
    };
    export default Login;
  -------------------------------------------
  修改路由
    const router = createBrowserRouter([
      {
          path: "/login",
          element: <Login />,
      },
      {
          // path: "/article",
          path: "/article/:id/:name",
          element: <Article />,
      },
    ]);
  -------------------------------------------
  获取时
    import { useNavigate, useParams } from "react-router-dom";
    const Article = () => {
      const {id} = useParams();
      const {name} = useParams();
      const navigate = useNavigate();
      return (
        <div>
          <h1>我是Article:{id}-{name}</h1>
        </div>
      );
    };
    export default Article;
*/
import { Link,useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>我是Login</h1>
      <Link to="/article">跳转到article</Link>
      {/* <button onClick={() => navigate("/article?id=888&name=jack")}>searchParams传参跳转到article</button> */}
      <button onClick={() => navigate("/article/999/jack")}>params传参跳转到article</button>
    </div>
  );
};
export default Login;
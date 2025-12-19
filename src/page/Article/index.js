/*
  编程式导航
      是指通过 `useNavigate` 钩子得到导航方法，然后通过调用方法以命令式的形式进行路由跳转，比如想在登录请求完毕之后跳转就可以选择这种方式，更加灵活
    代码示例：
      import { useNavigate } from "react-router-dom"
      const Login = () => {
        const navigate = useNavigate()
        return (
          <div>
            我是登录页
            <button onClick={() => navigate('/article')}>跳转至文章</button>
          </div>
        )
      }
    语法说明：
      通过调用navigate方法传入地址path实现跳转
*/
import { useNavigate,useSearchParams,useParams } from "react-router-dom";
const Article = () => {
  const {id} = useParams();
  const {name} = useParams();
  // const [params] = useSearchParams();
  // const id = params.get("id");
  // const name = params.get("name");
  const navigate = useNavigate();
  return (
    <div>
      <h1>我是Article:{id}-{name}</h1>
      <button onClick={() => navigate('/login')}>跳转到login</button>
    </div>
  );
};
export default Article;
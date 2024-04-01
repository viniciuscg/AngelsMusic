import { Button, Input, theme } from "antd"
import { AdmLoginContainer } from "./style"
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAdminContext } from "../../context/adminContext";
import { useNavigate } from "react-router-dom";

const { useToken } = theme;

function AdmLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [adminLoginReq, setAdminLoginReq] = useState(false)
  const { token } = useToken();
  const { login } = useAdminContext()
  const navigate = useNavigate()
  
  
  const admLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setAdminLoginReq(true)
      await login({email, password})
      setAdminLoginReq(false)
      navigate('/admin/home')
    } catch (error: any) {
      setAdminLoginReq(false)
      console.log(error);
    }
  }
  
  return (
    <AdmLoginContainer style={{ background: token.colorBgBase }}>
      <form onSubmit={ admLogin } className="content" >
        <h1>ADM</h1>
          <Input 
            onChange={e => setEmail(e.target.value)} 
            size="large" prefix={<MailOutlined/>}  
            placeholder="Email"
          />
          <Input.Password
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
            onChange={e => setPassword(e.target.value)} 
            size="large" 
            prefix={<LockOutlined/>} 
            placeholder="password"
          />
          <Button loading={adminLoginReq} htmlType="submit">Login</Button> 
      </form>
    </AdmLoginContainer>
  )
}

export default AdmLogin

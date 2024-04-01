import { Button, Input } from "antd"
import { SignUpContainer } from "./style"
import { EyeInvisibleOutlined, EyeTwoTone, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/userContext";

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [userReq, setUserReq] = useState(false)
  const { login, create } = useUserContext()
  const navigate = useNavigate()

  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setUserReq(true)
      login({email, password})
      setUserReq(false)
      navigate('/')
    } catch (error: any) {
      setUserReq(false)
      console.log(error);
    }
  }

  const userCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setUserReq(true)
      create({email, password, fullName})
      setUserReq(false)
      navigate('/')
    } catch (error: any) {
      setUserReq(false)
      console.log(error);
    }
  }

  return (
    <SignUpContainer>
      <div>
        <form onSubmit={ userLogin } className="content" >
          <h1>Login</h1>
            <Input 
              size="large" 
              prefix={<MailOutlined/>} 
              placeholder="Email"
            />
            <Input.Password
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
              size="large" 
              prefix={<LockOutlined/>} 
              placeholder="password"
            />
            <Button loading={userReq} htmlType="submit">Login</Button> 
        </form>
      </div>

      <hr
        style={{
          color: "black",
          height: 500
        }}
      />

      <div>
        <form onSubmit={ userCreate } className="content" >
          <h1>Register</h1>
            <Input 
              size="large" 
              prefix={<MailOutlined/>} 
              placeholder="Full name"
              onChange={e => setFullName(e.target.value)} 
            />
            <Input 
              size="large" 
              prefix={<MailOutlined/>} 
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <Input.Password
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
              size="large" 
              prefix={<LockOutlined/>} 
              placeholder="password"
              onChange={e => setPassword(e.target.value)} 
            />
            <Input.Password
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
              size="large" 
              prefix={<LockOutlined/>} 
              placeholder="confirm password"
            />
            <Button loading={userReq} htmlType="submit">Register</Button> 
        </form>
      </div>
    </SignUpContainer>
  )
}

export default SignUp

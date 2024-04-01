import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import { HeaderContainer } from "./style"
import { useState } from "react"
import { Input } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { useCategoryContext } from "../../context/categoryContext"

function Header() {
  const [showSearchInput, setShowSearchInput] = useState(true)
  const [userLogged, setUserLogged] = useState(false)
  const { categories } = useCategoryContext()
  const navigate = useNavigate()

  return (
    <HeaderContainer  >
      <div className="top">
        <div>
          {showSearchInput ?
            <SearchOutlined onClick={() => setShowSearchInput(false)} className="icon" />    
            :
            <div style={{display: "flex", gap: '10px'}}>
              <SearchOutlined onClick={() => setShowSearchInput(true)} className="icon" />    
              <Input placeholder="Basic usage" />  
            </div>
          }
        </div>
        <div style={{display: 'flex', gap: '30px'}}>
          {userLogged ? 
            <>
              <UserOutlined className="icon"/>
              <HeartOutlined className="icon"/>
              <ShoppingCartOutlined className="icon"/>
            </>
            :
            <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link>
          }

        </div>
      </div>
      
      <h1> Angels Music </h1>
      <div className="bottom">
        {categories.map(category => (
          <span key={category.id}>{category.name}</span>
        ))}
      </div>
    </HeaderContainer>
  )
}

export default Header

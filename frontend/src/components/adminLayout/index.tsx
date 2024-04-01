import {
  HomeOutlined,
  MoneyCollectOutlined,
  ProductOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
  
const { Content, Footer, Sider } = Layout;
  
const items = [
  { key: 'home', label: 'Home', icon: <HomeOutlined/> },
  { key: 'product', label: 'Product', icon: <ProductOutlined /> },
  { key: 'category', label: 'Category', icon: <UnorderedListOutlined /> },
  { key: 'sub-category', label: 'Sub Category', icon: <UnorderedListOutlined /> },
  { key: 'sell',  label: 'Sell', icon: <MoneyCollectOutlined /> },
  { key: 'user', label: 'User', icon: <UserOutlined /> },
]

interface IProps {
  children: ReactNode
}


function AdminLayout({ children }: IProps) {

  const navigate = useNavigate()

  const handleMenuClick = (key: string) => {
    navigate('/admin/' + key)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible >
        <div className="demo-logo-vertical" />
        <Menu 
          defaultSelectedKeys={['1']} 
          mode="inline" items={items}
          onClick={({ key }) => handleMenuClick(key) } 
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '0 16px', paddingTop: '10px' }}>
          {children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
  
  export default AdminLayout
  
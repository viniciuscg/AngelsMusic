import Catalog from './pages/catalog'
import Detail from './pages/detail'
import Home from './pages/home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from './pages/login';
import { ConfigProvider } from 'antd';
import { theme } from './utils/theme';
import { CategoryProvider } from './context/categoryContext';
import AdmLogin from './pages/admLogin';
import PrivateRoute from './components/privateRoute';
import { AdminProvider } from './context/adminContext';
import { UserProvider } from './context/userContext';
import ProductAdmin from './pages/admin/productAdmin';
import CategoryAdmin from './pages/admin/categoryAdmin';
import HomeAdmin from './pages/admin/homeAdmin';
import SellAdmin from './pages/admin/sellAdmin';
import UserAdmin from './pages/admin/userAdmin';
import { ProductProvider } from './context/productContext';
import { SubCategoryProvider } from './context/subCategoryContext';
import SubCategoryAdmin from './pages/admin/subCategoryAdmin';
import { SellProvider } from './context/sellContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
  {
    path: "/catalog",
    element: <Catalog/>,
  },
  {
    path: "/admin",
    element: <AdmLogin/>,
  },
  {
    path: "/admin/home",
    element: <PrivateRoute Component={<HomeAdmin/>} />,
  },
  {
    path: "/admin/product",
    element: <PrivateRoute Component={<ProductAdmin/>}/>,
  },
  {
    path: "/admin/category",
    element: <PrivateRoute Component={<CategoryAdmin/>}/>,
  },
  {
    path: "/admin/sub-category",
    element: <PrivateRoute Component={<SubCategoryAdmin/>}/>,
  },
  {
    path: "/admin/sell",
    element: <PrivateRoute Component={<SellAdmin/>}/>,
  },
  {
    path: "/admin/user",
    element: <PrivateRoute Component={<UserAdmin/>}/>,
  },
]);

function App() {

  return (
    <ConfigProvider
      theme={theme}
    >
      <ProductProvider>
        <CategoryProvider>
          <SubCategoryProvider>
            <AdminProvider>
              <SellProvider>
                <UserProvider>
                  <RouterProvider router={router} />
                </UserProvider>
              </SellProvider>
            </AdminProvider>
          </SubCategoryProvider>
        </CategoryProvider>
      </ProductProvider>
    </ConfigProvider>
  )
}

export default App

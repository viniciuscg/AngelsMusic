import Header from "../../components/header"
import { CatalogContainer } from "./style";
import { Pagination, theme } from 'antd';
import ItemCard from "../../components/itemCard";
import SortBy from "../../components/sortby";

const { useToken } = theme;

function Catalog() {
  const { token } = useToken();

  return (
    <CatalogContainer style={{ background: token.colorBgBase }}>
      <Header/>
      <div className="utils"><SortBy/></div>
      <div className="card"><ItemCard/></div>
      <div className="pagination"><Pagination defaultCurrent={1} total={50} /></div>
    </CatalogContainer>
  )
}

export default Catalog

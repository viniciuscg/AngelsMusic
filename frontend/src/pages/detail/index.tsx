import { Button, Image, theme } from "antd";
import Header from "../../components/header"
import { DetailContainer } from "./style";
import { HeartOutlined } from "@ant-design/icons";
import ItemCard from "../../components/itemCard";

const { useToken } = theme;

function Detail() {
  const { token } = useToken();
  
  return (
    <DetailContainer style={{ background: token.colorBgBase }}>
      <Header/>
      <Image
        width={200}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div>
        <div>
          <h1>Product</h1>
          <h3>color: color</h3>
          <h1>Price</h1>
          <h3>Price</h3>
        </div>
        <Button>Add to bag</Button>
        <Button><HeartOutlined /> Add to Favorites</Button>
      </div>
      <ItemCard/>
    </DetailContainer>
  )
}

export default Detail

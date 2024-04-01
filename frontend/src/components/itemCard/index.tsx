import { Card } from 'antd';

const { Meta } = Card;

function ItemCard() {

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      bordered={false}
    >
     <Meta title="Guitar Blablabla" description="R$ 2.000,00" />
    </Card>
  )
}

export default ItemCard

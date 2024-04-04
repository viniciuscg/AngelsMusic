import { Card } from "antd";

interface IProps {
  totalOder: number
}


function CardsHomeCotent({ totalOrder }: any) {

  return (
    <Card>
      {totalOrder}
    </Card>
  )
}

export default CardsHomeCotent
  
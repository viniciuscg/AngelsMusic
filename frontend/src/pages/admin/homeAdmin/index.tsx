import moment from 'moment';
import AdminLayout from '../../../components/adminLayout';
import { Input } from 'antd';
import CardsHomeCotent from './cardsHomeCotent';
import { useSellContext } from '../../../context/sellContext';

function HomeAdmin() {
  const { totalOrder } = useSellContext()


  return (
    <AdminLayout>
      <h2>{moment(Date()).format("MMM Do YY")}</h2>
      <Input placeholder="Search" />
      <CardsHomeCotent key={totalOrder}/>
    </AdminLayout>
  )
}

export default HomeAdmin

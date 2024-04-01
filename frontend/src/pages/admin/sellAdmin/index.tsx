import { Space, Table, Tag } from 'antd';
import { IProduct } from '../../../services/product/productType';
import AdminLayout from '../../../components/adminLayout';

const { Column } = Table;

const data: IProduct[] = [
];

function SellAdmin() {

  return (
    <AdminLayout>
      <Table dataSource={data}>
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />
        <Column
          title="Tags"
          dataIndex="tags"
          key="tags"
          render={(tags: string[]) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(_: any, record: IProduct) => (
            <Space size="middle">
              <a>Invite {record.model}</a>
              <a>Delete</a>
            </Space>
          )}
        />
      </Table>
    </AdminLayout>
  )
}

export default SellAdmin

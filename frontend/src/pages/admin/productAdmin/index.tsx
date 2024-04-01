import AdminLayout from '../../../components/adminLayout';
import { Button, Image, Space, Switch, Table, Typography } from 'antd';
import type { TableColumnsType } from 'antd';
import ModalComponent from '../../../components/modal';
import { useProductContext } from '../../../context/productContext';
import { useState } from 'react';
import ProductForm from '../../../components/forms/productForm';

interface IDataType {
  id: number
  model: string
  quantity: number
  description: string 
  img: string 
  price: number
  active: boolean
}

function ProductAdmin() {
  const [visible, setVisible] = useState(false);
  const { products, setIsModalOpen, isModalOpen } = useProductContext()

  const createCategory = () => {
    setIsModalOpen(true)
  };

  const updateCategory = (id: number) => {
    setIsModalOpen(true)
  };

  const deleteButton = (id: number) => {

  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableColumnsType<IDataType> = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id
    },
    {
      key: 'model',
      title: 'model',
      dataIndex: 'model',
    },
    {
      key: 'quantity',
      title: 'quantity',
      dataIndex: 'quantity',
      sorter: (a, b) => a.id - b.id
    },
    {
      key: 'description',
      title: 'description',
      dataIndex: 'description',
    },
    {
      key: 'img',
      title: 'img',
      dataIndex: 'img',
      render: (_: any, product: IDataType) => (
        <Space>
          <Typography.Link onClick={() => setVisible(true)}>Image</Typography.Link>
          <Image
            width={200}
            style={{ display: 'none' }}
            src={product.img}
            preview={{
              visible,
              src: product.img,
              onVisibleChange: (value) => {
                setVisible(value);
              },
            }}
          />
        </Space>
      ),
    },
    {
      key: 'price',
      title: 'price',
      dataIndex: 'price',
      sorter: (a, b) => a.id - b.id
    },
    {
      key: 'active',
      title: 'active',
      dataIndex: 'active',
      render: (_: any, product: IDataType) => (
        <Switch />
      )
    },
    {
      title: 'Action',
      render: (_: any, category: IDataType) => (
        <Space>
          <Typography.Link onClick={() => updateCategory(category.id)}>Edit</Typography.Link>
          <Typography.Link onClick={() => deleteButton(category.id)}>Delete</Typography.Link>
        </Space>
      ),
    },
  ];
  
  return (
    <AdminLayout>
      <Button 
        type="primary" 
        style={{ marginBottom: 16 }}
        onClick={createCategory}
      >
        Add a Product
      </Button>
      <Table  columns={columns} dataSource={products}/>
      <ModalComponent isModalOpen={isModalOpen} onClose={handleCancel} >
        <ProductForm/>
      </ModalComponent>
    </AdminLayout>
  )
}

export default ProductAdmin

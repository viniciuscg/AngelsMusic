import AdminLayout from '../../../components/adminLayout';
import { Button, Image, Input, Popconfirm, Space, Switch, Table, Typography } from 'antd';
import type { TableColumnsType } from 'antd';
import ModalComponent from '../../../components/modal';
import { useProductContext } from '../../../context/productContext';
import { useState } from 'react';
import ProductForm from '../../../components/forms/productForm';
import { IProduct } from '../../../services/product/productType';

function ProductAdmin() {
  const [visible, setVisible] = useState(false)
  const [productId, setProductId] = useState<number>(0)
  const { products, setIsModalOpen, isModalOpen, deactivate } = useProductContext()

  const createCategory = () => {
    setIsModalOpen(true)
  };
  
  const deactivateProduct = (product: IProduct) => {
    deactivate(product.id)
    console.log(product.active);
  };

  const updateCategory = (id: number) => {
    setProductId(id)
    setIsModalOpen(true)
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableColumnsType<IProduct> = [
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
      render: (_: any, product: IProduct) => (
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
      render: (_: any, product: IProduct) => (
        <Popconfirm
          placement="bottom"
          title={"desactive"}
          description={"are you sure?"}
          okText="Yes"
          cancelText="No"
          onConfirm={() => deactivateProduct(product)}
        >
          <Switch value={product.active}/>
        </Popconfirm>
      )
    },
    {
      key: 'category.id',
      title: 'category',
      render: (_: any, product: IProduct) => (
        <Space>
          <span>{product.category.name}</span>
        </Space>
      ),
    },
    {
      key: 'sub_category.id',
      title: 'sub category',
      render: (_: any, product: IProduct) => (
        <Space>
          <span>{product.sub_category.description}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      render: (_: any, category: IProduct) => (
        <Space>
          <Typography.Link onClick={() => updateCategory(category.id)}>Edit</Typography.Link>
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
      <Input placeholder="Search product" />
      <Table  columns={columns} dataSource={products}/>
      <ModalComponent isModalOpen={isModalOpen} onClose={handleCancel} >
        <ProductForm id={productId}/>
      </ModalComponent>
    </AdminLayout>
  )
}

export default ProductAdmin
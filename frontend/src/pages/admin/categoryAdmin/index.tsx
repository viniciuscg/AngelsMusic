import { Button, Input, Space, Table, Typography } from 'antd';
import AdminLayout from '../../../components/adminLayout';
import { useCategoryContext } from '../../../context/categoryContext';
import type { TableColumnsType } from 'antd';
import { useState } from 'react';
import ModalComponent from '../../../components/modal';
import CategoryForm from '../../../components/forms/categoryForm';

interface IDataType {
  id: number
  name: string
}

function CategoryAdmin() {
  const [categoryId, setCategoryId] = useState<number>(0)
  const { categories, deleteCategory, setIsModalOpen, isModalOpen } = useCategoryContext()

  const createCategory = () => {
    setIsModalOpen(true);
  };

  const updateCategory = (id: number) => {
    setCategoryId(id)
    setIsModalOpen(true);
  };

  const deleteButton = (id: number) => {
    deleteCategory(id)
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
      key: 'name',
      title: 'name',
      dataIndex: 'name',
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
        Add a category
      </Button>
      <Input placeholder="Search category" />
      <Table  columns={columns} dataSource={categories}/>
      <ModalComponent isModalOpen={isModalOpen} onClose={handleCancel} >
        <CategoryForm id={categoryId} />
      </ModalComponent>
    </AdminLayout>
  )
}

export default CategoryAdmin

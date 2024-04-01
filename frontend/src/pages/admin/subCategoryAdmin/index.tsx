import { Button, Space, Table, Typography } from 'antd';
import AdminLayout from '../../../components/adminLayout';
import type { TableColumnsType } from 'antd';
import ModalComponent from '../../../components/modal';
import { useSubCategoryContext } from '../../../context/subCategoryContext';
import SubCategoryForm from '../../../components/forms/subCategoryForm';
import { useState } from 'react';
import { ISubCategory } from '../../../services/subCategory/subCategoryType';

interface IDataType {
  id: number
  description: string
  category: {
    id: number
    name: string
  }
}

function SubCategoryAdmin() {
  const [subCategoryId, setSubCategoryId] = useState<number>(0);
  const { setIsModalOpen, isModalOpen, subCategories, deleteSubCategory, getAll } = useSubCategoryContext()

  const createSubCategory = () => {
    setIsModalOpen(true);
  };

  const updateSubCategory = (id: number) => {
    setSubCategoryId(id)
  };

  const destroySubCategory = (id: number) => {
    deleteSubCategory(id)
    getAll()
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const columns: TableColumnsType<ISubCategory> = [
    {
      key: 'id',
      title: 'id',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id
    },
    {
      key: 'description',
      title: 'description',
      dataIndex: 'description',
    },
    {
      key: 'category.id',
      title: 'category',
      render: (_: any, subCategory: IDataType) => (
        <Space>
          <span>{subCategory.category.name}</span>
        </Space>
      ),
    },
    {
      title: 'Action',
      render: (_: any, subCategory: IDataType) => (
        <Space>
          <Typography.Link onClick={() => updateSubCategory(subCategory.id)}>Edit</Typography.Link>
          <Typography.Link onClick={() => destroySubCategory(subCategory.id)}>Delete</Typography.Link>
        </Space>
      ),
    },
  ];

  return (
    <AdminLayout>
      <Button 
        type="primary" 
        style={{ marginBottom: 16 }}
        onClick={createSubCategory}
      >
        Add a sub category
      </Button>
      <Table  columns={columns} dataSource={subCategories} />
      <ModalComponent isModalOpen={isModalOpen} onClose={handleCancel}>
        <SubCategoryForm id={subCategoryId} />
      </ModalComponent>
    </AdminLayout>
  )
}

export default SubCategoryAdmin

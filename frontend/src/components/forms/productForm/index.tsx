import { Button, Form, FormProps, Input, InputNumber, Select, Upload } from "antd"
import { useProductContext } from "../../../context/productContext";
import {  UploadOutlined } from '@ant-design/icons';
import { IProductCreate } from "../../../services/product/productType";
import { useState } from "react";
import { useCategoryContext } from "../../../context/categoryContext";
import { useSubCategoryContext } from "../../../context/subCategoryContext";

interface IProps {
  id: number
}

function ProductForm(props: IProps) {
  const [imageBase64, setImageBase64] = useState<string>("")
  const [isCategorySelected, setIsCategorySelected] = useState(false)
  const { create, update, setIsModalOpen } = useProductContext()
  const { getRelated, releatedSubCategories } = useSubCategoryContext()
  const { categories } = useCategoryContext()

  const beforeUpload = (file: any) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setImageBase64(reader.result);
      }
    };
    reader.readAsDataURL(file);

    return false;
  }

  const onFinish: FormProps<IProductCreate>["onFinish"] = async (values) => {
    if (!props.id) {
      await create({
        model: values.model, 
        quantity: values.quantity, 
        description: values.description,
        price: values.price, 
        img: imageBase64,
        categoryId: values.categoryId, 
        subCategoryId: values.subCategoryId 
      })
    }else {
      await update({
        id: props.id, 
        model: values.model, 
        quantity: values.quantity, 
        description: values.description,
        price: values.price, 
        img: imageBase64,
        categoryId: values.categoryId, 
        subCategoryId: values.subCategoryId 
      })
    }
    setIsModalOpen(false)
  }

  const onFinishFailed: FormProps<IProductCreate>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  const handleChange = async (id: number) => {
    await getRelated(id)
    setIsCategorySelected(!!id)
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<IProductCreate> label="model"name="model">
        <Input/>
      </Form.Item>
      <Form.Item<IProductCreate> label="quantity" name="quantity">
        <InputNumber/>
      </Form.Item>
      <Form.Item<IProductCreate> label="description" name="description" >
        <Input/>
      </Form.Item>
      <Form.Item<IProductCreate> label="price" name="price">
        <InputNumber/>
      </Form.Item>
      <Form.Item label="image">
        <Upload
          beforeUpload={beforeUpload}
          onRemove={() => setImageBase64("")}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item label="category" name="categoryId">
        <Select
          style={{ width: 120 }}
          onChange={(value) => handleChange(value)}
        >
          {categories.map(category => 
            <Select.Option value={category.id}>{category.name}</Select.Option>
          )}
        </Select>
      </Form.Item>
      <Form.Item name="subCategoryId" label="sub category">
        <Select
          style={{ width: 120 }}
          disabled={!isCategorySelected}
        >
          {releatedSubCategories.map((subCategory) => 
            <Select.Option value={subCategory.id}>{subCategory.description}</Select.Option>
          )}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default ProductForm


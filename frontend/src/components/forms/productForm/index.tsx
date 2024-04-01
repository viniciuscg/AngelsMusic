import { Button, Form, FormProps, Input, InputNumber, Select, Upload } from "antd"
import { useProductContext } from "../../../context/productContext";
import {  UploadOutlined } from '@ant-design/icons';
import { IProductCreate } from "../../../services/product/productType";
import { useState } from "react";
import { useCategoryContext } from "../../../context/categoryContext";
import { useSubCategoryContext } from "../../../context/subCategoryContext";

function ProductForm() {
  const [imageBase64, setImageBase64] = useState<string | undefined>()
  const [isCategorySelected, setIsCategorySelected] = useState(false)
  const { create } = useProductContext()
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

  const onFinish: FormProps<IProductCreate>["onFinish"] = (values) => {
   if (imageBase64) create({model: values.model, quantity: values.quantity, description: values.description,
     price: values.price, img: imageBase64, categoryId: values.categoryId, subCategoryId: values.subCategoryId })
  }

  const onFinishFailed: FormProps<IProductCreate>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  }

  const handleChange = (id: number) => {
    console.log(id);
    getRelated(id)
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
      <Form.Item label="image" name="image">
        <Upload
          beforeUpload={beforeUpload}
          onRemove={() => setImageBase64(undefined)}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item name="categoryId">
        <Select
          style={{ width: 120 }}
          onChange={(value) => handleChange(value)}
        >
          {categories.map(category => 
            <Select.Option value={category.id}>{category.name}</Select.Option>
          )}
        </Select>
      </Form.Item>
      <Form.Item name="subCategory" label="sub category">
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


import { Button, Form, FormProps, Input, Select } from "antd"
import { useSubCategoryContext } from "../../../context/subCategoryContext";
import { ICreateSubCategory } from "../../../services/subCategory/subCategoryType";
import { useCategoryContext } from "../../../context/categoryContext";
import { useEffect } from "react";

interface IProps {
  id: number
}

function SubCategoryForm(props: IProps) {
  const { create, setIsModalOpen, update, getAll } = useSubCategoryContext()
  const { categories } = useCategoryContext()
    
  const onFinish: FormProps<ICreateSubCategory>["onFinish"] = (values) => {
    if(!props.id){
      create({categoryId: values.categoryId, description: values.description})
    }else{
      update({id: props.id, description: values.description, categoryId: values.categoryId })
    }
    setIsModalOpen(false)
    getAll()
  };
    
  const onFinishFailed: FormProps<ICreateSubCategory>["onFinishFailed"] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<ICreateSubCategory>
        label="Description"
        name="description"
      >
        <Input/>
      </Form.Item>
      <Form.Item name="categoryId">
        <Select
          style={{ width: 120 }}
        >
          {categories.map((category) => 
            <Select.Option value={category.id}>{category.name}</Select.Option>
          )}
        </Select>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default SubCategoryForm

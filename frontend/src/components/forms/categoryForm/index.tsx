import { Button, Form, FormProps, Input } from "antd"
import { useCategoryContext } from "../../../context/categoryContext";
import { ICreateCategory } from "../../../services/category/categoryType";

interface IProps {
  id: number
}

function CategoryForm(props: IProps) {
  const { update, create, setIsModalOpen } = useCategoryContext()
    
  const onFinish: FormProps<ICreateCategory>["onFinish"] = async (values) => {
    if(!props.id){
      await create({category: values.category})
    }
    else{
      await update({id: props.id, name: values.category})
    }
    setIsModalOpen(false)
  };
    
  const onFinishFailed: FormProps<ICreateCategory>["onFinishFailed"] = (errorInfo) => {
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
      <Form.Item<ICreateCategory>
        label="Name"
        name="category"
      >
        <Input/>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default CategoryForm

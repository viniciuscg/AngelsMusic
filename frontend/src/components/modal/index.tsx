import { ReactNode, } from "react";
import { Modal as AntModal } from 'antd';

interface IProps {
  children: ReactNode
  onClose(): void 
  isModalOpen: boolean 
}

function Modal(props: IProps ) {

  return (
    <AntModal footer={null} open={props.isModalOpen} onCancel={props.onClose}>
      {props.children}
    </AntModal>
  )
}
  
  export default Modal
  
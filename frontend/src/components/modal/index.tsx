import { ReactNode, } from "react";
import { Modal as AntModal } from 'antd';
import { ModalCotent } from "./style";

interface IProps {
  children: ReactNode
  onClose(): void 
  isModalOpen: boolean 
}

function Modal(props: IProps ) {

  return (
    <AntModal 
      footer={null} 
      open={props.isModalOpen} 
      onCancel={props.onClose}
    >
      <ModalCotent>
        {props.children}
      </ModalCotent>
    </AntModal>
  )
}
  
  export default Modal
  
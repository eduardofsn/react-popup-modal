import React from "react"
import {Modal, ModalHeader, ModalContent, ModalFooter} from './core'

export interface DemoModalProps{
  onCancel: () => void;
  onSave: () => void;
}

export const DemoModal = ({onCancel, onSave}: DemoModalProps) => {
    return (
        <Modal onOutsideClick={onCancel}>
          <ModalHeader title="This a modal" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores ut aperiam repellendus nobis"/>
          <ModalContent>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores ut aperiam repellendus nobis, cumque iste? Et officia itaque nam qui quibusdam vel, ad rerum?</p>
          </ModalContent>
          <ModalFooter>
            <button type="button" className='outline' onClick={onCancel}>Cancel</button>
            <button type="button" onClick={onSave}>Ok</button>
          </ModalFooter>
        </Modal>
    )
}
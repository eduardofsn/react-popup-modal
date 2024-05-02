import React, {useState} from 'react';
import { Modal, ModalContent, ModalFooter, ModalHeader } from './components/modal/core';
import './App.scss'
import { DemoModal } from './components/modal/demo-modal';

function App() {
  const [modalVisible, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  const hideModal = () => {
    setModal(false);
  }

  return (
    <div className="App">
      <button type='button' onClick={showModal}>show modal</button>
      {modalVisible && <DemoModal onCancel={hideModal} onSave={hideModal}/>}
    </div>
  );
}

export default App;

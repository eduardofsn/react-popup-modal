import React, {useState} from 'react';
import { Modal } from './modal';

function App() {
  const [modalVisible, setModal] = useState(false);

  const showModal = () => {
    setModal(true);
  }

  return (
    <div className="App">
      <button type='button' onClick={showModal}>show modal</button>
      {modalVisible &&
        <Modal visible={modalVisible}>
        This is the modal content
        </Modal>
      }
    </div>
  );
}

export default App;

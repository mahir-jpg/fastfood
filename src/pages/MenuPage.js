import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import Modal from 'react-modal';
import './MenuPage.css';

const MenuPage = () => {
  const [burgers, setBurgers] = useState([]);
  const [selectedBurger, setSelectedBurger] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const firestore = firebase.firestore();
    const burgersCollection = firestore.collection('produits');

    burgersCollection.get().then((querySnapshot) => {
      const burgers = [];
      querySnapshot.forEach((doc) => {
        burgers.push({ id: doc.id, ...doc.data() });
      });
      setBurgers(burgers);
    });
  }, []);

  const getBurgerImage = async (burgerId) => {
    const storageRef = firebase.storage().ref();
    const imageRef = storageRef.child(`burger/${burgerId}.png`);
    const imageUrl = await imageRef.getDownloadURL();
    return imageUrl;
  };

  const handleOpenModal = async (burger) => {
    try {
      const imageUrl = await getBurgerImage(burger.id);
      setSelectedBurger({ ...burger, image: imageUrl });
      setModalIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setSelectedBurger(null);
    setModalIsOpen(false);
  };

  return (
    <div className="burger-grid">
      {burgers.map((burger) => (
        <div className="burger-card" key={burger.id}>
          <button onClick={() => handleOpenModal(burger)}>
          <img src={burger.image} alt={burger.name} />
            <h3>{burger.name}</h3>
            <p>{burger.calories} Calories</p>
          </button>
        </div>
      ))}
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal}>
        {selectedBurger && (
          <>
            <img src={selectedBurger.image} alt={selectedBurger.name} />
            <h3>{selectedBurger.name}</h3>
            <p>{selectedBurger.description}</p>
            <p>{selectedBurger.calories} Calories</p>
            <p>{selectedBurger.price} €</p>
          </>
        )}
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default MenuPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import './BurgerDetailsPage.css'; // importer le fichier CSS

const BurgerDetailsPage = () => {
  const { id } = useParams();
  const [burger, setBurger] = useState(null);

  useEffect(() => {
    const firestore = firebase.firestore();
    const burgersCollection = firestore.collection('produits').doc(id);

    burgersCollection.get().then((doc) => {
      if (doc.exists) {
        setBurger(doc.data());
      } else {
        console.log('No such document!');
      }
    });
  }, [id]);

  if (!burger) {
    return <div>Loading...</div>;
  }

  return (
    <div className="burger-details">
      <img src={burger.image} alt={burger.name} />
      <h3>{burger.name}</h3>
      <p>{burger.description}</p>
      <p>{burger.Calory} Calories</p>
      <p>{burger.price} €</p>
    </div>
  );
};

export default BurgerDetailsPage;

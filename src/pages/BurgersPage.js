import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const AddProduitsPage = () => {

  const handleAddProduits = () => {
    const firestore = firebase.firestore();
    const produitsCollection = firestore.collection('produits');

    // Ajouter le produit 1
    produitsCollection.doc('produit_id_1').set({
      name: "Jonesin' Burger",
      description: "Un burger classique avec du fromage, de la laitue, de la tomate, de l'oignon et de la sauce spéciale.",
      Calory: 600,
      points: 8,
      price: 9.99
    })
    .then(() => {
      console.log('Produit 1 ajouté avec succès');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du produit 1', error);
    });

    // Ajouter le produit 2
    produitsCollection.doc('produit_id_2').set({
      name: "Can I Get Some Bacon?",
      description: "Un burger avec du bacon croustillant, du fromage, des oignons frits et de la sauce barbecue.",
      Calory: 800,
      points: 10,
      price: 11.99
    })
    .then(() => {
      console.log('Produit 2 ajouté avec succès');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du produit 2', error);
    });
    
    // Ajouter le produit 3
    produitsCollection.doc('produit_id_3').set({
      name: "Hangover Helper",
      description: "Un burger avec un œuf sur le dessus, du bacon, du fromage, de l'avocat et de la sauce épicée.",
      Calory: 900,
      points: 12,
      price: 13.99
    })
    .then(() => {
      console.log('Produit 3 ajouté avec succès');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du produit 3', error);
    });
    
    // Ajouter le produit 4
    produitsCollection.doc('produit_id_4').set({
      name: "Stacked Jones",
      description: "Un burger double avec du fromage, de la laitue, de la tomate, des oignons et de la sauce spéciale.",
      Calory: 1000,
      points: 14,
      price: 15.99
    })
    .then(() => {
      console.log('Produit 4 ajouté avec succès');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du produit 4', error);
    });
    
    // Ajouter le produit 5
    produitsCollection.doc('produit_id_5').set({
      name: "Cheesy Jones",
      description: "Un burger avec trois types différents de fromage, des oignons croustillants et de la sauce ranch.",
      Calory: 1200,
      points: 16,
      price: 17.99
    })
    .then(() => {
      console.log('Produit 5 ajouté avec succès');
    })
    .catch((error) => {
      console.error('Erreur lors de l\'ajout du produit 5', error);
    });
    
    // Ajouter le produit 6
    produitsCollection.doc('produit_id_6').set({
name: "Veggie Delight",
description: "Un burger végétarien avec du fromage, de l'avocat, de la laitue, de la tomate et de la sauce spéciale.",
Calory: 500,
points: 6,
price: 7.99
})
.then(() => {
console.log('Produit 6 ajouté avec succès');
})
.catch((error) => {
console.error("Erreur lors de l'ajout du produit 6", error);
});
}

return (
<div>
<h1>Ajouter des produits</h1>
<button onClick={handleAddProduits}>Ajouter des produits</button>
</div>
);
}

export default AddProduitsPage;






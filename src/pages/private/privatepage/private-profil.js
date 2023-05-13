import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase-config";
import NavbarConnect from "../../../components/componentConnect/NavBarConnect";

export default function Profile() {
  const [username, setUsername] = useState("");
  const [points, setPoints] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    const userID = user.uid;

    db.collection("users")
      .doc(userID)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setUsername(data.username);
          setPoints(data.Points);
          setAddress(data.address);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, [auth.currentUser]);

  return (
    <>
      <NavbarConnect />
      <div class="profil">
        <div class="titre">
          <h1>Profil</h1>
        </div>
        <div class="element">
          <div class="username">
            <h2>Username: {username}</h2>
          </div>
          <div class="points">
            <h2>Points: {points}</h2>
          </div>
          <div class="address">
            <h2>Address: {address}</h2>
          </div>
        </div>
      </div>
    </>
  );
}
import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
import { auth,db } from "../firebase-config";
import {
    collection,
    getDocs,
    setDoc,
    doc,
    addDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import './Signup.css'




export default function Signup() {
const navigate = useNavigate();
const {signUp} = useContext(UserContext);
const [users] = useCollectionData(collection(db, "users"));

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [passwordConfirmation, setPasswordConfirmation] = useState("");
const [username, setUsername] = useState("");
const [validation, setValidation] = useState("");
const [address, setAddress] = useState("");


const inputs = useRef([])
const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  

const formRef = useRef();


const handleForm = async () => {

    if (users) {
			const usernames = users.map((user) => user.username);
			if (usernames.includes(username)) {
        setValidation("Nom d'utilisateur déjà pris")
				return;
			}
		}

		if (username.length === 0) {
      setValidation("Username required")
			return;
		}

		if (username !== username.trim()) {
      setValidation("Pas d'espace dans le nom d'utilisateur")
			return;
		}

		if (password !== passwordConfirmation) {
      setValidation("Les mots de passe ne correspondent pas")
			return;
		}

    createUserWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				const user = userCredential.user;

				// Mise à jour du nom d'utilisateur interne
				await updateProfile(user, { displayName: username });

				// Création de l'utilisateur dans Firestore
				await setDoc(doc(db, "users", user.uid), {
					uid: user.uid,
					username,
          Points: 0,
          address,
				});

        // Redirection vers la page d'accueil privée
       
       
			
      })
      navigate("/private/private-home");
				
	};

    





    return(
        <>
           
            <div class="header-title">
            <h1 class="header-title-text">Sign Up</h1>
            <h2 class="header-subtitle">Inscris toi!</h2>
            <h2 class="header-subtitle">Déjà un compte ? <Link to="/login" className="subtitle2">Connecte toi par ici !</Link></h2>
            <form  onSubmit={handleForm}  ref={formRef}>
                                <div >
                                        <input  type="text" required  aria-describedby="emailHelp"  placeholder="Nom d'utilisateur" onChange={e => setUsername(e.target.value)} />
                                </div>

                                <div>
                                  <input
                                    type="text"
                                    required
                                    placeholder="Adresse postale"
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                                </div>
                                <div >
                                        <input  type="email" required  id="signUpEmail" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)} placeholder="Adresse mail" />
                                </div>

                                    <div >
                                        <input  type="password" required  id="signUpPassword" placeholder="Mot de passe" onChange={e => setPassword(e.target.value)} />
                                    </div>

                                    <div >
                                        <input name="pwd" type="password" required  id="repeatPwd" placeholder="Confirmer le mot de passe"  onChange={e => setPasswordConfirmation(e.target.value)}/>
                                        <p className="text-danger mt-1"> {validation}</p>
                                    </div>

                                    <button type="submit" class="btn" >Submit</button>

                                </form>
            </div>
        </>
    )
}
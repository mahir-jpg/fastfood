import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../context/userContext";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

export default function Signin() {

    const { signIn } = useContext(UserContext);

    const navigate = useNavigate();

    const [validation, setValidation] = useState("");

    const inputs = useRef([]);
    const addInputs = (el) => {
        if (el && !inputs.current.includes(el)) {
            inputs.current.push(el);
        }
    };
    const formRef = useRef();

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(inputs);
        try {
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value
            );
            // à tester
            // formRef.current.reset();
            setValidation("");
            // console.log(cred);
            navigate("/private/private-home");
        } catch {
            setValidation("Wopsy, email and/or password incorrect")
        }
    };



    return (
    <>
        
       
            <div class="header-title">
            <h1 class="header-title-text">Log in</h1>
            <h2 class="header-subtitle">Connecte toi!</h2>
            <h2 class="header-subtitle">Pas de compte ? <Link to="/signup" className="subtitle2">Inscris-toi !</Link></h2>
            <form
                  ref={formRef}
                  onSubmit={handleForm}
                  
                >
                  <div >
                    <input
                    placeholder="Email Efrei"
                      ref={addInputs}
                      name="email"
                      required
                      type="email"
                      id="signInEmail"
                    />
                  </div>

                  <div >
                    <input
                    placeholder="Mot de passe"
                      ref={addInputs}
                      name="pwd"
                      required
                      type="password"
                      id="signInPwd"
                    />
                    <p >{validation}</p>
                  </div>

                  <button class="btn">Login</button>
                </form>
            </div>
            
        
        
            
                

      
      </>
    )
}
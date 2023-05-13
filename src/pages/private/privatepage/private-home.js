//réalise un bonjour plus le nom de l'utilisateur

import React, { useState, useEffect } from "react";
import NavBarConnect from "../../../components/componentConnect/NavBarConnect";


export default function PrivateHome() {
    return(
        <div>
            <NavBarConnect />
            <h1>Private Home</h1>
        </div>
    )

}
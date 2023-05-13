import React from "react";
import "./SpecialOffers.css";
import offerImage1 from "../img/offer1.jpg";
import offerImage2 from "../img/offer2.jpg";
import offerImage3 from "../img/offer3.jpg";

const SpecialOffers = () => {
    const offers = [
        {
            id: 1,
            image: offerImage1,
            title: "Offre spéciale 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "10£",
        },
        {
            id: 2,
            image: offerImage2,
            title: "Offre spéciale 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: "15£",
        },
        {
            id: 3,
            image: offerImage3,
            title: "Offre spéciale 3",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: "20£",
        },
    ];

    return (
        <div className="SpecialOffers">
            <h2>Nos offres spéciales</h2>
            <div className="SpecialOffers-container">
                {offers.map((offer) => (
                    <div key={offer.id} className="SpecialOffer">
                        <img src={offer.image} alt={offer.title} />
                        <div className="SpecialOffer-details">
                            <h3>{offer.title}</h3>
                            <p>{offer.description}</p>
                            <p className="SpecialOffer-price">{offer.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOffers;
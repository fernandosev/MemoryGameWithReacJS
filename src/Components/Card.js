import React, {useEffect, useState} from 'react'

//CSS
import './card.css';

import Card1 from '../assets/card1.png';
import Card2 from '../assets/card2.png';
import Card3 from '../assets/card3.png';
import Card4 from '../assets/card4.png';
import Card5 from '../assets/card5.png';
import Card6 from '../assets/card6.png';
import Yugioh from '../assets/Yugioh_Card_Back.jpg';

export default function Card({width, height, img, position, status, func}){

     const renderImg = (img) => {
        img = img%6;

        switch(img){
            case 0:
                return Card1;
            case 1:
                return Card2;
            case 2:
                return Card3;
            case 3:
                return Card4;
            case 4:
                return Card5;
            case 5:
                return Card6;
        }
    }

    return(
        <div onClick={() => func(position, img)} className="flip-card" style={{width, height}}>
            <div className="flip-card-inner" style={{transform: status}}>
                <div className="flip-card-front">
                    <img src={Yugioh} style={{width: 84, height: 108}}/>
                </div>
                <div className="flip-card-back">
                    <img src={renderImg(img)} style={{width, height}}/>
                </div>
            </div>
        </div>
    );
}
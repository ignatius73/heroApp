import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
        id,
        superhero, 
        publisher, 
        alter_ego,
        first_appearance,
        characters
                        }) => {
    
    return (
        <div className="card ms-3" style={ { maxWidth:540 }}>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img className="card-img animate__animated animate__flipInY" src={ `./assets/${ id }.jpg` } alt={superhero} />
                </div>
                <div className="col-md-8">
                <h6>Nombre: { superhero }</h6>
                <h6>Alter Ego: { alter_ego }</h6>
                {
                    ( alter_ego !== characters )
                    && <p className="card-text">Personajes: { characters }</p>
                }
                <small>Aparición: { first_appearance }</small><br />
                <small><Link to={ `./heroe/${ id }` } className="text-sm-left">Leer más...</Link></small>
                </div>
            </div>
    
        </div>
    )
}

import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroeScreen = ({ history }) => {

    const handleReturn = () =>{
        if ( history.length <= 2 ){
            history.push('/');
        }else{
            history.goBack();
        }
        
    };
    const { heroeId } = useParams();
    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId]);
    
    if ( !heroe){
        return <Redirect to="/" />;
        
    }
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        } = heroe;

    return (
    <div className="container-md">
            <div className="card">
                <img src={ `/assets/${ heroeId }.jpg`} className="card-img-top animate__animated animate__fadeIn" alt={`${heroeId}`} />
                <div className="card-body">
                    <h5 className="card-title text-center text-danger">{ superhero }</h5>
                    <p className="card-text">Primera Aparición { first_appearance }</p>
                    <p className="card-text">Alter Ego: { alter_ego }</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{ publisher }</small>
                </div>
        </div>
        <button className="btn btn-primary btn-block" onClick={ handleReturn }>Return</button>   
    </div>
        )
}

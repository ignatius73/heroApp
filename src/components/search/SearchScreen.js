import React, { useMemo } from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = ({ history }) => {

const location = useLocation();

const { q = '' } = queryString.parse( location.search);

//Set Initial value equals to q
const initialState = {
    search: q,
};

    const [ values, handleInputChange ] = useForm(initialState);

    const { search } = values;
 

  

    const handleSubmit = ( e )=>{
        e.preventDefault();
        history.push(`?q=${search}`);

    } ;

    

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]) ;
    return (
        <div className='container mr-auto'>
        <div className='row'>
            <div className='col-5'>
                <h4>Search Form</h4>

                <form onSubmit={handleSubmit}>
                    <input type='text' 
                           name='search'
                           value={search}
                           onChange={handleInputChange} className='form-control'></input>

                    <button type='submit'
                            className='btn mt-1 btn-primary'>Search</button>
                </form>

            </div>
            <div className='col-7'>
                <h4>Results</h4>
                {
                    ( q === '')
                        && 
                        <div className="alert alert-warning">
                            Search for a hero
                        </div>
                }
                {
                    (q !== '' && heroesFiltered.length===0)
                        &&
                        <div className="alert alert-danger">
                            There is not a hero with { q }
                        </div>

                }
                {
                    heroesFiltered.map( h=>(
                        <HeroCard key={h.id}
                                  {...h}/>

                    ))
                }
            </div>
        </div>
        </div>
    )
}

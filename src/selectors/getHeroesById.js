import { heroes } from "../data/heroes";

export const getHeroesById = ( id ) =>{
    
    

   return heroes.find( hero => heroes.id === id );
}
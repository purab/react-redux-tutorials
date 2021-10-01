import React from 'react';

const Ninjas = ({ninjas}) => {    
        console.log(ninjas);
        const ninjaList = ninjas.map(ninja => {
            if(ninja.age >30) {
                return(
                    <div className="ninja" key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Belt: {ninja.belt}</div>
                    </div>
                )
            } else {
                return null;
            }
                
            }
        )
        return(
         <div className="ninja-list">
             {ninjaList}
         </div>   
        )
}

export default Ninjas;

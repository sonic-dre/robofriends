import React from 'react';

const Card = ({id, name, username, email}) =>{
    
    return(
        <div className= 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt ='photo' src = {`https://robohash.org/${id}?100x100`} />

            <div>
                <h4>{name}</h4>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}



export default Card;
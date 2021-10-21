import React from 'react'



export default function Token() {
const jwt = require('jsonwebtoken');

const signIn = ()=>{

    const id = '1';
    const token = jwt.sign({id},"jwtSecret", {
        expiresIn: 300,
    })

    // console.log()
}



    return (
        <div>
            <p onClick={()=> signIn()}> token </p>
        </div>
    )
}

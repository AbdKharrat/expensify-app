import React from 'react';
import { Link } from 'react-router-dom';


const WrongPage = () => (
    <div>
        <h1>Error 404: this Page is not available!!</h1>
        <Link to='/'><button>Go to Home page</button></Link>
    </div>
);

export default WrongPage;
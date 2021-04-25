import React from 'react';

import { Link } from 'react-router-dom';


import CssBaseline from '@material-ui/core/CssBaseline';



const MainPage = (props) => (


    <div>
        <CssBaseline />
        {props.children}


    </div>
)

export default MainPage
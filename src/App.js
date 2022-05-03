import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import Toplearn from './containers/Toplearn';

const App = () => {
    return ( 
        <BrowserRouter>
            <Toplearn/> 
        </BrowserRouter>
    );
}
 
export default App;
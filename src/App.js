import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import Toplearn from './containers/Toplearn';

const App = () => {
    return ( 
        <BrowserRouter>
            <Toplearn/> 
            <ToastContainer/>
        </BrowserRouter>
    );
}
 
export default App;
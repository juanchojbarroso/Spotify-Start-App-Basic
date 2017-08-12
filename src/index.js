//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router  } from 'react-router-dom'

//Router
import AppRoutes from './routes'

//Assets
import './index..css'
import registerServiceWorker from './registerServiceWorker';

render(
<Router>
    <AppRoutes/>
</Router>,
document.getElementById('root'));
registerServiceWorker();

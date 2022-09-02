import { createRoot} from 'react-dom/client';
import React from 'react';

const App = () => {
    return (<h1> Hello Karen </h1>);
};

// new react 18 api
const container = document.getElementById('root');
const root = createRoot (container!);
root.render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client';
import Funqciuri from './funqciuri';

function app() {
    return (
        <React.Fragment>
            <Funqciuri />
        </React.Fragment>
    )
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Funqciuri />);
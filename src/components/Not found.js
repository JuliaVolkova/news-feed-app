import React from 'react';
import Planet from "./planet";

const NotFound = () => (
    <div className="not-found">
        <p className="not-found-text">Error 404! Oooooops! Seems something went wrong :( Try again and you will find that you are looking for!</p>
        <Planet />
    </div>
);

export default NotFound;
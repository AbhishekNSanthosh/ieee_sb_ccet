// RightClickPrevention.js
import React, { useEffect } from 'react';

function RightClickPrevention() {
    useEffect(() => {
        const preventRightClick = (event) => {
            event.preventDefault();
        };

        document.addEventListener('contextmenu', preventRightClick);

        return () => {
            document.removeEventListener('contextmenu', preventRightClick);
        };
    }, []);

    return null;
}

export default RightClickPrevention;

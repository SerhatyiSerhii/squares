import { useContext, useEffect, useState } from 'react';
import { squareContext } from '../../App';

function SquareComponent({ row, column, started, id }) {
    const [filled, setFilled] = useState(false);

    const context = useContext(squareContext);

    useEffect(() => {
        setFilled(false);
    }, [started]);

    useEffect(() => {
        context(row, column, filled, id);
    }, [filled]);

    const fillSquare = () => {
        setFilled(!filled);        
    }

    return (
        <div className={'square' + (filled ? ' blue' : '')} onMouseEnter={fillSquare} />
    );
}

export default SquareComponent;
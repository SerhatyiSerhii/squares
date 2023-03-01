import { useContext, useEffect, useState } from 'react';
import { SquareContext } from '../../App';

function Square({ row, column, started, id }) {
    const [filled, setFilled] = useState(false);

    const toggleSquare = useContext(SquareContext);

    useEffect(() => {
        setFilled(false);
    }, [started]);

    const fillSquare = () => {
        toggleSquare(row, column, !filled, id);

        setFilled(!filled);
    }

    return (
        <div className={'square' + (filled ? ' blue' : '')} onMouseEnter={fillSquare} />
    );
}

export default Square;
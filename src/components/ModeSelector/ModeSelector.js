import { useEffect, useState } from 'react';

const baseURL = 'http://demo7919674.mockable.io/';
const headers = { 'Content-Type': 'application/json' };

function ModeSelector({ displayBoard, saveMode }) {

    const [modes, setModes] = useState([]);

    useEffect(() => {
        fetch(baseURL, headers)
            .then(response => response.json())
            .then(data => setModes(data))
    }, []);

    const pickMode = (event) => {
        displayBoard(false);

        const foundMode = modes.find(mode => mode.name === event.target.value);
        saveMode(foundMode.field)
    }

    const showBoard = () => {
        displayBoard(true);
    }

    return (
        <div className='selector-controllers'>
            <select onChange={pickMode}>
                <option hidden={true}>Pick mode</option>
                {
                    modes.map(mode => {
                        return <option key={mode.field}>{mode.name}</option>
                    })
                }
            </select>
            <button onClick={showBoard}>Start</button>
        </div>

    );
}

export default ModeSelector;
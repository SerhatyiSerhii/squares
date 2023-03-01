import { useEffect, useState } from 'react';

function ModeSelectorComponent({ displayBoard, saveMode }) {
    const baseURL = 'http://demo7919674.mockable.io/';

    const [modes, setModes] = useState([]);

    useEffect(() => {
        const headers = { 'Content-Type': 'application/json' };
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

export default ModeSelectorComponent;
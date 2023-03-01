import Square from "../Square/Square";

function Board({ started, pickedMode }) {

    const drawCols = (i) => {
        const cols = [];

        for (let j = 0; j < pickedMode; j++) {            
            const id = i * pickedMode + j + 1;

            cols.push(<Square key={id} row={i} column={j} started={started} id={id} />);
        }

        return cols;
    }

    const drawRows = () => {
        const rows = [];

        for (let i = 0; i < pickedMode; i++) {
            rows.push(
                <div key={i} className='row'>
                    {
                        drawCols(i)
                    }
                </div>
            );
        }

        return rows;
    }

    return (
        <div className={started ? 'show' : 'hide'}>
            {
                drawRows()
            }
        </div>
    );
}

export default Board;
import SquareComponent from "../SquareComponent/Square";

function BoardComponent({ started, pickedMode }) {

    return (
        <div className={started ? 'show' : 'hide'}>
            {
                (
                    () => {
                        const row = [];
                        let id = 1;
                        for (let i = 0; i < pickedMode; i++) {
                            row.push(
                                <div key={i} className='row'>
                                    {
                                        (() => {
                                            const col = [];
                                            for (let j = 0; j < pickedMode; j++) {
                                                col.push(<SquareComponent key={id} row={i} column={j} started={started} id={id++}/>);
                                            }

                                            return col;
                                        })()
                                    }
                                </div>
                            );
                        }

                        return row;
                    }
                )()
            }
        </div>
    );
}

export default BoardComponent;
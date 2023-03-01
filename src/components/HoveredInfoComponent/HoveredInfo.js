function HoveredInfoComponent({ squares }) {
    return (
        <div className="hover-squares">
            Hover squares
            {
                squares.map(item => {
                    return <div className="square-info" key={item.id}>row {item.row + 1} col {item.column + 1}</div>
                })
            }
        </div>
    );
}

export default HoveredInfoComponent;
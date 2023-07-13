
const LoadBar = ({ percentage }) => {
    let color;
    if (percentage > 70) {
        color = 'red'
    }
    else if (percentage > 40) {
        color = 'orange'
    }
    else {
        color = 'green'
    }
    return (
        <div style={{ height: '30px', width: '100%', border: "1px black solid", backgroundColor: 'whitesmoke' }}>
            <div style={{
                height: "100%", width: `${percentage}%`,
                backgroundColor: color,
                textAlign: 'right',
                paddingTop: ' 6px',
                paddingBottom: '5px',
               
            }}>{percentage}%</div>
        </div>
    )
}

export default LoadBar;
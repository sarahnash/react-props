// Render the circles using React!
const App = ({ circles }) => {
    // let { circles } = props;
    console.log(circles)
    return(
        <div className="d-flex flex-column align-items-center">
            {
                circles.map(function (circle, index) {
                    console.log(index)
                    return <div style={{
                        width: (circle.radius * 2), 
                        height: (circle.radius * 2), 
                        borderRadius: circle.radius, 
                        backgroundColor: circle.color
                    }}
                    key={index}></div>
            })
        }
        </div>
    ) 
}

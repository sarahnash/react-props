// Render the rectangle using React!
const App = ({ rectangle }) => {
    // let { rectangle } = props;
    console.log(rectangle)
    return (
        <div style={{
            width: rectangle.width,
            height: rectangle.height,
            backgroundColor: rectangle.color}}></div>
    )
}

// const App = (props) => {
//     // let { rectangle } = props;
//     console.log(props.rectangle)
//     return (
//         <div style={{
//             width: props.rectangle.width,
//             height: props.rectangle.height,
//             backgroundColor: props.rectangle.color}}></div>
//     )
// }



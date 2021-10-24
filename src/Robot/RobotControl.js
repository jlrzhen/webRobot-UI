export default function sendCoords(stickX, stickY, mouseDown, url) {
    console.log(`${stickX} ${stickY} ${mouseDown}`);
    // fetch(`${process.env.REACT_APP_FLASK_URL}${stickX}/${stickY}`);
    fetch(`${url}${stickX}/${stickY}`).then((response) => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Something went wrong');
    }
    })
    .catch((error) => {
    //console.log(error)
    });
}
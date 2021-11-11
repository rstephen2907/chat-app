const socket = io();

// socket.on('countUpdated', (count) => {
//     console.log('Count has been updated to ' + count);
// });


// document.querySelector('#increment').addEventListener('click', () => {
//     console.log('click');
//     socket.emit('increment');
// });

socket.on('message', (msg) => {
    console.log(msg);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value;
    socket.emit('sendMessage', message);
});

document.querySelector('#send-location').addEventListener('click', () => {
    if (!navigator.geolocation) {
        return alert('Geolocation is not supported by your browser');
    }
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
    });
})
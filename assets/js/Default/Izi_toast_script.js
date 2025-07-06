// SAMPLE RUN (SUCCESS): showToast('success', 'Success', 'This is the success message.');
// SAMPLE RUN (ERROR): showToast('error', 'Error', 'This is the error message.');
// SAMPLE RUN (INFO): showToast('info', 'Info', 'This is the info message.');
// SAMPLE RUN (WARNING): showToast('warning', 'Warning', 'This is the warning message.');

function showToast(type, title, message) {
    iziToast[type]({
        title: title,
        message: message,
        position: 'topCenter',
        timeout: 2800,
        close: true,
        progressBar: true
    });
}

//SAMPLE RUN: showConfirmationToast('Display!', 'Are you sure you want to display?')

function showConfirmationToast(title, message) {
    iziToast.question({
        timeout: false,
        close: false,
        overlay: true,
        displayMode: 'once',
        title: title,
        message: message,
        position: 'topCenter',
        buttons: [
            ['<button><b>YES</b></button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
                showToast('success', 'Success!', 'Your changes have been applied.');
            }, true],

            ['<button>Cancel</button>', function (instance, toast) {
                instance.hide({ transitionOut: 'fadeOut' }, toast, 'button');
            }]
        ]
    });
}
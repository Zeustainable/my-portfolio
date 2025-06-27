// SAMPLE RUN (SUCCESS): showToast('success', 'Success', 'This is the success message.');
// SAMPLE RUN (ERROR): showToast('error', 'Error', 'This is the error message.');
// SAMPLE RUN (INFO): showToast('info', 'Info', 'This is the info message.');
// SAMPLE RUN (WARNING): showToast('warning', 'Warning', 'This is the warning message.');

function showToast(type, title, message) {
    iziToast[type]({
        title: title,
        message: message,
        position: 'topCenter',
        timeout: 3000,
        close: true,
        progressBar: true
    });
}
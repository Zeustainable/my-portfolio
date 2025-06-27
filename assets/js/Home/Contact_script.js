function copyURL(url) {

    let returnURL = null;

    switch(url) {
        case "linkedin":
            returnURL = 'https://www.linkedin.com/in/rod-dominic-satsatin/';
            break;
        case "jobs180":
            returnURL = 'https://rod-dominic-satsatin.jobs180.com/';
            break;
        case "github":
            returnURL = 'https://github.com/Zeustainable';
            break;
        case "facebook":
            returnURL = 'https://www.facebook.com/rdominics/';
            break;
        case "telegram":
        case "viber":
            returnURL = '09763675138';
            break;
    }

    navigator.clipboard.writeText(returnURL).then(function() {
        showToast('info', 'Copied!', 'The URL has been copied.');
    }).catch(function(error) {
        showToast('error', 'Error!', 'The URL has failed to copy.');
    });
}
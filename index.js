//template_vod159n
//public key- N29IlFRHAmCv4YxBZ
//service ID - service_4rje6w9

 function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overload--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " moadal__overlay--visible";

    emailjs
    .sendForm(
    'service_4rje6w9',
    'template_vod159n',
    event.target,
    'user_N29IlFRHAmCv4YxBZ')

    .then(() => { 
        throw new Error("error");
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }) .catch(() => {
        loading.classList.removal("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please try again shortly."
        );
    })
}
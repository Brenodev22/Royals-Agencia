var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_bjae46m";
    const templateID = "template_nd29j6n";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
        })
        .catch((err) => console.log(err));
}

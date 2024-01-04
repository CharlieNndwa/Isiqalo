function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        your_email: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_dgf1xu7", "template_uqjely1", params).then(function (res) {
        alert("Thank You, We will respond to you as soon as possible! ");
    })
}
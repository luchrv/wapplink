document.getElementById("openapp").disabled = true;
document.getElementById("openweb").disabled = true;

// open y new tab with url
document.getElementById("openapp").onclick = function() {
    openTab("api");
}
document.getElementById("openweb").onclick = function() {
    openTab("web");
}

// validate input phone number
document.getElementById("phone").addEventListener("keyup", function(event) {
    event.preventDefault();
    let phone = document.getElementById("phone").value;
    linkMaker(phone);
});

document.getElementById("phone").addEventListener("paste", function (event) {
    event.preventDefault();
    return false;
});

// validate input onkeypress only number
function onlynumber(event) {
    let key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8) {
        return true;
    } else if ( key < 48 || key > 57 ) {
        return false;
    } else {
        return true;
    }
}

function validaPhone(phone) {
    let regex = /^[0-9]*$/;
    if (regex.test(phone)) {
        return true;
    } else {
        return false;
    }
}

function openTab(btn) {
    let phone = document.getElementById("phone").value;
    let isPhone = validaPhone(phone);
    if (isPhone) {
        window.open(`https://${btn}.whatsapp.com/send/?phone=${phone}`, "_blank");
    } else {
        alert("Good Job! You are an amazing hacker.");
    }
}

function linkMaker(phone) {
    
    let isPhone = validaPhone(phone);
    if (isPhone) {
        document.getElementById("phone").style.border = "1px solid #25D366";
    } else {
        document.getElementById("phone").style.border = "1px solid red";
    }
    
    if (document.getElementById("phone").value.length > 5) {
        document.getElementById("openapp").disabled = false;
        document.getElementById("openweb").disabled = false;
        document.getElementById("linkapp").innerText = `https://api.whatsapp.com/send/?phone=${phone}`;
        document.getElementById("linkweb").innerText = `https://web.whatsapp.com/send/?phone=${phone}`;
        document.getElementById("links").style.display = "block";
    } else {
        document.getElementById("openapp").disabled = true;
        document.getElementById("openweb").disabled = true;
        document.getElementById("linkapp").innerText = "";
        document.getElementById("linkweb").innerText = "";
        document.getElementById("links").style.display = "none";
    }
}
function getUrlParameter(name) {
    let param = new URLSearchParams(window.location.search);
    return param.get(name);
}

document.addEventListener('DOMContentLoaded', ()=> {
    let form = document.getElementById('frm');
    let link = document.getElementById('link');
    let username = getUrlParameter('username');
    let span = document.getElementById('span_for_name');
    if(username){
        form.classList.add("hidden");
        link.classList.remove("hidden");
        span.classList.remove("hidden");
        span.innerHTML = username + ", приветствую вас!";
    }else {
        form.classList.remove("hidden");
        link.classList.add("hidden");
        span.classList.add("hidden");
    }
});

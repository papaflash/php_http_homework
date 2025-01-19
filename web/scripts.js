const frm = document.getElementById('frm');
const showFrmLink = document.getElementById("link");
const textBlock = document.getElementById("span_for_name");

frm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(frm);
    const response = await fetch(frm.action, {
        method: frm.method,
        body: formData,
    });

    const resonseData = await response.text();
    frm.classList.add("hidden");
    textBlock.innerText = resonseData;
    textBlock.classList.remove("hidden");
    showFrmLink.classList.remove("hidden");
});

showFrmLink.addEventListener('click', (e) => {
    e.preventDefault();

    showFrmLink.classList.add("hidden");
    textBlock.classList.add("hidden");
    frm.classList.remove("hidden");
});
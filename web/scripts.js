const frm = document.getElementById('frm');
const showFrmLink = document.getElementById("link");
const textBlock = document.getElementById("span_for_name");

//Обработчик отправки формы
frm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(frm);
    if(iSEmptyInputsFrm(formData)){
        return;
    }
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
//Функция проверки пустых полей
function iSEmptyInputsFrm(frm)
{
    if(frm.get('name') === "" || frm.get('surname') === ""){
        alert("Для стандартизации необходимо заполнить минимум два поля: Имя и Фамилия!")
        return true;
    }
    return false;
}
//Обработчик кнопки нового запроса
showFrmLink.addEventListener('click', (e) => {
    e.preventDefault();

    showFrmLink.classList.add("hidden");
    textBlock.classList.add("hidden");
    frm.classList.remove("hidden");
});
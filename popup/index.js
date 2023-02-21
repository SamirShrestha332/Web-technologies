let  popup = document.getElementById('popup');
let username = document.getElementById('username').value;
function openPopup(){
    popup.classList.add('open-popup');

}
function closePopup(){
    popup.classList.remove('open-popup');
    alert('Thank you'+username);
}
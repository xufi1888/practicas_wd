const capturedDiv = document.querySelector('div');
const img = document.querySelector('img');
const changeBtn = document.querySelector('.change__button')

function paddingChange() {
    capturedDiv.classList.add('padd-40');
}

function backgroundChange() {
    capturedDiv.classList.add('bg-red');
}

function borderAdd() {
    capturedDiv.classList.add('border-2px');
}

function titleChange() {
    img.title = 'foto random';
}

function displayChange() {
    img.style.display = 'none';
}

function buttonGone() {
    changeBtn.style.display = 'none'
}
 
function divChanger() {
    paddingChange();
    backgroundChange();
    borderAdd();
    titleChange();
    displayChange();
    buttonGone();
}

changeBtn.addEventListener('click', function(){
    divChanger()
})

const subBtn = document.getElementById('submitform');
subBtn.addEventListener('click',storage);
function storage(event){
    event.preventDefault();
    const obj1 = {
        firstKey: document.getElementById('first_name').value,
        secondKey: document.getElementById('email').value,
        thirdKey: document.getElementById('selectoptions').value,
       fourthKey: document.getElementById('selectsecond').value,
        fifthKey: document.getElementById('textarea').value,
    }
    const showValues = Object.values(obj1);
    console.log(showValues);
}
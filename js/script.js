function insert(num) {
    document.form.textview.value = 
    document.form.textview.value + num
}
function clean() {
    document.form.textview.value = "";
}
function back() {
    var elimination = document.form.textview.value;
    document.form.textview.value = elimination.substring(0,elimination.length-1);
}
function equal() {
    var elimination = document.form.textview.value;
    if(elimination) {
        document.form.textview.value = eval(elimination);
    }
    else {
        alert('Ошибка!')
    }
}
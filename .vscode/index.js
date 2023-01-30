
function insert(num) {

    var number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = number + num;
}

function clean() {

    document.getElementById('display').innerHTML = '';
}

function back(){
    var number = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = number.substring(0, number.length -1)
}

function calcular(){
    var number = document.getElementById('display').innerHTML;
    if(display){
    document.getElementById('display').innerHTML = eval(number);
    }
}
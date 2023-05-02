const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const sum = document.querySelector(".num");

let count = 1;

function func_plus() {
    count++
    if(count < 10){
        count = "0" + count
        sum.innerText = count;
    }else{
        sum.innerText = count;
    }
    console.log(count)
}

function func_minus() {
  if (count > 1) {
    count--;
    if(count < 10){
        count = "0" + count
        sum.innerText = count;
        console.log(count)
    }
  }
}


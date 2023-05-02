const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const sum = document.querySelector('.num')

let count = 1

plus.addEventListener('click' , ()=>{
    count++
    count = (count < 10) ? "0" + count : count
    sum.innerText = count
    console.log(count);
})

minus.addEventListener('click' , ()=>{
   if(count > 1){
    count--
    count = (count < 10) ? "0" + count : count
    sum.innerText = count
    console.log(count);
   }


})

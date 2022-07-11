console.log('file is connected');


const arr=[44,56,2,6,8,12,69,5,89,45]

  function getElem() {
    let el=document.getElementById('search').value;
    if (el<arr.length) {
        alert(arr[el])
    }else{
        alert('please enter correct digit')
    }


  }

 //lets assume we want highest digit  from the above array what we can do here
const arr_new=arr.sort((a,b)=>{
    return a-b;
})
const newArr=arr_new.length-1
const highestValue=arr[newArr]
console.log(highestValue)
const enterNum = document.getElementById('input');
const btn = document.getElementById('button');


function request(){
  let value = parseInt(enterNum.value);
  
  if(value >= 1 && value <= 10){
     //1 созд объект запроса
  const xhr = new XMLHttpRequest();
  //2 куда посыл и парам
  const url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
  xhr.open('GET', url, true);
  
  //3 ответ от сервера
  xhr.onload = function(){
   if(xhr.readyState === 4 && xhr.status === 200){
     let result = JSON.parse(xhr.response)
     //вывод на экран
     result.forEach(function(photo){
       let img = document.createElement('img');
       img.src = photo.url;
       document.body.appendChild(img);
     })
   } 
  };
  //4 посылаем запрос
  xhr.send();
  } else {
    alert('число вне диапазона от 1 до 10')
  }
}
  


btn.addEventListener('click', request)
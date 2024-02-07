const enterNum = document.getElementById('input');
const btn = document.getElementById('button');

btn.addEventListener('click', function(){
  let value = +(enterNum.value);
  
  if(value >= 1 && value <= 10) {
    let url = `https://jsonplaceholder.typicode.com/photos?_limit=${value}`;
    
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200){
        let result = JSON.parse(xhr.responseText);
        result.forEach(function(photo) {
          let img = document.createElement('img');
          img.src = photo.url;
          document.body.appendChild(img);
        }); 
      }
    };
    xhr.send();
  }else {
    alert('Число не входит в диапазон от 1 до 10')
  }
})
const inputOne = document.querySelector('.input1');
const inputTwo = document.querySelector('.input2');
const myBtn = document.querySelector('.btn');

function enterNum(){
  const value1 = parseInt(inputOne.value);
  const value2 = parseInt(inputTwo.value);
  
  if(isNaN(value1) || isNaN(value1) || value1 < 100 || value1 > 300 || value2 < 100 || value2 > 300) {
    const div = document.createElement("div");
    div.innerText = "Одно из чисел вне диапазона от 1 до 10";
    document.body.appendChild(div);
  } else{
    const url = `https://dummyimage.com/${value1}x${value2}/`;
    fetch(url)
      .then((response) => response.blob())
      .then(blob => {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(blob);
        document.body.appendChild(img);
      })
      .catch(error => {
        console.log(error.message);
      });
  }
}


myBtn.addEventListener('click', enterNum);
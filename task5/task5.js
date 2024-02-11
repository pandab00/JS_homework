// Получаем элементы из DOM
const pageNumberInput = document.getElementById("pageNumber");
const limitInput = document.getElementById("limit");
const button = document.getElementById("submit");

button.addEventListener("click", function () {
  const pageNumber = parseInt(pageNumberInput.value);
  const limit = parseInt(limitInput.value);

  if (
    (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) &&
    (isNaN(limit) || limit < 1 || limit > 10)
  ) {
    const div = document.createElement("div");
    div.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
    document.body.appendChild(div);
  } else if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > 10) {
    const div = document.createElement("div");
    div.innerText = "Номер страницы вне диапазона от 1 до 10";
    document.body.appendChild(div);
  } else if (isNaN(limit) || limit < 1 || limit > 10) {
    const div = document.createElement("div");
    div.innerText = "Лимит вне диапазона от 1 до 10";
    document.body.appendChild(div);
  } else {
    const url = `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=${limit}`;

    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        localStorage.setItem("imagesData", JSON.stringify(data));
        data.forEach((image) => {
          const img = document.createElement("img");
          img.src = image.url;
          document.body.appendChild(img);
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
});

// Проверяем наличие данных в localStorage и выводим их на экран
const storedData = localStorage.getItem("imagesData");
if (storedData) {
  const data = JSON.parse(storedData);
  data.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.url;
    document.body.appendChild(img);
  });
}

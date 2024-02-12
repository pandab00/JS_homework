// XML:

// <list>
//   <student>
//     <name lang="en">
//       <first>Ivan</first>
//       <second>Ivanov</second>
//     </name>
//     <age>35</age>
//     <prof>teacher</prof>
//   </student>
//   <student>
//     <name lang="ru">
//       <first>Петр</first>
//       <second>Петров</second>
//     </name>
//     <age>58</age>
//     <prof>driver</prof>
//   </student>
// </list>


// JS-объект:

// {
//   list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// }


//решение//
const xmlString = `<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, 'text/xml');

const students = xmlDOM.getElementsByTagName('student');

const res = {
  list: []
}

for(let i = 0; i < students.length; i++) {

 const student = students[i];
  const nameElement = student.querySelector('name');
  
 const studObj = {
   firstName: nameElement.querySelector('first').textContent,
   lastName: nameElement.querySelector('second').textContent,
   age: +(student.querySelector('age').textContent),
   prof: student.querySelector('prof').textContent,
   lang: nameElement.getAttribute('lang')
 };
   
 res.list.push(studObj);
}

console.log(res);

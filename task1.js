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
 const firstName = nameElement.querySelector('first').textContent;
 const lastName = nameElement.querySelector('second').textContent;
 const age = student.querySelector('age').textContent;
 const pro = student.querySelector('prof').textContent;
 const langAttr = nameElement.getAttribute('lang');
  
 const studObj = {
   name: `${firstName} ${lastName}`,
   age: age,
   prof: pro,
   lang: langAttr
 };
   
 res.list.push(studObj);
}

console.log(res);

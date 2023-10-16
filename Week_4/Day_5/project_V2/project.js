class student {
  constructor(name, dataStudentFrom, dataIndex, location, image) {
    this.name = name;
    this.dataStudentFrom = dataStudentFrom;
    this.dataIndex = dataIndex;
    this.location = location;
    this.image = image;
  }
}

function getStudentList(){
  const marwa = new student("Marwa", "Lausanne", "1", "2", "img/Marwa.jpg");
  const yidnek = new student("Yidnek", "Zurich", "2", "3", "img/Yidnek.jpg");
  const olena = new student("Olena", "Bern", "3",  "1", "img/Olena.jpg");
  const damla = new student("Damla", "Lausanne", "4", "2", "img/Damla.jpeg");
  const vlad = new student("Vladimir", "Bern", "5", "1", "img/Vladimir.jpg");
  const chaewon = new student("Chaewon", "Bern", "6", "1", "img/Chaewon2.jpg");
  // Create list of products
  const students = [marwa, yidnek, damla, olena, vlad, chaewon];
  return students;
}

let listOfStudents = document.getElementById("students");
getStudentList().forEach((student) => {
    listOfStudents.innerHTML += 
    `<li onclick="showDetails(this)" class="student" data-index="${student.dataIndex}" location="${student.location}" data-student-from="${student.dataStudentFrom}">` +
      `<h3>"${student.name}"</h3>` + 
      `<img src="${student.image}">` +
    "</li>"
});

function showDetails(student) {
  alert(student.name + " is in the " + student.dataStudentFrom + " group.");
}


let cols = Array.from(document.querySelectorAll(".container .student"));
cols.map((col) => {
  let location = col.getAttribute("location");
  col.style.order = location;
});
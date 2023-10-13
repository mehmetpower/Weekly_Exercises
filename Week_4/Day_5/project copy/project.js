class container {
  constructor(name, dataStudentFrom, dataIndex, location, image){
      this.name = name;
      this.dataStudentFrom = dataStudentFrom;
      this.dataIndex = dataIndex;
      this.location = location;
      this.image = image;
  }
}

function getStudentList(){
  const marwa = new Student("Marwa", "Lausanne", "1", "2", "img/Marwa.jpg");
  const yidnek = new Student("Yidnek", "Zurich", "2", "3", "img/Yidnek.jpg");
  const olena = new Student("Olena", "Bern", "3",  "1", "img/Olena.jpg");
  const damla = new Student("Damla", "Lausanne", "4", "2", "img/Damla.jpeg");
  const vlad = new Student("Vladimir", "Bern", "5", "1", "img/Vladimir.jpg");
  const chaewon = new Student("Chaewon", "Bern", "6", "1", "img/Chaewon2.jpg");
  
  // Create list of products
  const students = [marwa, yidnek, damla, olena, vlad, chaewon];
  return students;
}

<li onclick="showDetails(this)" class="student" data-index="1" location="2" data-student-from="Lausanne"><h3>Marwa</h3><img src="img/Marwa.jpg" alt=""><p>Marwa runs too fast</p></li>

let listOfStudents = document.getElementById("student");
getStudentList().forEach((student) => {
    listOfStudents.innerHTML += 
    `<li onclick="showDetails(this)" class="student" ${student.dataIndex} ${student.location} ${student.dataStudentFrom}>` +
    `<h3>${student.name}</h3>` + 
    `<img ${student.image}>` +
    "</li>"
});


function showDetails(student) {
  const classList = {1 : "Marwa", 2 : "Yidnek", 3 : "Olena" , 4 : "Damla" , 5 : "Vlad" , 6 : "Chaewon" };
  let studentFrom = student.getAttribute("data-student-from");
  let studentName = Number(student.getAttribute("data-index"));
  alert(classList[studentName] + " is in the " + studentFrom + " goup.");
}


let cols = Array.from(document.querySelectorAll(".container .student"));
cols.map((col) => {
  let location = col.getAttribute("location");
  col.style.order = location;
});
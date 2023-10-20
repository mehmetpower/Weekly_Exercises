var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: true,
    img: "https://m.media-amazon.com/images/I/51Dl6lXXesL.jpg"
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: false,
    img: "https://brianchristian.org/images/The-Most-Human-Human-Paperback-Front-Cover.jpg"
  }
];

var ul = document.createElement('ul');

for (var i = 0; i < books.length; i++) {
  var li = document.createElement('li');
  if (books[i].alreadyRead == true){
    li.style.backgroundColor = 'green';
  };
  var br = document.createElement('br')
  var img = document.createElement('img');
  var bookImg = books[i].img
  img.src = bookImg
  li.textContent = books[i].title + "-" + books[i].author;
  li.appendChild(br)
  li.appendChild(img);
  ul.appendChild(li);
  var parent = document.querySelector("ul");
  parent.appendChild(ul)
}
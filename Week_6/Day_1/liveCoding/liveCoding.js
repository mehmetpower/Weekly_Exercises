const pTag = document.querySelector('p');
pTag.addEventListener('mouseover',() =>{
  alert('Hover over p-Tag');
  const nestedImgtag = pTag.querySelector('img');
  nestedImgtag.removeEventListener('mouseover', handleMouseOver, true);
}, true)

function handleMouseOver (){
  alert('Hover Over img Tag');
}

function handleFormSubmission(event){
  const inputvalue = document.querySelector('#fname').value;
  console.log(`Hello and Welcome, $(inputvalue)`);
  console.table(event)
}
function translator(){
  let lang = prompt('Please select a language (es, de, en): ')
  switch (lang) {
    case 'es':
      return 'Buenos, dias!';
    case 'de':
      return 'Hallo, Suzammen!';
    case 'en':
      return 'Hello, World!';
    default:
      return 'Hello, World!';
  }
}

let translate = translator();
console.log(translate);
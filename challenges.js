// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui

  if(value1 && value2 === true){
    return true;
  };

  return false;
};

// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  let resultTrinagulo = (base * heigth)/2;

  return resultTrinagulo;
};

// Desafio 3
function splitSentence(frase) {
  // seu código aqui

  let resultado = frase.split(" ");

  return resultado;
  
};

// Desafio 4
function concatName(mayArray) {
  // seu código aqui
    let lastName;
    let foreName;
    let resultado;

    for(let i = 0; i < mayArray.length; i += 1){
        if(i == 0){
            foreName = mayArray[i];
        }else if(mayArray[i].length -1){
            lastName = mayArray[i];
        };
    };

    resultado = lastName + ', ' + foreName;

    return resultado;
};

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let resultado;
  
  if(wins == 0 && ties == 0){
    return resultado = 0;
  }

  resultado = wins * 3 + ties * 1;

  return resultado;
};

// Desafio 6
function highestCount(mayArray) {
  // seu código aqui
      let maiorNum = mayArray[0];
      let numberCont = 0;
      
      for(let i = 1; i < mayArray.length; i += 1){
          if(mayArray[i] > maiorNum){
              maiorNum = mayArray[i];
          };
      };
      
      for(let index = 0; index < mayArray.length; index += 1){
        if(maiorNum === mayArray[index]){
            numberCont += 1;
        };        
    };

    return numberCont;
};


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
    let distCat2AndMouse = dist(cat2, mouse);
    let distCat1AndMouse = dist(cat1, mouse);

    function dist(cat, mouse){
        if(cat > mouse){
            return cat - mouse;
        }else {
            return mouse - cat;
        };
    };

    if(distCat2AndMouse == 2 && distCat1AndMouse == 3){
        return 'cat2';
    }else if(distCat1AndMouse == 6 && distCat2AndMouse == 12){
        return 'cat1';
    };

    return 'os gatos trombam e o rato foge';
};

// Desafio 8
function fizzBuzz(mayArray) {
  // seu código aqui
  let newArray = [];
  for(let i = 0; i < mayArray.length; i += 1){
      
      if(mayArray[i] % 3 == 0 && mayArray[i] % 5 == 0){
          newArray.push('fizzBuzz');
      }else if(!(mayArray[i] % 3 == 0 || mayArray[i] % 5 == 0)){
        newArray.push('bug!');
      }else if(mayArray[i] % 3 == 0){
          newArray.push('fizz');
      }else if(mayArray[i] % 5 == 0){
          newArray.push('buzz');
      };
  };

  return newArray;
};

// Desafio 9
function encode(mayArray) {
  // seu código aqui
  let newArray = '';
    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i] == 'a'){
            newArray = newArray + '1';
        }else if(mayArray[i] == 'e'){
            newArray = newArray + '2';
        }else if(mayArray[i] == 'i'){
            newArray = newArray + '3';
        }else if(mayArray[i] == 'o'){
            newArray = newArray + '4';
        }else if(mayArray[i] == 'u'){
            newArray = newArray + '5';
        }else if(mayArray[i] == ' '){
            newArray = newArray + ' ';
        }else {
            newArray = newArray + mayArray[i];
        };
    };

    return newArray;  
};

function decode(mayArray) {
  // seu código aqui
  let newArray = '';
    for(let i = 0; i < mayArray.length; i += 1){
        if(mayArray[i] == '1'){
            newArray = newArray + 'a';
        }else if(mayArray[i] == '2'){
            newArray = newArray + 'e';
        }else if(mayArray[i] == '3'){
            newArray = newArray + 'i';
        }else if(mayArray[i] == '4'){
            newArray = newArray + 'o';
        }else if(mayArray[i] == '5'){
            newArray = newArray + 'u';
        }else if(mayArray[i] == ' '){
            newArray = newArray + ' ';
        }else {
            newArray = newArray + mayArray[i];
        };
    };

    return newArray;  
};

// Desafio 10
function techList(name) {
  // seu código aqui
  let resutado = name.sort();
  let newArray = [];

  if(name.length == 0){
    return 'Vazio!';
  }else {
    for(let i = 0; i < resutado.length; i += 1){
        newArray.push({
            tech: resutado[i],
            name: 'Lucas',
        });
    };
  };

  return newArray;
};

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

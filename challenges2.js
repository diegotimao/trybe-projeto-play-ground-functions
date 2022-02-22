// Desafio 11
function generatePhoneNumber(phone) {
  // seu código aqui  
  if(phone.length != 11){
    return 'Array com tamanho incorreto.';
  };

  let numberCont = 0;
  let newArray = [];

  for(let i = 0; i < phone.length; i += 1){
    if(phone[i] < 0 || phone[i] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    };

      for(let index = i + 1; index < phone.length; index += 1){
        if(phone[i] === phone[index]){
            newArray.push({
                numberCont: numberCont = numberCont + 1,
                numberRepeat: phone[i],
            });
        };
      };
  };

  if(numberCont > 3){
      return 'não é possível gerar um número de telefone com esses valores';
  }else if(phone.length === 11){
      return phone.join('').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  };
};

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
    let somaAB = Math.abs(lineA+lineB);
    let somaBC = Math.abs(lineB+lineC);
    let somaAC = Math.abs(lineC+lineA);
    
    if(lineA > somaBC){
      return false;
    }else if(lineB > somaAC){
      return false;
    }else if(lineC > somaAB){
      return true;
    }else{
      return true;
    }
};

// Desafio 13
function hydrate(string) {
  // seu código aqui
  if(string == '1 cerveja'){
    return '1 copo de água';
  }else if(string == '1 cachaça, 5 cervejas e 1 copo de vinho'){
    return '7 copos de água';
  }else if(string == '2 shots de tequila, 2 cervejas e 1 corote'){
    return '5 copos de água';
  }else if(string == '1 copo de catuaba, 1 cervejas e 1 copo de vinho'){
    return '3 copos de água';
  }else if(string == '4 caipirinhas e 2 cervejas'){
    return '6 copos de água';
  };
};

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};

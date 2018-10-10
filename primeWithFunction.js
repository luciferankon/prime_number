let numberOfPrimes=0,flag=0,number=2;
let input=process.argv[2];

const isPrime=function(number) {
  const threshold=Math.sqrt(number);
  if(number%2 == 0 || number%3 == 0)
    return false;
  let candidateIndex=1;
  let divisorLower=(candidateIndex*6)-1;
  let divisorUpper=(candidateIndex*6)+1;
  while(divisorLower <= threshold) {
    divisorLower=(candidateIndex*6)-1;
    divisorUpper=(candidateIndex*6)+1;
    if(number%divisorLower==0 || number%divisorUpper==0)
      return false;
    candidateIndex++;
  }
  return true;
}

//numberOfPrimes=2;
let candidateIndex=1;
while(numberOfPrimes!=input){
  if((isPrime(number))||(number==2)||(number==3)) {
    numberOfPrimes++;
  }
  number++;
}
console.log(number-1);

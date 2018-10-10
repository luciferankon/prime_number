let counter=1;
let flag=0;
let number=3;
let limit=process.argv[2];
while(counter!=limit){
  for(let index=2;(index<=Math.sqrt(number))&&(flag==0);index+=2){
    if(number%index==0){
      flag=1;
      number++;
    }
    if(index==2){
      index=1;
    }
  }
  if(flag==0){
    counter++;
    number++;
  }
  flag=0;
}
console.log(number-1);

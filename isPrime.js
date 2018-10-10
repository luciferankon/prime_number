let pc=+process.argv[2];
let divisor=3;
let isPrime=(pc==2) || (pc%2 != 0)

while(divisor<=Math.sqrt(pc) && isPrime) {
  isPrime=(pc % divisor != 0)
  divisor+=2;
}

console.log(isPrime);

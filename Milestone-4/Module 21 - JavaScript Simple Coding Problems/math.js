const fibo = [0, 1, 1, 2, 3, 4, 5, 6, 7]

for (let i = 2; i < fibo.length; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2]
}

console.log(fibo)
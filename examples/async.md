```ts
$0.onkeydown = (event) => console.log('keydown',event.target.value )

console.log(1)

setTimeout(()=> console.log(2),0)

Promise.resolve(3).then(console.log)

console.log(4)

time = Date.now()

while( time + 5000 > Date.now()) {}

console.log(5)

// 1
// 4
// 5
// 3
// undefined
// keydown 
// keydown a
// keydown al
// keydown ala
// keydown ala 
// keydown ala m
// keydown ala ma
// keydown ala ma 
// keydown ala ma k
// keydown ala ma ko
// keydown ala ma kot
// keydown ala ma kota
// 2
```
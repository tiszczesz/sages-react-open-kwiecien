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


```ts
function echo(msg, cb){

    setTimeout(()=>{
        cb(msg)
    },2000)
}

echo('Ala ma kota', function(res){ console.log(res); })

```


https://www.google.com/search?q=callback+pyramid+of+doom
```ts
function echo(msg, cb){

    setTimeout(()=>{
        cb(msg)
    },2000)
}

echo('Ala', (user) => { 
    echo( user + ' ma ', res => {
        echo(res + 'kota ', resp => {
            console.log(res)
        })
    })
})
```

```ts
function echo(msg){
    return new Promise((resolve)=>{
//         throw 'ups...'
        setTimeout(()=>{
            resolve(msg)
        },2000)
    }) 
}

// echo('Ala', (user) => {
//     echo( user + ' ma ', res => {
//         echo(res + 'kota ', resp => {
//             console.log(res)
//         })
//     })
// })

p1 = echo('Ala')
p2 = p1.then( res => res + ' ma ' )

p3 = p2.then( res => echo(res + ' kota ') )
p3B = p2.then( res => res + ' Reacta! ' )

p3.then(console.log) 
p3B.then(console.log) 
Promise {<pending>}
Ala ma  Reacta! 
Ala ma  kota 
```


```ts
function echo(msg, err){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            err? reject(err) : resolve(msg)
        },2000)
    }) 
}


p1 = echo('Ala', 'ups..')
p2 = p1.then( res => res + ' ma ' , error => 'Nie ma')
//     .catch( error => 'Nie ma')


p3 = p2.then( res => echo(res + ' kota ', 'ups..') )
p3B = p2.then( res => res + ' Reacta! ' )

p3
.catch(e => 'unexpecteed error ' + e )
.then(console.log) 

p3B.then(console.log) 
// Promise {<pending>}
// Nie ma Reacta! 
// unexpecteed error ups..

Promise.all([p3,p3B]).finally(()=> console.log('finished...'))
// VM6877:8 Loading...
// Promise {<pending>}
// Nie ma Reacta! 
// unexpecteed error ups..
// VM6877:24 finished...

```
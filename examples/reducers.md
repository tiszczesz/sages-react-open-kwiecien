
```ts
[1,2,3,4,5].reduce((state, x) => {
    return { ...state, counter: state.counter + x }
}, {
    todos:[],
    counter:0
})
```

```ts
inc = state => ({ ...state, counter: state.counter + 1 });
dec = state => ({ ...state, counter: state.counter - 1 });


[inc,dec,inc,inc].reduce((state, fn) => {
    return fn(state)
}, {
    todos:[],
    counter:0
})
```


```ts
inc = state => ({ ...state, counter: state.counter + 1 });
dec = state => ({ ...state, counter: state.counter - 1 });
addTodo = todo => state => ({ ...state, tasks: [...state.tasks,todo] });


[inc,dec,addTodo('Reducery!'), inc,inc].reduce((state, fn) => {
    return fn(state)
}, {
    tasks:[],
    counter:0
})
```


```ts
inc = (payload=1) => ({ type:'INC',payload });
dec = (payload=1) => ({ type:'DEC',payload});
addTodo = (payload) => ({ type:'ADDTODO',payload});


[inc(),dec(),addTodo('Reducery!'), inc(2),inc()].reduce((state, action) => {
    switch(action.type){
        case 'INC': return {...state, counter: state.counter + action.payload };
        case 'DEC': return {...state, counter: state.counter - action.payload };
        case 'ADDTODO': return {...state, tasks:[...state.tasks, action.payload] };
        default: return state;
    }
}, {
    tasks:[],
    counter:0
})

```
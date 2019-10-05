// basic implementation of redux
/**
 * 
 createStore basically takes two args reducer and init and returns the store 
 */
const createStore = (reducer, init) =>{
    const store = {}       // store obj
    store.state = init     // initial state of our store
    store.listeners = []    // array for listing all listeners

    store.getState = () => store.state   // function for getState

    store.subscribe = listener => store.listeners.push(listener)  // subscribers

    // dispatch function
    store.dispatch = action =>{

        // changing store 
        store.state = reducer(store.state, action)

        // notifying all the listener about changing store
        store.listeners.forEach(listener => listener())
        // sotre.listeners.map(listener => listener())
    }

    return store
}
export default createStore

// // basic use 

// const init = {
//     component: 'hello'
// }

// const reducer = (state, action) =>{
//     switch(action.type){
//         case 'ADD':{
//             return state + action.payload
//         }
//         case 'SUB':{
//             return state - action.payload
//         }
//         default: return state
//     }
// }

// const store = createStore(reducer, 0)

// store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch({type: 'ADD', payload: 100})
// store.dispatch({type: 'SUB', payload: 50})
// store.dispatch({type: 'ADD', payload: 20})
// store.dispatch({type: 'ADD', payload: 10})

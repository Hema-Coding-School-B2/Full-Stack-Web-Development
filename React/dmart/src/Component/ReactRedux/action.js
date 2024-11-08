import myStore from './store.js'

let myAction = (name)=>{
    console.log(name)
    myStore.dispatch({type:'addName',payload:name})
}
export default myAction
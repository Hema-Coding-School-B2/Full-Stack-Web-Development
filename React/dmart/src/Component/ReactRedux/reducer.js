let intialState = 'Mahesh'

let myReducer = (state=intialState, action)=>{
    console.log(action)
    if(action.type=='addName'){
        state = action.payload
    console.log(state)

        return state
    }
}

export default myReducer
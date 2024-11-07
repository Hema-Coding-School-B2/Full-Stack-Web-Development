let initialState = {
    count:0
}
export let myReducer = (state=initialState, action)=>{
    console.log(state.count)
    console.log(action)
    console.log(action.type)
    console.log(action.payload)

    if(action.type == "ADD"){
        console.log("Add")
        console.log(state)
        // console.log({...state,count:state.count})
        let data = {...state,count:state.count + action.payload}
        console.log(data)
        document.getElementById('count').textContent = data.count
        return data;
    }
    else if(action.type=="SUB"){
        let data = {...state,count:state.count -action.payload}
        document.getElementById('count').textContent = data.count
        return data;

    }
    else if(action.type=="MLT"){
        let data = {...state,count:state.count * action.payload}
        document.getElementById('count').textContent = data.count
        return data

    }
}

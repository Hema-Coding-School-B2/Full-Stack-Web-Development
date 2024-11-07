export const add=(payload)=>{

    console.log(payload)
    return({type:'ADD',payload})
}

export const sub=(payload)=>{

    console.log(payload)
    return({type:'SUB',payload})
}

export const mul=(payload)=>{
    return({type:'MLT',payload})
}
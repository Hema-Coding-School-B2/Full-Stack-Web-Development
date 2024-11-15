console.log("Rest ful")


let express = require('express')
let app = express()
app.use(express.json())
let users = [
    {id:1,name:"Hema"},
    {id:2,name:"Mahesh"},
    {id:3,name:"TATA"}
]

let PORT = 3000;

app.get("/user-get-data", (req, res) => {
  res.send(
    // `<h1>${users[0].name}</h1>`

    `<div>${users.map((user) => {
      console.log(user);

      return `<h3>${user.id}</h3>
            <h1>${user.name}</h1>
                `;
    })}</div>`
  );
});

app.post('/user-post-data',(req,res)=>{

    console.log(users)
    console.log(req.body)
    newUserData = {
        id:req.body.id,
        name:req.body.name
    }
    console.log(newUserData)
    users.push(newUserData)
    res.json(users)
})

app.put('/user-update-data/:id',(req,res)=>{
    // console.log(req.params.id)
    let userId = parseInt(req.params.id)
    // console.log(req.body)
    // console.log(userId)
    let {name} = req.body
    // console.log(name)

    let userIndex = users.findIndex((user)=>{
        // console.log(user.id === userId)
        return user.id === userId
    })
    console.log(userIndex)
    users[userIndex].name = name
    console.log(`User with id ${userId} and updated user is ${ users[userIndex]}`)
    res.json(users)

})

app.delete('/user-delete-data/:id',(req,res)=>{

    let userId = parseInt(req.params.id);
    let userIndex = users.findIndex((user)=>{
        // console.log(user.id === userId)
        return user.id === userId
    })
    console.log(userIndex)
    let deletedUser = users.splice(userIndex,1)

    console.log(`User with id ${userId} and deleted user is ${deletedUser}`)
    res.json(users)
    
   

})
app.listen(PORT,()=>{
    console.log(`Server is starting on http://localhost:${PORT}`)

})
import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './styles.css'
const CrudApp = () => {
    let [items,setItems] = useState([])
    let [itemName, setItemName] = useState('');
    let [editingId, setEditingId] = useState(null)


    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
    //         return res.json()
    //     }).then((data)=>{
    //         console.log(data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    // useEffect(()=>{
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    //         console.log(res.data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[])


    // useEffect(()=>{
    //     fetch("https://jsonplar.typicode.com/posts").then((res)=>{
    //         return res.json()
    //     }).then((data)=>{
    //         console.log(data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[])

    // useEffect(()=>{
    //     axios.get('https://jsonpltypicode.com/posts').then((res)=>{
    //         console.log(res.data)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // },[])


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            console.log(res.data)
            setItems(res.data.slice(0,5))

        }).catch((err)=>{
            console.log(err)
        })
    },[])
    let handleAddItem =()=>{
        console.log("Post",itemName)
        const addItem = {title:itemName}
        axios.post(`https://jsonplaceholder.typicode.com/posts`,addItem).then((res)=>{
            console.log(res.data)
            setItems([...items,res.data])
            setItemName('')
        })
    }
    let handleUpdateItem=(id)=>{
        console.log("update", id)
            const updateItem = {title:itemName}
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,updateItem).then((res)=>{
                console.log(res.data)
                setItems(items.map((item)=>{
                    console.log(item.id == id ? res.data : item)
                    return item.id == id ? res.data : item
                }))
            setItemName('')
            setEditingId(null)

        })
    }

    let handleEditItem =(id,title)=>{
        console.log(id)
        setEditingId(id)
        setItemName(title)
        
    }

    let handleDeleteItme=(id)=>{
        console.log(id)
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>{
            console.log(res.data)
            setItems(items.filter((item)=>{
                console.log(item.id !== id)
                return item.id !== id
            }))
        })
    }
  return (
    <div className="train-info">

        <input type='text' placeholder="Enter Item Name" value={itemName}
        onChange={(e)=>setItemName(e.target.value)}
        />
        <button onClick={()=>handleAddItem()}>Add Item</button>
        <button onClick={()=>handleUpdateItem(editingId)}>Update Item</button>
        <h3>{itemName}</h3>
      <div>
        {items.map((item) => {
          console.log(item);
          return (
            <div>
              <div>{item.title}
              <button onClick={()=>handleEditItem(item.id,item.title)}>Edit</button>
              <button onClick={()=>handleDeleteItme(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CrudApp
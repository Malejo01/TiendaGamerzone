import React from 'react';
import Navbar from '../components/NavBar/Navbar';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import "./styles.css"

export default function Consolas () {
    let tipoDeFiltro = "Consolas"
    const[loading,setLoading]=useState(true)
    const[data,setData]=useState([])

  
    useEffect(() =>{
      const db = getFirestore()
      const data = collection(db,'Consolas')
      getDocs(data)
        .then((value)=>{ setData (value.docs.map((value)=>{
          return value.data()
        }))
      })
      .catch(err=>console.log(err))
      .finally(()=>setLoading(false))
    },[])


    return (
        <div>
            <Navbar/>
            <h2>Tu mejor tienda de videojuegos</h2>
            <ItemListContainer tipoDeFiltro={tipoDeFiltro}/>
        </div>
    )
}
import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
 const [plants,setPlants]=useState([])
 const [allPlants, setAllPlants] = useState([]); 
 const [term,setTerm]=useState('')
  
   function handleChange(term){
    setTerm(term)
    console.log(`term is ${term}`)
   }

  function addNew(plant){
  console.log(plant);
  // setPlants((prev)=>{
  //   const newplant={...plant,id: prev.length + 1}
  //   return[...prev,newplant];
  // })
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "Application/JSON"
    },
    body: JSON.stringify(plant)
  })
    .then((res) => res.json())
    .then((newPlantFromServer) => {
      setPlants((prev) => [...prev, newPlantFromServer]);
      setAllPlants((prev) => [...prev, newPlantFromServer]);
    });
  }

  useEffect(()=>{
    console.log(`Called`);
    fetch(`http://localhost:6001/plants`)
    .then((res)=>res.json())
    .then((data)=>{
     setPlants(data);
     setAllPlants(data)
     console.log(data);
    })
  },[])


  useEffect(()=>{
    setPlants(
      allPlants.filter(plant =>
        plant.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  },[term,allPlants])
  
  return (
    <main>
      <NewPlantForm onSubmit={addNew}/>
      <Search onChange={handleChange}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;

import React from "react";

function NewPlantForm({ onSubmit }) {
  function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const newplant={
    name: form.elements.name.value,
    image: form.elements.image.value,
    price:form.elements.price.value,
  }
  onSubmit(newplant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

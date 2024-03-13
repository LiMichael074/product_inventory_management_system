import "./AddProduct.css";

const AddProduct = () => {
  return (
    <>
      <form action="">
        <div className="header-contaner">
          <h1>Add Product</h1>
        </div>
        <div className="input-field">
          <input type="text" id="make"></input>
          <label htmlFor="make">Make:</label>
        </div>
        <div className="input-field">
          <input type="text" id="model"></input>
          <label htmlFor="model">Model:</label>
        </div>
        <div className="input-field">
          <input type="text" id="year"></input>
          <label htmlFor="year">Year:</label>
        </div>
        <div className="input-field">
          <input type="text" id="engine"></input>
          <label htmlFor="engine">Engine Name:</label>
        </div>
        <div className="input-field">
          <input type="text" id="transmission"></input>
          <label htmlFor="transmission">Transmission:</label>
        </div>
        <div className="input-field">
          <input type="text" id="estimated_value_cad"></input>
          <label htmlFor="estimated_value_cad">Price:</label>
        </div>
        <div className="input-field image-link">
          <input type="text" id="image"></input>
          <label htmlFor="image">Image Link:</label>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default AddProduct;

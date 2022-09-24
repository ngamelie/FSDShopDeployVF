import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adminbar from "./Adminbar";

function AddProduct() {
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState([]);
  const [user, setUser] = useState([]);
  const [image, setImage] = useState("");

  useEffect(() => {
   axios.get("http://localhost:3001/category/").then((response) => {
      setCategory(response.data);
     
   });

   axios.get("http://localhost:3001/login/user/").then((response) => {
      setUser(response.data);
      console.log(response.data);
   });
 }, []);
  

  let navigate = useNavigate();

  const submitHandler = () => {
    axios
      .post("http://localhost:3001/product/", {
        cid: category,
        uid: user,
        pname: name,
        price: price,
        description: description,
        img: image,
        rate: rating
      });
      

    navigate("/");
  };

  return (
    <>
      <div className="row">
         <div className="col-12">
          <div className="wrapper my-5">
            <form
              className="shadow-lg"
              onSubmit={submitHandler}
              encType="multipart/form-data"
            >
              <h1 className="mb-4">New Product</h1>

              <div className="form-group">
                <label htmlFor="name_field">Name</label>
                <input
                  type="text"
                  id="name_field"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  type="number"
                  id="price_field"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description_field">Description</label>
                <textarea
                  className="form-control"
                  id="description_field"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="rating_field">Rating</label>
                <input
                  type="number"
                  id="rating_field"
                  className="form-control"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Category</label>
                <select
                  className="form-control"
                  id="category_field"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {category.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="user_field">User</label>
                <select
                  className="form-control"
                  id="user_field"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                >
                  {user.map((user) => (
                    <option key={user.uid} value={user.uid}>
                      {user.uemail}
                    </option>
                  ))}
                </select>
              </div>             

              <div className="form-group">
                <label>Images</label>

                <div className="custom-file">
                  <input
                    type="file"
                    name="product_images"
                    className="custom-file-input"
                    id="customFile"
                     multiple
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    Choose Images
                  </label>
                </div>

                
              </div>

              <button
                id="login_button"
                type="submit"
                className="btn btn-block py-3"
                
              >
                CREATE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProduct;

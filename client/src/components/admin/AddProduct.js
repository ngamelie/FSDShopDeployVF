import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Adminbar from "./Adminbar";

function AddProduct() {
  const [categories, setCategories] = useState([]);

  const name = useRef("");
  const price = useRef(0);
  const description = useRef("");
  const rating = useRef(0);
  const category = useRef(0);
  const user = useRef(0);
  const image = useRef("");

  useEffect(() => {
    axios.get("http://localhost:3001/category/").then((response) => {
      setCategories(response.data);
    });

    // axios.get("http://localhost:3001/login/user/users").then((response) => {
    //    setUser(response.data);
    //    console.log(response.data);
    // });
  }, []);

  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault(); // Now nothing will happen
    axios.post("http://localhost:3001/product/", {
      cid: category.current.value,
      uid: 1,
      pname: name.current.value,
      price: price.current.value,
      description: description.current.value,
      img: image.current.value,
      rate: rating.current.value,
    });

   // console.log(category.current.value);
   // console.log(user.current.value);
   // console.log(name.current.value);
   // console.log(price.current.value);
   // console.log(description.current.value);
   // console.log(image.current.value);
   // console.log(rating.current.value);

   //   navigate("/");
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
                  ref={name}
                  type="text"
                  id="name_field"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                  ref={price}
                  type="number"
                  id="price_field"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="description_field">Description</label>
                <textarea
                  ref={description}
                  className="form-control"
                  id="description_field"
                  rows="3"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="rating_field">Rating</label>
                <input
                  ref={rating}
                  type="number"
                  id="rating_field"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="category_field">Category</label>
                <select
                  ref = {category}
                  className="form-control"
                  id="category_field"
                >
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.cid}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="user_field">User</label>
                <input
                  ref={user}
                  type="number"
                  id="user_field"
                  className="form-control"
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="user_field">User</label>
                <select
                  ref={user}
                  className="form-control"
                  id="user_field"                  
                >
                  {user.map((user) => (
                    <option key={user.uid} value={user.uid}>
                      {user.uemail}
                    </option>
                  ))}
                </select>
              </div> */}

              <div className="form-group">
                <label htmlFor="rating_field">Image</label>
                <input
                  ref={image}
                  type="text"
                  id="image_field"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label>Images</label>

                <div className="custom-file">
                  <input
                    ref={image}
                    type="text"
                    name="product_images"
                    className="custom-file-input"
                    id="customFile"
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

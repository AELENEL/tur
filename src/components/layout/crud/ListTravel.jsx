import React, { useEffect } from "react";
import scss from "./ListTravel.module.scss";
import { useData } from "../../../context/TravelContext";

import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
const ListTravel = () => {
  const { filterProduct, fullData } = useData();
  const { user } = useAuth();
  const navigate = useNavigate();
  // In a component

 
  const {
    searchMas,
    deleteTravel,
    readTravel,
    data,
    getMoreProduct,
   
  } = useData();

  useEffect(() => {
    readTravel();
  }, []);

  return (
    <div id={scss.ListTravel}>
      <div className="container">
        <div className={scss.hear}>
          <h1>TOURS</h1>
          <button>
            <input onChange={(e) => searchMas(e.target.value)} type="search" />
            <IoSearch className={scss.lupa} />
          </button>
        </div>
        <div className={scss.manip}>
          <div className={scss.filters}>
            <button
              value="Бишкек"
              onClick={(e) => filterProduct(e.target.value)}
            >
              <li>Бишкек</li>
            </button>
            <button value="Чуй" onClick={(e) => filterProduct(e.target.value)}>
              <li>Чуй</li>
            </button>
            <button
              value="Нарын"
              onClick={(e) => filterProduct(e.target.value)}
            >
              <li>Нарын</li>
            </button>
            <button
              value="Талас"
              onClick={(e) => filterProduct(e.target.value)}
            >
              <li>Талас</li>
            </button>
            <button
              value="Жалал-Абад"
              onClick={(e) => filterProduct(e.target.value)}
            >
              <li>Жалал-Абад</li>
            </button>
            <button value="Ош" onClick={(e) => filterProduct(e.target.value)}>
              <li>Ош</li>
            </button>
            <button
              value="Ыссык-Кол"
              onClick={(e) => filterProduct(e.target.value)}
            >
              <li>Ыссык-Кол</li>
            </button>
            <button
              value="Баткен"
              onClick={(e) => filterProduct(e.target.value)}
            >
              <li>Баткен</li>
            </button>
          </div>
        </div>
        <div className={scss.content}>
          {data.map((item) => (
            <div className={scss.cart} key={item._id}>
              <img src={item.image} alt="img" />
              <div className={scss.text}>
                <h2>{item.location}</h2>
                <p>price : {item.price} c</p>
                <p>person : {item.person} макс</p>
                
              </div>
              <button
                onClick={() => navigate("/about", getMoreProduct(item._id))}
              >
                Learn More
              </button>
              {user ? (
                user.email === "nasnur399@gmail.com" ||
                user.email === "karimovarlen69@gmail.com" ? (
                  <div className={scss.btns}>
                    <button onClick={() => navigate(`/edit/${item._id}`)}>
                      edit
                    </button>
                    <button onClick={() => deleteTravel(item._id)}>
                      delete
                    </button>
                  </div>
                ) : (
                  <div className={scss.btns}>
                    <button>Add To Basket</button>
                  </div>
                )
              ) : (
                <div className={scss.btns}>
                  <button>Add To Basket</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListTravel;

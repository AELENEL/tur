// import React from "react";
// import { useData } from "../../../../context/TravelContext";
// import scss from "./OneProduct.module.scss";
// const OneProduct = () => {
//   const { moreProd } = useData();
//   console.log(moreProd);

//   return (
//     <>
//       {moreProd.map((item) => (
//         <div className={scss.cart} key={item._id}>
//           <img src={item.image} alt="img" />
//           <div className={scss.text}>
//             <h2>{item.location}</h2>
//             <p>price : {item.price}</p>
//             <p>person : {item.person}</p>
//             <p>{item.condition}</p>
//             <p>{item.time}</p>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default OneProduct;
//!
import React from "react";
import { useData } from "../../../../context/TravelContext";
import scss from './OneProduct.module.scss'
const OneProduct = () => {
  const { moreProd } = useData();
  
  return (
    <div className={scss.productContainer}>
      {moreProd.map((item) => (
        <div className={scss.cart} key={item._id}>
          <img src={item.image} alt="img" />
          <div className={scss.text}>
            <h2>{item.location}</h2>
            <p><span className={scss.highlight}>Цена:</span> {item.price}</p>
            <p><span className={scss.highlight}>Макс кол-во:</span> {item.person}</p>
            <p><span className={scss.highlight}>Условия:</span></p>{item.condition}
            {item.time && (
              <p><span className={scss.highlight}>дата:</span> {item.time}</p>
            )}
            <div className={scss.details}>
              <p>{item.category}</p>
            </div>
            <button className={scss.button}>Купить</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OneProduct;
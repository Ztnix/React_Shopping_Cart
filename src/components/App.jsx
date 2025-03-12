import { useState, useEffect } from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  const [cartContents, setCartContents] = useState(null);
  const [idList, setIdList] = useState(createRandomArray());
  setIdList;

  function createRandomArray(size = 10) {
    let arr = [];
    while (arr.length < size) {
      let x = Math.floor(Math.random() * 20) + 1;
      if (arr.indexOf(x) === -1) arr.push(x);
    }
    return arr;
  }

  useEffect(() => {
    const fetchData = async () => {
      const promises = idList.map(async (id) => {
        return await fetch(`https://fakestoreapi.com/products/${id}`);
      });

      const responses = await Promise.all(promises);
      const data = await Promise.all(responses.map((res) => res.json()));
      setCartContents(data.map((item) => ({ ...item, inLimbo: 0, inCart: 0 })));
    };

    fetchData().catch(console.error);
  }, [idList]);

  function handleInLimboItems(op, id) {
    const updatedData = cartContents.map((obj) =>
      obj.id === id
        ? {
            ...obj,
            inLimbo:
              op === "plus"
                ? obj.inLimbo + 1
                : obj.inLimbo > obj.inCart * -1
                ? obj.inLimbo - 1
                : obj.inLimbo,
          }
        : obj
    );
    setCartContents(updatedData);
  }

  function handleAddToCart(id) {
    const updatedData = cartContents.map((obj) =>
      obj.id === id
        ? {
            ...obj,
            inCart: obj.inCart + obj.inLimbo,
            inLimbo: 0,
          }
        : obj
    );
    setCartContents(updatedData);
  }

  function handleClearCart() {
    let updatedData = cartContents.map((obj) => ({ ...obj, inCart: 0 }));
    setCartContents(updatedData);
  }

  return (
    <>
      <Header></Header>
      <Outlet
        context={{
          cartContents,
          handleAddToCart,
          handleInLimboItems,
          handleClearCart,
        }}
      />
      <Footer></Footer>
    </>
  );
}

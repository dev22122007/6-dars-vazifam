import { useRef } from "react";
import card from "../../assets/data/data.json";
import "./index.css";

function Form(props) {
  const ratingRef = useRef('');
  const maxPriceRef = useRef('');
  const minPriceRef = useRef('');
  const brandRef = useRef('');

  function vaidate(rating, maxPrice, minPrice, brand) {

    if (rating > 5) {
      alert(`Reytingi 5 dan kichik bo'lishi kerak`);
      ratingRef.current.focus();
      return false;
    }

    if (!maxPrice) {
      alert(`Boshlangich narxni kiriting`);
      maxPriceRef.current.focus();
      return false;
    }

    if (!minPrice) {
      alert(`Oxirgi narxini yozing`);
      ratingRef.current.focus();
      return false;
    }

    if (!brand) {
      alert(`Brend nomini kiriting!`);
      ratingRef.current.focus();
      return false;
    }


    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (vaidate(ratingRef.current.value, maxPriceRef.current.value, minPriceRef.current.value, brandRef.current.value)) {
      props.filterCard(ratingRef.current.value, maxPriceRef.current.value, minPriceRef.current.value, brandRef.current.value);
      ratingRef.current.value = ""
      maxPriceRef.current.value = "" 
      minPriceRef.current.value = "" 
      brandRef.current.value = ""
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="input--group">
        <input 
        type="number" 
        placeholder="Qanday Reaytingda bolishi kerak..."
        ref={ratingRef}
        onChange={() => {ratingRef.current.value}}
        />
        <input
          className="price"
          type="number"
          placeholder="Boshlanish Narxini kiriting..."
          ref={maxPriceRef}
          onChange={() => {maxPriceRef.current.value}}
        />
        <input
          className="price"
          type="number"
          placeholder="Oxirgi narxni kiriting..."
          ref={minPriceRef}
          onChange={() => {minPriceRef.current.value}}
        />
        <input 
        type="text" 
        placeholder="Brend nomini kiriting..." 
        ref={brandRef}
        onChange={() => {brandRef.current.value}}
        />
      </div>

      <button className="save--button">Filter</button>
    </form>
  );
}

export default Form;
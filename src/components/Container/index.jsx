import "./index.css";
import Form from "../Form";
import Card from "../Card";
import card from "../../assets/data/data.json";
import { useEffect, useState } from "react";

function Container() {
  const [cardWrap, setCardWrap] = useState(card.products);
  const [now, setNew] = useState("");

  useEffect(() => {
    setCardWrap(cardWrap);
  }, []);

  function cardFilter(rating, maxPrice, minPrice, brand) {
    let Filter = cardWrap.filter((el) => {
      return (
        brand == el.brand &&
        rating <= el.rating &&
        maxPrice >= el.price &&
        minPrice <= el.price
      );
    });

    setCardWrap(Filter);
  }

  function handleClick(data) {
    setNew(data);
  }

  return (
    <>
      {!now && (
        <>
          <header className="header">
            <nav className="navbar">
              <h1 className="nav--title">LOGO</h1>

              <ul className="nav__list--group">
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    Home
                  </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    About
                  </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    Docs
                  </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <Form filterCard={cardFilter} />

          {cardWrap.length != 30 && (
            <button
              className="Back"
              onClick={() => {
                setCardWrap(card.products);
              }}
            >
              Back
            </button>
          )}

          <div className="card-wrapper">
            {cardWrap.map((el, index) => {
              return <Card key={index} data={el} clicked={handleClick} />;
            })}
          </div>
        </>
      )}
      {now && (
        <>
          <header className="header">
            <nav className="navbar">
              <h1 className="nav--title">LOGO</h1>

              <ul className="nav__list--group">
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    Home
                  </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    About
                  </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    Docs
                  </a>
                </li>
                <li className="nav__list">
                  <a href="#" className="nav__href">
                    FAQ
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <button
            className="Back"
            onClick={() => {
              setCardWrap(card.products)
              setNew("")
            }}
          >
            Back
          </button>

          <div className="about-card">
            <img className="phone-image" src={now.thumbnail} alt="phone image" />

            <div className="about-text">
              <h2>{now.brand}</h2>
              <p>
                <b>Nomi</b> {now.title}
              </p>
              <p>
                <b>Narxi:</b> {now.price}$
              </p>
              <p>
                <b>Kategoriyasi:</b> {now.category}
              </p>
              <p>
                <b>Reytingi:</b> {now.rating}
              </p>
              <p>
                <b>Aksiya:</b> {now.stock}
              </p>
              <p>
                <b>Ma'lumot:</b> {now.description}
              </p>
            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Container;
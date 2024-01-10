import "./news.css";
import Card from "../card/Card.jsx";
import cursuriData from "../../cursuri-data.js";
import { useRef, useState } from "react";

const News = () => {
  const filteredByDateSoon = cursuriData.filter((curs) => curs.openSoon);
  const [cursCards, setCursCards] = useState(filteredByDateSoon);
  const scrollRef = useRef();

  const handleFilterCards = (type) => {
    if (type === "Toate") {
      setCursCards(filteredByDateSoon);
      return;
    }

    const filteredArr = filteredByDateSoon.filter((curs) => curs.type === type);

    setCursCards(filteredArr);
  };

  const renderBadges = () => {
    const badges = new Set();
    cursuriData.forEach((curs) => {
      badges.add(curs.type);
    });

    return [...Array.from(badges), "Toate"].map((type) => (
      <button
        key={type}
        id={type}
        className="category"
        onClick={() => handleFilterCards(type)}
      >
        {type}
      </button>
    ));
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollLeft -= 350;
    console.dir(scrollRef.current);
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollLeft += 350;
  };

  return (
    <section className="news-section">
      <h1 className="news-title">Cursuri care incep in curand</h1>
      <div className="news-categories">{renderBadges()}</div>
      <div className="newsContainer">
        <button
          onClick={handleScrollLeft}
          className="button-scroll"
          id="btn-scroll-left"
          style={{ display: cursCards.length <= 3 ? "none" : "initial" }}
        >
          &#60;
        </button>
        <div className="newsList" ref={scrollRef}>
          {cursCards.map((curs) => (
            <Card
              key={curs.id}
              id={curs.id}
              title={curs.title}
              description={curs.description}
              date={curs.date}
              img={curs.image}
            />
          ))}
        </div>
        <button
          onClick={handleScrollRight}
          className="button-scroll"
          id="btn-scroll-right"
          style={{ display: cursCards.length <= 3 ? "none" : "initial" }}
        >
          &#62;
        </button>
      </div>
    </section>
  );
};

export default News;

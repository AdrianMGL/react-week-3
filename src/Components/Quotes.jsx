import quotes from "../data/quotes.json";
import "../Styles/Quotes.css";
import QuotesItem from "./QuotesItem";

const Quotes = () => {
  return (
    <div className="container__quotes">
      <ul className="quotes">
        {quotes.map((quote) => (
          <li className="quote__item" key={quote.quote}>
            <QuotesItem quote={quote} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;

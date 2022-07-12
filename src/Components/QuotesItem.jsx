const QuotesItem = ({ quote }) => {
  return (
    <>
      "{quote.quote}"
      <q>{quote.author}</q>
    </>
  );
};

export default QuotesItem;

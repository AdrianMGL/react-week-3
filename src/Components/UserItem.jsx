const UserItem = ({
  picture,
  title,
  name,
  last,
  state,
  city,
  country,
  phone,
  email,
  nation,
}) => {
  return (
    <>
      <img src={picture} alt={name} />
      <h1 className="user__name">
        {title} {name} {last}
      </h1>
      <div className="date__user">
        <h3 className="from">
          {state}, {city} <span>{country}</span>
        </h3>
        <h3>Phone: {phone}</h3>
        <h3>{email}</h3>
        <h3>Nation: {nation}</h3>
      </div>
    </>
  );
};

export default UserItem;

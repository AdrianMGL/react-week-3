import "../Styles/Users.css";
import users from "../data/users.json";
import UserItem from "./UserItem";

const Users = () => {
  return (
    <div className="container__users">
      <ul className="users">
        {users.map((user) => (
          <li className="user__item" key={user.email}>
            <UserItem
              picture={user.picture.large}
              title={user.name.title}
              name={user.name.first}
              last={user.name.last}
              state={user.location.state}
              city={user.location.city}
              country={user.location.country}
              phone={user.phone}
              email={user.email}
              nation={user.nat}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Users;

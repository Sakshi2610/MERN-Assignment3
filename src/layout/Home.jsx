import User from "../components/User";
import { useContext, useState } from "react";
import { ApplicationContext } from "../App";

const Home = (props) => {
  const { users } = useContext(ApplicationContext);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleUserClick = (userId) => {
    setSelectedUserId(userId === selectedUserId ? null : userId);
  };

  return (
    <div className="user-list">
      {users.map((user) => (
        <User key={user.id} user={user} selectedUserId={selectedUserId} onUserClick={handleUserClick}/>
      ))}
    </div>
  );
};

export default Home;

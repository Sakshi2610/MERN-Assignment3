import Button from "./Button";
import "../App.css";


const User = ({ user, selectedUserId, onUserClick }) => {
  const showDetails = user.id === selectedUserId;

  const handleDetailsClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className={`users ${showDetails ? "show-details" : ""}`}>
        <div className="user-container" onClick={() => onUserClick(user.id)}>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div className="user-footer">
            <Button>Delete</Button>
          </div>
        </div>
        {showDetails && (
          <>
            <div className="user-details" onClick={handleDetailsClick}>
              <div>
                <label className="detail">Name : </label>
                {user.name}
              </div>
              <div>
                <label className="detail">Email : </label>
                {user.email}
              </div>
              <div>
                <label className="detail">Username : </label>
                {user.username}
              </div>
              <div>
                <label className="detail">City : </label>
                {user.address.city}
              </div>
              <div>
                <label className="detail">Company : </label>
                {user.company.name}
              </div>
              <div>
                <label className="detail">Website : </label>
                {user.website}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default User;

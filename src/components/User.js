const User = ({ name, age }) => {
  return (
    <div className="card mb-3 bg-primary text-white">
      <div className="card-body">
        <h5 className="card-title">User Profile</h5>
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
  );
};

export default User;

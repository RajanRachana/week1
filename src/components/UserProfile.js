import User from "./User";

const UserProfile = () => {
  return (
    <div className="container mt-4 my-5">
      <h1 className="fw-bold fst-italic my-3">
        Day 4: React Components and Props
      </h1>
      <h2>User Profiles</h2>
      <div className="row ">
        <div className="col-md-6">
          <User name="Rohit" age={35} />
        </div>
        <div className="col-md-6">
          <User name="Virat" age={45} />
        </div>
        <div className="col-md-6">
          <User name="Rahul" age={25} />
        </div>
        <div className="col-md-6">
          <User name="Hardik" age={30} />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

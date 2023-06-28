import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
    <div className='container container-sm container-md container-lg container-xl container-xxl'>
        <div className="card">
        <div className="card-body">
        <img src={user.picture} alt={user.name} />
        <h5 className="card-title"><strong>Nombre:</strong> {user.name}</h5>
        <p className="card-text"><strong>Email:</strong> {user.email}</p>
    </div>
    </div>
    </div>
    )
  );
};

export default Profile;
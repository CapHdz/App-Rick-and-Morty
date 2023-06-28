import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Logout from "./logout";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
    <main className="bg-general">
    <div className='container py-5'>
      <div className="card bg-dark bg-opacity-50">
        <div className="card-body row">
          <div className="col-md-4 d-flex justify-content-center">
            <img src={user.picture} alt={user.name} id="profile"/>
          </div>
          <div className="col-md-8 ">
            <h5 className="card-title text-white titulo-home fs-3"><strong>Nombre:</strong> {user.name}</h5>
            <p className="card-text text-white fs-4"><strong>Email:</strong> {user.email}</p>
            <Logout/>
          </div>
        </div>
      </div>
    </div>
    </main>
    )
  );
};

export default Profile;
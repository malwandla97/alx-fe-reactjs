import React from "react";
import {Routes, Route, Link} from "react-router-dom";

const ProfileDetails = () => <h2>Profile Details</h2>;
const ProfileSettings = () => <h2>Profile Settings</h2>;

const Profile = () => {

    <div>

        <h1>Profile</h1>
        <nav>
            <Link to="details">Details</Link>
            <Link to="settings">Settings</Link>
        </nav>
        <Routes>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
        </Routes>
    </div>
};
export default Profile;
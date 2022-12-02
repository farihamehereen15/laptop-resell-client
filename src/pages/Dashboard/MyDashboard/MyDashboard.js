import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../hocks/useTitles';

const MyDashboard = () => {
    useTitle("MyDashboard")
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-3xl">WelCome to : {user.email}</h2>
        </div>
    );
};

export default MyDashboard;
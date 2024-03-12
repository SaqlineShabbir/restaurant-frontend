import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const PreventLoginRoute = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const isLoggedIn = UseAuth();

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                // Use your authentication logic from UseAuth here

                // Set isInitialized to true after successfully checking authentication
                setIsInitialized(true);

                // Return true if the user is logged in
                return isLoggedIn;
            } catch (error) {
                console.error('Error checking authentication:', error);
                // Handle errors if necessary

                // Set isInitialized to true in case of error to avoid infinite loading
                setIsInitialized(true);

                // Return false in case of error
                return false;
            }
        };

        // Initialize authentication on component mount
        checkAuthentication();
    }, [isLoggedIn]);

    if (!isInitialized) {
        return <p>Loading...</p>; // Show loading state while checking authentication
    }

    // If the user is logged in, prevent access to certain pages
    if (isLoggedIn) {
        return <Navigate to="/" />;
    }

    // If the user is not logged in, render the children
    return children;
};

export default PreventLoginRoute;
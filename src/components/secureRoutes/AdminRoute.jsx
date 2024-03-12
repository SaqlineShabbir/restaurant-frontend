import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UseAuth from '../../hooks/UseAuth';

const AdminRoute = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);
    const auth = useSelector((state) => state.auth);
    const admin = auth?.user?.role === 'admin';
    const location = useLocation();
    const isLoggedIn = UseAuth();
    useEffect(() => {
        const initializeAuth = async () => {
            try {
                // Use your authentication logic from UseAuth here
                const isLoggedIn = await UseAuth();

                // If the user is logged in and has admin privileges, set isInitialized to true
                if (isLoggedIn && admin) {
                    setIsInitialized(true);
                } else {
                    // Redirect to the home page if not authenticated or doesn't have admin privileges
                    setIsInitialized(true); // Set isInitialized even in case of failure to avoid infinite loading
                }
            } catch (error) {
                console.error('Error initializing authentication:', error);
                // Handle errors if necessary
                setIsInitialized(true); // Set isInitialized in case of failure to avoid infinite loading
            }
        };

        // Initialize authentication on component mount
        initializeAuth();
    }, [admin]);

    if (!isInitialized) {
        return <p className='text-center'>Loading...</p>; // Show loading state while checking authentication
    }

    if (isLoggedIn && admin) {
        return children;
    } else {
        return <Navigate to="/" />;
    }
};

export default AdminRoute;
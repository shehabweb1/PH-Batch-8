import React from 'react';
import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <Header/>
            <div className='py-10 text-center'>
                <h1 className='text-3xl font-semibold mb-3'>This page is not valid</h1>
                <Link to="/" className='btn btn-neutral'>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
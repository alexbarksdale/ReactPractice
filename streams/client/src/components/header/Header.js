import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from '../GoogleAuth';

export default () => {
    return (
        <div>
            <div className='ui secondary pointing menu'>
                <Link className='item' to='/'>
                    Stream
                </Link>
                <div className='right menu'>
                    <Link className='item' to='/'>
                        All Streams
                    </Link>

                    <GoogleAuth />
                </div>
            </div>
        </div>
    );
};

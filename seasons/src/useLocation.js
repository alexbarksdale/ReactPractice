import { useState, useEffect } from 'react';

const useLocation = () => {
    const [lat, setLat] = useState('null');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            (position) => setLat(position.coords.latitude),
            (err) => setErrMsg(err.message)
        );
    }, []);

    return [lat, errMsg];
};

export default useLocation;

import React from 'react';
import useStatus from "../Hook/useStatus";

function Index(props) {
    const isOnline = useStatus(1);

    return (
        <div>
            {
                isOnline ? <h1>Online</h1> : <h1>Offline</h1>
            }
        </div>
    );
}

export default Index;
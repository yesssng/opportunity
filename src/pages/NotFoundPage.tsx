import React from 'react';

const NotFoundPage: React.FC = () => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            marginTop: '200px',
        }}
    >
        <h1 style={{ fontSize: '4rem', margin: 0 }}>404</h1>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>Page not found</p>
    </div>
);

export default NotFoundPage;
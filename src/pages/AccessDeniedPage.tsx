import React from 'react';

const AccessDeniedPage: React.FC = () => (
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
        <h1 style={{ fontSize: '4rem', margin: 0 }}>403</h1>
        <p style={{ fontSize: '1.5rem', color: '#555' }}>Access denied</p>
    </div>
);

export default AccessDeniedPage;
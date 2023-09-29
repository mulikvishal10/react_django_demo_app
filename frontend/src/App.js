import React, { useState } from 'react';
import './App.css';

const App = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <div>Home Content Goes Here</div>;
            case 'save':
                return <div>Save Content Goes Here</div>;
            case 'review':
                return <div>Review Changes Content Goes Here</div>;
            default:
                return null;
        }
    };

    return (
        <div className="App">
            <div className="tabs">
                <div className={`tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => handleTabClick('home')}>Home</div>
                <div className={`tab ${activeTab === 'save' ? 'active' : ''}`} onClick={() => handleTabClick('save')}>Save</div>
                <div className={`tab ${activeTab === 'review' ? 'active' : ''}`} onClick={() => handleTabClick('review')}>Review Changes</div>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default App;

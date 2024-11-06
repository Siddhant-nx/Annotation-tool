import React from 'react';
import './App.css'; 
import logout from './logout.svg'
import {useNavigate} from "react-router-dom"

function Home() {
    return (
        <div className="container">
            <Header />
            <MainContent />
        </div>
    );
}

function Header() {
    const navigate = useNavigate();
    const HandleLogout=()=>{ 
        alert('Logginng out')
        navigate('/Login.jsx')
    }

    return (
        <header className="header">
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Refresh</a>
          <a href="#">Performance</a>
          <a href="#">Report Bug</a>
        </nav>

        {/* Logout Button (SVG Icon) */}
        <div className="logout-button" onClick={() => HandleLogout() }>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="logout-icon">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </div>
      </header>
    );
}

function MainContent() {
    return (
        <main className="main-content">
            <UserInfo />
            <TaggingSection />
            <TagList />
        </main>
    );
}

function UserInfo() {
    return (
        <div className="user-info">
            <p>Current User: Siaesh Gaonkar</p>
        </div>
    );
}

function TaggingSection() {
    return (
        <div className="tagging-section">
            <div className="tagging-header">
                <div>
                    <label>Language:</label>
                    <select>
                        <option>Konkani</option>
                        <option>English</option>
                        <option>hindi</option>
                    </select>
                </div>
                <div>
                    <label>Method:</label>
                    <select>
                        <option>CLIFT NER</option>
                        <option>CLIFT NER</option>
                    </select>
                </div>
            </div>
            <div className="textareas">
                <textarea className='text-1'></textarea>
                <textarea className='text-2'></textarea>
            </div>
            <div className="buttons">
                <button>Clear Tag</button>
                <button>Preview</button>
                <button>Next</button>
                <button className="tag-sentence">Tag Sentence</button>
                <button className="save">Save</button>
            </div>
        </div>
    );
}

function TagList() {
    const tags = [
        { text: 'Person', color: 'tag-green' },
        { text: 'Noun', color: 'tag-blue' },
        { text: 'Festival', color: 'tag-orange' },
        { text: 'Language', color: 'tag-red' },
        { text: 'Religion', color: 'tag-teal' },
        { text: 'Game', color: 'tag-yellow' },
        { text: 'Doubt', color: 'tag-light-yellow' },
        { text: 'Literature', color: 'tag-purple' },
        { text: 'B-Person', color: 'tag-dark-yellow' },
        { text: 'B-Noun', color: 'tag-dark-blue' },
        { text: 'B-Festival', color: 'tag-dark-orange' },
        { text: 'B-Language', color: 'tag-dark-red' },
        { text: 'B-Religion', color: 'tag-dark-teal' },
        { text: 'B-Game', color: 'tag-dark-yellow' },
        { text: 'Person', color: 'tag-green' },
        { text: 'Noun', color: 'tag-blue' },
        { text: 'Festival', color: 'tag-orange' },
        { text: 'Language', color: 'tag-red' },
        { text: 'Religion', color: 'tag-teal' },
        { text: 'Game', color: 'tag-yellow' },
        { text: 'Doubt', color: 'tag-light-yellow' },
        { text: 'Literature', color: 'tag-purple' },
        { text: 'B-Person', color: 'tag-dark-yellow' },
        { text: 'B-Noun', color: 'tag-dark-blue' },
        { text: 'B-Festival', color: 'tag-dark-orange' },
        { text: 'B-Language', color: 'tag-dark-red' },
        { text: 'B-Religion', color: 'tag-dark-teal' },
        { text: 'B-Game', color: 'tag-dark-yellow' },
    ];

    return (
        <div className="tag-list"><p>Tag legends</p>
            <div className="tags">
                {tags.map((tag, index) => (
                    <span key={index} className={`tag ${tag.color}`}>
                        {tag.text}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Home;

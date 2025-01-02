import React from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline, closeOutline, chevronForwardOutline, searchOutline, heartOutline } from 'ionicons/icons';

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <h1>
          <a href="#" className="logo">Wildvine</a>
        </h1>

        <select name="language" className="lang-switch">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>

        <button className="nav-open-btn" aria-label="Open Menu" data-nav-open-btn>
          <IonIcon icon={menuOutline} />
        </button>

        <nav className="navbar" data-navbar>
          <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
            <IonIcon icon={closeOutline} />
          </button>

          <a href="#" className="logo">Wildvine</a>

          <ul className="navbar-list">
            {[
              { href: "#home", text: "Home" },
              { href: "#about", text: "About" },
              { href: "#service", text: "Service" },
              { href: "#donate", text: "Donate" },
              { href: "#event", text: "Event" },
              { href: "#", text: "Contact" },
            ].map((link, index) => (
              <li key={index}>
                <a href={link.href} className="navbar-link" data-nav-link>
                  <span>{link.text}</span>
                  <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-action">
          <button className="search-btn" aria-label="Search">
            <IonIcon icon={searchOutline} />
          </button>

          <button className="btn btn-primary">
            <span>Donation</span>
            <IonIcon icon={heartOutline} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

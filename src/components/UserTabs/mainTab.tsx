import React from 'react';

const MainTab: React.FC = () => {
  return (
    <div className="tab">
      <div className="tab-column">
        <div className="form-field">
          <label htmlFor="userName" className="form-label">Your Name</label>
          <input className="form-input" type="text" id="userName" />
          <div className="form-inbut-border" />
        </div>
        <div className="form-field">
          <label htmlFor="userLastName" className="form-label">Your Lastname</label>
          <input className="form-input" type="text" id="userLastName" />
          <div className="form-inbut-border" />
        </div>
        <div className="form-field">
          <label htmlFor="userLogin" className="form-label">Your Login / Email</label>
          <input className="form-input" type="text" id="userLogin" />
          <div className="form-inbut-border" />
        </div>
      </div>
      <div className="tab-column">
        <div className="form-field">
          <label htmlFor="oldPass" className="form-label">Old password</label>
          <input className="form-input" type="password" id="oldPass" />
          <div className="form-inbut-border" />
        </div>
        <div className="form-field">
          <label htmlFor="newPass" className="form-label">New password</label>
          <input className="form-input" type="password" id="newPass" />
          <div className="form-inbut-border" />
        </div>
        <div className="form-field">
          <label htmlFor="newPassRepeat" className="form-label">Repeat new password</label>
          <input className="form-input" type="password" id="newPassRepeat" />
          <div className="form-inbut-border" />
        </div>
      </div>
    </div>
  );
};

export default MainTab;

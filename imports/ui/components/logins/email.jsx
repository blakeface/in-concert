import React, { Component } from 'react';

const emailLogin = () => {
  return (
    <div id="modal-email" className="modalbox-modal">
      <div className="modalbox-modal-content">
        <form>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
          <label for="password">Password</label>
          <input type="text" id="password" name="password" />
        </form>
      </div>
    </div>
  )
}

export default emailLogin;

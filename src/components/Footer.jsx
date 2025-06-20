import React from 'react';

export const Footer = () => {
  let FooterStyle = {
    position: 'relative',
    width: '100%',
    bottom: '0',
    backgroundColor: '#343a40',
    color: '#ffffff',
  };
  return (
    <footer className="bg-dark text-light py-3 fixed-bottom" style={FooterStyle}>
      <p className="text-center mb-0">
        Copyright &copy; {new Date().getFullYear()} My Todo App. All rights reserved.
      </p>
    </footer>
  );
};
import React from 'react';

const Footer = (props) => {
  return (
    <div className="Footer">
      <p>
        Copyright &copy; 2022 Raymond Lu{' '}
        <a href="https://github.com/raylu15742cs" target="#">
          <img
            src="https://spng.pinpng.com/pngs/s/256-2562212_github-logo-png-github-svg-logo-transparent-png.png"
            className="githublogo"
            alt="github"
            height="15px"
        
          ></img>
        </a>
      </p>
    </div>
  );
};

export default Footer;

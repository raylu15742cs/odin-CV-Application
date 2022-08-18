import React from 'react';

const Footer = (props) => {
  return (
    <div className='Footer'>
      <p>
        Copyright &copy; 2022 Raymond Lu {" "}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZkibQaj5LLhxte7YsqiitCq7pn7T8BZksWb_nZpaPKw&s"
          className='githublogo'
          alt="github"
          height="13px"
        ></img>
      </p>
    </div>
  );
};

export default Footer;

import React from 'react'

const AboutMe = () => {
  return (
    <div id="aboutme" className="container mt-3">
      <div className="row">
        <div className="col-md-4">
          <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&usqp=CAU" />
        </div>
        <div className="col-md-8">
          <h1 className="mb-4">Hello, I'm Cynthia! an aspiring full-stack developer 😃</h1>
          <p className="text-start mb-4">
            Currently, I'm collaborating to create an app aimed at providing resources for Per Scholas learners in Seattle. I'm interested in the intersection of people and technology.
          </p>
          <p className="text-start mb-4">
            I’m passionate about web development and eager and hungry to learn more.
          </p>
          <p className="text-start mb-4">
            Also extremely guilty of using too many emojis 😅
          </p>
          <a href="https://www.linkedin.com/in/cynthia-z/" target="_blank" className="btn btn-primary mx-2" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>
      </div>




    </div>
  )
}

export default AboutMe
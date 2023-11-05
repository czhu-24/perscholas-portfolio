import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer text-center bg-dark text-light">
      <div className="container-fluid p-4">
        <p>&copy; {new Date().getFullYear()} Cynthia Zhu</p>
      </div>
    </footer>
  )
}

export default Footer
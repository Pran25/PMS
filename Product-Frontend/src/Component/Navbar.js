import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Product Management System</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link to='/' class="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li class="nav-item">
          <Link to='addProduct' class="nav-link active" aria-current="page" href="#">Add Product</Link>
        </li>
      
      <li class="nav-item">
      <Link to='productList' class="nav-link active" aria-current="page" href="#">Product List</Link>
    </li>   
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Header from './Header'
import '../css/PostForm.css';

export default function Form() {
  const [file, setFile] = useState('')
  const [author, setAuthor] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const imageupload = e => {
    setFile(e.target.files[0])
  }

  async function submitForm(e) {
    e.preventDefault()
    const date = moment(new Date()).format("DD/MM/YYYY")
    const formData = new FormData();
    formData.append("location", location);
    formData.append("name", author);
    formData.append("description", description);
    formData.append("PostImage", file);
    formData.append("date", date);

    fetch(`${process.env.REACT_APP_IMAGE_URL}/upload`, {
      method: 'POST',
      headers: {},
      body: formData,
    })

      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(alert("Post created successfully"))
    setAuthor('');
    setDescription('');
    setFile('');
    setLocation('');
    navigate("/postview")
  }
  return (
    <div>
      <Header />
      <div className="form-container">
        <form onSubmit={submitForm} encType='multipart/form-data'>

          <input
            id='fileupload'
            type="file"
            placeholder="No file Chosen"
            name="PostImage" required
            onChange={imageupload}
          />

          <input
            className='author'
            type="text"
            placeholder="Author"
            required value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            className='location'
            type="text"
            placeholder="Location" required
            value={location} onChange={(e) => setLocation(e.target.value)}
          />

          <input
            className='description'
            type="text"
            placeholder="Description" required
            value={description} onChange={(e) => setDescription(e.target.value)}
          />

          <button id="btn" type="submit">Post</button>

        </form>
      </div>
    </div>
  )
}
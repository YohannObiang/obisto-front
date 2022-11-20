import React, { Component, useState } from 'react';
import axios from 'axios';

// base url of API
const BASE_URL = 'http://localhost:4000/';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null, // to store selected file
      handleResponse: null, // handle the API response
      imageUrl: null // to store uploaded image path
    };
  }
  // handle change event of input file
  onChangeFile = event => {
    this.setState({ selectedFile: event.target.files[0] })
    
  }
  

  // handle click event of the upload button
  handleUpload = () => {
    const { selectedFile } = this.state;
    if (!selectedFile) {
      this.setState({
        handleResponse: {
          isSuccess: false,
          message: "Please select image to upload."
        }
      });
      return false;
    }
    const formData = new FormData();
    formData.append('dataFile', selectedFile, selectedFile.name);
    axios.post(BASE_URL + 'uploadfile', formData).then(response => {
      this.setState({
        handleResponse: {
          isSuccess: response.status === 200,
          message: response.data.message
        },
        imageUrl: BASE_URL + response.data.file.path
      });
    }).catch(err => {
      alert(err.message);
      console.log(formData)
    });
  }

  render() {
    const { handleResponse, imageUrl } = this.state;
    return (
      <div  >

        <div style={{ marginBottom: 10 }}>
          <input type="file" onChange={this.onChangeFile} />
        </div>
        <div style={{ marginBottom: 10 }}>
          <input type="file" onChange={this.onChangeFile2} />
        </div>
        <input type="button" value="Upload" onClick={this.handleUpload} />
        {handleResponse && <p className={handleResponse.isSuccess ? "success" : "error"}>{handleResponse.message}</p>}

        <p className="title" style={{ marginTop: 30 }}>Uploaded Image:</p>
        {imageUrl && <img src={imageUrl} alt="Uploaded File" height="100" width="100" />}
      </div>
    );
  }
}

export default Upload;
import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'http://localhost:3001/posts/image/upload';

function upload() {
  const [image, setImage] = useState('');

  const onChange = e => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios
        .post('http://localhost:3001/posts/image/upload', formData, {})
        .then(res => {
          console.log(res);
        });

      setImage(image.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <span>Browse</span>
        <input type='file' name='image' onChange={onChange} />
      </div>
      <div>
        <input type='text' />
      </div>
      <div>
        <button onClick={onSubmit}>upload </button>
      </div>
    </div>
  );
}

export default upload;

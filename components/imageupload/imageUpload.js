import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useSession, getSession } from "next-auth/react"
import axios from 'axios';

const baseStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  transition: 'border .3s ease-in-out',
};

const activeStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

function ImageUpload(props) {
  const { data: session, status } = useSession();
  const [image, setImage] = useState([]);
  const [imageTitle, setImageTitle] = useState({
    desc: '',
  });
  const [linkData, setLinkData] = useState('');

  const handleChange = e => {
    setImageTitle({ ...imageTitle, [e.target.name]: e.target.value });
  };
  

  const onDrop = useCallback(acceptedFiles => {
    setImage(
      acceptedFiles.map(img =>
        Object.assign(img, {
          preview: URL.createObjectURL(img),
        })
      )
    );
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png',
    maxFiles: 1,
    multiple: false,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const thumbs = image.map(file => (
    <div key={file.name}>
      <img src={file.preview} alt={file.name} />
    </div>
  ));

  const onSubmit = () => {
    const data = new FormData();
    data.append('image', image[0]);
    data.append('title', imageTitle.desc)
    data.append('userData', session.user.email.split('@')[0])
    data.append('name', session.user.name)

    console.log(data)

    const url = 'http://localhost:3001/posts/image/upload';

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then(res => {
        // then print response status
        console.log(res);
      });
  };

  // clean up
  useEffect(
    () => () => {
      image.forEach(img => URL.revokeObjectURL(img.preview));
    },
    [image]
  );

  return (
    <section>
      <div className='editor mx-auto flex flex-col text-gray-800  p-1 w-full'>
        <textarea
          className='description bg-gray-100 sec mb-4 p-3 h-20 border border-gray-300 outline-none resize-none'
          spellcheck='false'
          placeholder='Title'
          value={imageTitle.desc}
          onChange={handleChange}
          name='desc'
          maxlength='90'
        ></textarea>
      </div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your images here.</div>
      </div>
      <div className=' flex justify-center'>
        <aside className='p-2 '>{thumbs}</aside>
      </div>
      <div className='buttons flex'>
        <div className='btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto'>
          Cancel
        </div>
        <button
          onClick={onSubmit}
          className='btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500'
        >
          Post
        </button>
      </div>
    </section>
  );
}

export default ImageUpload;

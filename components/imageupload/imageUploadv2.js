import React, { useState } from 'react'
import Uppy from '@uppy/core'
import Tus from '@uppy/tus'
import XHRUpload from '@uppy/xhr-upload'
import { Dashboard, useUppy } from '@uppy/react'
import Transloadit from '@uppy/transloadit'
import { useSession, getSession } from "next-auth/react"
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'
import '@uppy/progress-bar/dist/style.css'
import '@uppy/dashboard/dist/style.css'

function ImageUploader() {
   
    // const [dropdown, setDropDown] = useState(false)
    const [formData, setFormData] = useState({
        desc: '',
      });

      const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData)
      };

    const uppy = useUppy(() => {
       
        return new Uppy({
            restrictions: { minNumberOfFiles: 1, maxNumberOfFiles: 1, allowedFileTypes: ["image/*"] },
            
            
        }).use(XHRUpload, {
            endpoint: 'http://localhost:3001/posts/image/upload',
            formData: true,
            fieldName: 'image',
            
          })
          
        
          
      })
      uppy.on('upload', (data) => {
        // data object consists of `id` with upload ID and `fileIDs` array
        // with file IDs in current upload
        // data: { id, fileIDs }
        uppy.setMeta({ title: formData.desc,
            username: 'session.user.name',
            userData: '' })
        // console.log(`Starting upload ${id} for files ${fileIDs}`)
      })
      

      React.useEffect(() => {
        return () => uppy.close();
      }, []);

      const handleSubmit = () => {
        uppy.upload()
      }

    return (
        <div>
            <div className='mt-1'>
      <div className='editor mx-auto flex flex-col text-gray-800  p-1 w-full'>
        <textarea
          className='description bg-gray-100 sec mb-4 p-3 h-20 border border-gray-300 outline-none resize-none'
          spellcheck='false'
          placeholder='Title'
          value={formData.desc}
          onChange={handleChange}
          name='desc'
          maxlength='90'
        ></textarea>
      
<div>
<Dashboard
      uppy={uppy}
      height={420}
      proudlyDisplayPoweredByUppy={false}
      hideUploadButton={true}
    />
</div>
        <div className='icons flex text-gray-500 m-2'>
            
          <svg
            className='mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          <svg
            className='mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <svg
            className='mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
            />
          </svg>
          <div className='count ml-auto text-gray-400 text-xs font-semibold'>
            0/300
          </div>
        </div>

        <div className='buttons flex'>
          <div className='btn border border-gray-300 p-1 px-4 font-semibold cursor-pointer text-gray-500 ml-auto'>
            Cancel
          </div>
          <button
            onClick={handleSubmit}
            className='btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500'
          >
            Post
          </button>
        </div>
      </div>
      
    </div>
           
        </div>
    )
}

export default ImageUploader

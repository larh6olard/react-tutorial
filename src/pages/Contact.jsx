import { useState } from "react"
import { IoMdCloudUpload } from "react-icons/io";
import { AiFillFileImage } from "react-icons/ai";
import { MdDelete } from "react-icons/md";


const Contact = () => {
  const [toggle, setToggle] = useState(false)

  const updateToggle = (() => {
    setToggle(!toggle)
  })

  return (
    <div className='h-[500px]'>
      <button
        className={`${toggle ? "bg-blue-600 border border-gray-300 rounded-full w-36 h-16.5 mt-2 ml-2 relative cursor-pointer" : "border border-gray-300 rounded-full w-36 h-16.5 mt-2 ml-2 relative bg-gray-300 cursor-pointer"}`}
        onClick={updateToggle}
      >
        <div
          className={`${(toggle) ? "transition-all duration-300 translate-x-19 w-13 h-13 rounded-full absolute top-1.5 left-1.5 bg-white cursor-pointer" : "w-13 h-13 rounded-full absolute top-1.5 left-1.5 bg-gray-800 cursor-pointer transition-all duration-300"}`}
        >
        </div>
      </button>
      <br />
      <FileUploader />
    </div>
  )
}

function FileUploader() {
  const [image, setImage] = useState(null)
  const [fileName, setFileName] = useState("No file selected")

  return (
    <main className="ml-10">
      <form action=""
        className="hover:bg-blue-100 transition-colors"
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input 
          type="file" 
          name="" 
          id="" 
          accept="image/*" 
          className="input-field" 
          hidden 
          onChange={({target: {files}}) => {
            files[0] && setFileName(files[0].name)
            if(files) {
              setImage(URL.createObjectURL(files[0]))
            }
          }} 
          />

          {
            image ? <img src={image} width={150} height={150} alt={fileName} className="upload-content" /> :
            <>
              <IoMdCloudUpload color='#1475cf' size={60} />
              <p>Browse Files to upload</p>
            </>
          }
      </form>

      <section className="uploaded-row">
        <AiFillFileImage color='#1475cf' />
        <span className="flex justify-between items-center">
          {fileName}
          <MdDelete 
            className="ml-5 cursor-pointer hover:text-blue-600 transition-colors"
            onClick={() => {
              setFileName("No file selected")
              setImage(null)
            }}
          />
        </span>
      </section>
    </main>
  )
}


export default Contact
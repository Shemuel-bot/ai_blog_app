import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogDetails() {
  const [blog, setBlog] = useState({})

  useEffect(()=>{
    fetch(`http://127.0.0.1:8000/blog-details/${Number(localStorage.getItem('blogId'))}`, {
      method: 'GET'
    }).then(async res => {
      const a = await res.json()
      setBlog(a.message)
    })
  },[])
  
  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div>
          <a href="#" className="text-white hover:underline">
            log out
          </a>
          <br />
          <Link to='/home' className="text-white hover:underline">
            home
          </Link>
        </div>
      </nav>

      <div className="flex-frow container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md transistion-transform transform hover:scale-105 flex flex-col">
            <section>
                <h2 className="text-xl mb-4 font-semibold">Blog Post Details</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-gray-700">{blog.content}</p>
                    <hr className="my-4 border-gray-300"/>
                    <h4 className="text-lg font-semibold">YouTube Video Title</h4>
                    <p className="text-gray-700">{blog.title}</p>
                    <h4 className="text-lg font-semibold">Video Link</h4>
                    <a href="#" className="text-blue-600 hover:underline">{blog.link}</a>
                </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;

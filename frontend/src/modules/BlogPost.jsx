/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function BlogPost({ title, content, id }) {
  return (
    <Link to="/home/all-blogs/details" onClick={()=>{localStorage.setItem('blogId', id)}}>
      <div className="border border-gray-300 p-4 rounded-lg">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{content.substring(0, 90) + "..."}</p>
      </div>
    </Link>
  );
}

export default BlogPost;

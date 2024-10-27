import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BlogPost from "./modules/BlogPost";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/blog-list/${Number(
        localStorage.getItem("userId")
      )}`,
      {
        method: "GET",
      }
    ).then(async (res) => {
      const a = await res.json();
      const ui = a.message.map((x) => (
        <BlogPost key={x.pk} title={x.title} content={x.content} id={x.pk} />
      ));
      setBlogs(ui);
    });
  }, []);

  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div>
          <Link
            to="/"
            className="text-white hover:underline"
            onClick={() => {
              localStorage.removeItem("userId");
              localStorage.removeItem("blogId");
            }}
          >
            log-out
          </Link>
          <br />
          <Link to="/home" className="text-white hover:underline">
            home
          </Link>
        </div>
      </nav>

      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <section>
            <h2 className="text-xl mb-4 font-semibold">All Blog Post</h2>
            <div className="space-y-4">{blogs}</div>
          </section>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;

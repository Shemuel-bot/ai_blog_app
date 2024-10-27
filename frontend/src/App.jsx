import { Link, useNavigate } from "react-router-dom";
import Load from "./modules/Load";
import { useEffect } from "react";

function App() {

  const eventHandler = () => {
    document.getElementById("loading-circle").hidden = false;

    fetch("http://127.0.0.1:8000/generate-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        link: document.getElementById("youtubeLink").value,
        id: localStorage.getItem("userId"),
      }),
    }).then(async (res) => {
      const a = await res.json();

      document.getElementById("loading-circle").hidden = true;
      document.getElementById("blogContent").textContent = a.message;
    });
  };

  return (
    <>
      <nav className="bg-blue-600 p-4 text-white flex justify-between ">
        <div>
          <h1 className="text-3xl font-bold">AI Blog Generator</h1>
        </div>
        <div>
          <Link to="/" className="text-white hover:underline" onClick={()=>{
            localStorage.removeItem('userId')
            localStorage.removeItem('blogId')
          }}>
            log-out
          </Link>
          <br />
          <Link to="/home/all-blogs" className="text-white hover:underline">
            all-blogs
          </Link>
        </div>
      </nav>

      <br />

      <div className="flex-frow container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md transistion-transform transform hover:scale-105 flex flex-col">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to the AI Blog Generator
            </h2>
            <p className="text-gray-700">
              Generate not exactly high quality blog articles from YouTube
              videos using artificial inteligience. Ooooooh... Spooky! Simply
              enter the link to the YouTube video below and let the AI create
              the rest.
            </p>
          </div>

          <br />

          <div>
            <h2 className="text-xl mb-4 font-semibold">
              Enter YouTube Video Link
            </h2>
            <div className="flex space-x-4">
              <input
                type="url"
                name=""
                id="youtubeLink"
                placeholder="Paste YouTube Link"
                className="flex-grow p-2 border border-blue-400 rounded-l-md"
              />
              <button
                id="generateBlogButton"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transistion-colors"
                onClick={() => {
                  eventHandler();
                }}
              >
                Generate
              </button>
            </div>
          </div>

          <Load />

          <section className="mt-10 flex-grow">
            <h2 className="text-xl mb-4 font-semibold">
              Generated Blog Article
            </h2>
            <div
              id="blogContent"
              className="mt-2 text-gray-700 space-y-4"
            ></div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;

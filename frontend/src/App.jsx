import Load from "./Load";

function App() {
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
        </div>
      </nav>

      <br />

      <div className="flex-frow container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md transistion-transform transform hover:scale-105 flex flex-col">
          
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the AI Blog Generator</h2>
            <p className="text-gray-700">
              Generate not exactly high quality blog articles from YouTube
              videos using artificial inteligience. Ooooooh... Spooky! Simply
              enter the link to the YouTube video below and let the AI create
              the rest.
            </p>
          </div>

          <br />

          <div>
            <h2 className="text-xl mb-4 font-semibold">Enter YouTube Video Link</h2>
            <div className="flex space-x-4">
                <input type="url" name="" id="youtubLink" placeholder="Paste YouTube Link" className="flex-grow p-2 border border-blue-400 rounded-l-md"  />
                <button id="generateBlogButton" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transistion-colors">Generate</button>
            </div>
          </div>

          {/* <Load /> */}


          <section className="mt-10 flex-grow">
            <h2 className="text-xl mb-4 font-semibold">Generated Blog Article</h2>
            <div id="blogContent" className="mt-2 text-gray-700 space-y-4">
              
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default App;

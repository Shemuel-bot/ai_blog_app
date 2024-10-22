function BlogDetails() {
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

      <div className="flex-frow container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md transistion-transform transform hover:scale-105 flex flex-col">
            <section>
                <h2 className="text-xl mb-4 font-semibold">Blog Post Details</h2>
                <div className="border border-gray-300 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">Blog Post Title</h3>
                    <p className="text-gray-700">Content</p>
                    <hr className="my-4 border-gray-300"/>
                    <h4 className="text-lg font-semibold">Yotube Video Title</h4>
                    <p className="text-gray-700">Title of the video</p>
                    <h4 className="text-lg font-semibold">Video Link</h4>
                    <a href="#" className="text-blue-600 hover:underline">https://www.youtube.com</a>
                </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;

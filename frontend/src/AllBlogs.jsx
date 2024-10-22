function AllBlogs() {
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

      <div className="container mx-auto mt-10 px-4 sm:px-0">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">

            <section>
                <h2 className="text-xl mb-4 font-semibold">All Blog Post</h2>
                <div className="space-y-4">
                    <div className="border border-gray-300 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Blog Post Title 1</h3>
                        <p>This is the content of the blog post</p>
                    </div>

                    <div className="border border-gray-300 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Blog Post Title 1</h3>
                        <p>This is the content of the blog post</p>
                    </div>

                    <div className="border border-gray-300 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Blog Post Title 1</h3>
                        <p>This is the content of the blog post</p>
                    </div>
                </div>
            </section>
        </div>
      </div>
    </>
  );
}

export default AllBlogs;

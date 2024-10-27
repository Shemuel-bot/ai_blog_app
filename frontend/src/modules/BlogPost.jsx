/* eslint-disable react/prop-types */
function BlogPost({title, content}) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p >{content.substring(0, 90) + '...'}</p>
    </div>
  );
}

export default BlogPost
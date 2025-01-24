import React from "react";

const page = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  const { title, body } = data;
  return (
    <div className="flex justify-center my-12">
      <div className="card bg-base-100 w-[500px] border-2 border-blue-100">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default page;

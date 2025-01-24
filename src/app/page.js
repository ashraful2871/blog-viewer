import React from "react";

const page = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
  return <div>home</div>;
};

export default page;

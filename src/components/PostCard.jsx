"use client ";

import Link from "next/link";

const PostCard = ({ post }) => {
  const { title, body, id } = post;
  return (
    <Link href={`/blog/${id}`}>
      {" "}
      <div className="flex flex-col flex-grow h-64">
        <div className="card bg-base-100 shadow-xl flex-grow">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{body}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

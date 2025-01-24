"use client ";

import Link from "next/link";

const PostCard = ({ post }) => {
  const { title, body, id } = post;
  return (
    <li className="border p-4 rounded-xl bg-gray-50 hover:scale-105 transition-all ease">
      <Link href={`/blog/${id}`}>
        <span className="text-blue-500 hover:underline">{title}</span>
      </Link>
    </li>
  );
};

export default PostCard;

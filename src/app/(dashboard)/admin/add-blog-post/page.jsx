import React from "react";
import BlogPostForm from "./BlogPostForm";
import { getLatestBlogPosts } from "@/lib/APIs/APIs";

export default async function page() {
  const latestPosts = async () => {
    try {
      const res = await getLatestBlogPosts();
      return res.data;
    } catch (error) {
      console.log(error);
      return "data not found";
    }
  };

  const latestPostsData = await latestPosts();

  return (
    <div>
      <BlogPostForm latestPostsData={latestPostsData} />
    </div>
  );
}

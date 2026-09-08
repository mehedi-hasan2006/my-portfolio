import React from "react";
import BlogDetailsPage from "./BlogDetailsPage";
import { getBlogById } from "@/lib/APIs/APIs";

async function BlogDetails({ params }) {
  const { id } = await params;

  const getBlogs = async () => {
    try {
      const res = await getBlogById(id);
      return res.data;
    } catch (error) {
      console.log(error);
      return "Blogs not found";
    }
  };

  const blogs = await getBlogs();
  
  return (
    <div>
      <BlogDetailsPage blogs={blogs} id={id} />
    </div>
  );
}

export default BlogDetails;

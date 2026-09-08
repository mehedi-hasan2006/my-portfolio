import { getBlogPosts } from "@/lib/APIs/APIs";
import React from "react";

async function BlogList() {
  const response = await getBlogPosts();
  console.log(response.data);

  return <div>BlogList</div>;
}

export default BlogList;

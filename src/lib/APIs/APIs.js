// All APIs are defined here

import { defaultAPI } from "./defaultAPI";

// ===============================
//          GET APIs
// ===============================

// get all blog posts
export const getBlogPosts = async () => {
  return await defaultAPI("GET", "/api/blogs");
};

// get blog by id
export const getBlogById = async (id) => {
  return await defaultAPI("GET", `/api/blogs/${id}`);
};

// Get Lastest 3 blog posts

export const getLatestBlogPosts = async () => {
  return await defaultAPI("GET", "/api/blogs/latest");
};

// get all projects
export const getProjects = async () => {
  return await defaultAPI("GET", "/api/projects");
};

// get project by id
export const getProjectById = async (id) => {
  return await defaultAPI("GET", `/api/projects/${id}`);
};

// ===============================
//          POST APIs
// ===============================

// create a new blog post
export const createBlogPost = async (data, headers) => {
  return await defaultAPI("POST", "/api/blogs", data, headers);
};

// create a new project
export const createProject = async (data, headers) => {
  return await defaultAPI("POST", "/api/projects", data, headers);
};

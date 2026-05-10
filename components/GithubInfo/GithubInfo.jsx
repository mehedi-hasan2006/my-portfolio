// components/GithubInfo.js
"use client";

import { useState, useEffect } from "react";
import GithubCard from "./GithubCard";

async function fetchGithubData(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub data:", error);
    return null;
  }
}

export default function GithubInfo() {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchGithubData("mehedi-hasan2006");
      setGithubData(data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[24rem]">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!githubData) {
    return (
      <div className="text-center py-20 bg-red-50 dark:bg-red-900/20 rounded-3xl">
        <p className="text-red-600 dark:text-red-400 font-medium">
          Failed to load GitHub profile.
        </p>
      </div>
    );
  }

  return <GithubCard data={githubData} />;
}

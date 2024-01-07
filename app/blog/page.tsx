"use client";

import { Posts } from "@/components/Posts";
import { Metadata } from "next";
import { useEffect, useState } from "react";
import { getAllPosts } from "@/services/getPosts";
import { PostSearch } from "@/components/PostSearch";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}

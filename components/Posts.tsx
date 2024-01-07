import Link from "@/node_modules/next/link";

type Props = {
  posts: any[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

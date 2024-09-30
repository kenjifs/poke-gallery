import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/sCxHDYy8HBnugURiJlDOHQpIJUefjrhS7qk8T5DNZnuC94Bc",
  "https://utfs.io/f/sCxHDYy8HBnu1mqXd3yVdhNalPUm49iRTI7gxZMOpjnfs5uL",
  "https://utfs.io/f/sCxHDYy8HBnuyVsmQ8XbIQEHYD8MpJn0SWOx6GT9Xfe2ouLg",
  "https://utfs.io/f/sCxHDYy8HBnu4NR8PEILiY0UB1trl5XK8wqQsxvSneFpOzPZ",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + "-" + index}>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}

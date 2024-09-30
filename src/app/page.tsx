import Link from "next/link";

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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div className="w-48" key={image.id}>
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}

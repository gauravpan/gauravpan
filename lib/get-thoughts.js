import { promises } from "fs";
import { join } from "path";
import matter from "gray-matter";
const fs = promises;

export async function getThoughtBySlug(slug) {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const docsDirectory = join(process.cwd(), "data/thoughts");
    const fullPath = join(docsDirectory, `${realSlug}.md`);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    return { slug: realSlug, meta: data, content };
  } catch (e) {
    return null;
  }
}

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
    console.log(e);
    return null;
  }
}

export async function getAllThoughtSlugs() {
  try {
    const docsDirectory = join(process.cwd(), "data/thoughts");
    const files = await fs.readdir(docsDirectory);
    const slugList = files.map((file) => file.replace(/\.md$/, ""));
    return slugList;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export async function getAllThoughts() {
  try {
    let allSlugs = await getAllThoughtSlugs();
    let allThoughts = allSlugs.map((slug) => getThoughtBySlug(slug));

    return await Promise.all(allThoughts);
  } catch (e) {
    console.log(e);
    return null;
  }
}

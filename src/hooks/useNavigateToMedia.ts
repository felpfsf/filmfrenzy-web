import { useNavigate } from "react-router-dom";
import slugify from "slugify";

export const useNavigateToMedia = () => {
  const nav = useNavigate();

  const navigateToMedia = (title: string, id: number, type: string) => {
    const mediaType = type === "movie" ? "title" : "name";

    console.log(mediaType);

    const slugifiedTitle = slugify(title, {
      replacement: "-",
      remove: /[^\w\s-]/,
      lower: true,
    });

    const path = `/${type}/${id}/${slugifiedTitle}`;

    nav(path);
  };

  return navigateToMedia;
};

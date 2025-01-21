import { defaultLang } from "~/i18n/ui";

export default function getPathname(path: string, lang: string) {
  let newPath: string;

  if (defaultLang === lang) {
    const [_, ...pathname] = path.split("/");
    newPath = `${pathname.join("/")}`;
  } else {
    const [_, __, ...pathname] = path.split("/");
    newPath = `${pathname.join("/")}`;
  }


  return newPath;
}

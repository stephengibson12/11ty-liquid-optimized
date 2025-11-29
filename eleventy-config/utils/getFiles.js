import { globby } from "globby";

export async function getFiles(pattern, cwd) {
  return globby(pattern, {
    cwd,
    absolute: true,
  });
}

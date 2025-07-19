export function useStripHtml() {
  const stripHtml = (html: string): string => {
    const temp = document.createElement("div");
    temp.innerHTML = html;
    return temp.textContent || temp.innerText || "";
  };

  return stripHtml;
}

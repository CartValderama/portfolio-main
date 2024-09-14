import toast from "react-hot-toast";

export const copyText = (id: string) => {
  const text = document.getElementById(id)?.innerText;
  if (text) {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`Successfully Copied: ${text}`);
    });
  }
};

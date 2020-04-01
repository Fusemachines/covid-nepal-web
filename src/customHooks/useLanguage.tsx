import { useCookies } from "react-cookie";

function useLanguage() {
  const [cookies] = useCookies(["googtrans"]);
  const googtrans = cookies["googtrans"] || localStorage.getItem("googtrans") || "en";
  const language = googtrans.includes("ne") ? "ne" : "en";
  return language;
}

export default useLanguage;

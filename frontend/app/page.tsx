
import { redirect } from "next/navigation";
import Word from "./words/page";


export default function Home() {
  redirect('/words')
  return null ;
}

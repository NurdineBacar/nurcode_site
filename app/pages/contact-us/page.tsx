import { redirect } from "next/navigation";

export default function Page() {
  // Redirect to the correct app route
  redirect("/contact-us");
}

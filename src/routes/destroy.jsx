import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function DestroyAction({ params }) {
  await deleteContact(params.contactId);
  return redirect("/");
}
import { useActionState } from "react";



export default function Form() {
  const [state, formAction, pending] = useActionState(handleSubmit, null);
  console.log(state)

  async function handleSubmit(prevState, formData) {
  const name = formData.get("name");
  const email = formData.get("email");

  // Simulate API call
  await new Promise((r) => setTimeout(r, 1000));

  return { success: true, message: `Thanks, ${name}!` };
}

  return (
    <form action={formAction}>
      <input name="name" placeholder="Name" required />
      <input name="email" placeholder="Email" required />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
      {state?.message && <p>{state.message}</p>}
    </form>
  );
}

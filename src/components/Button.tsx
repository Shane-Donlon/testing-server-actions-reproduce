import { actions } from "astro:actions";
import { $, component$ } from "@builder.io/qwik";
export const Button = component$(() => {
  const handleOnClick = $(async () => {
    const { data, error } = await actions.getGreeting({ name: "Houston" });
    if (data) {
      window.alert(data);
    }
  });

  return (
    <button type="button" onClick$={handleOnClick}>
      Astro Button
    </button>
  );
});

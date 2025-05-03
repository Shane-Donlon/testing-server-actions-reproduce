import qwikdev from "@qwikdev/astro";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [qwikdev()],
  adapter: netlify(),
});

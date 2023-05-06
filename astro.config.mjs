import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),

  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});

// markdoc.config.ts
import type { Config } from "@markdoc/markdoc";

const config: Config = {
  tags: {
    callout: {
      render: "Callout",
      attributes: {
        type: { type: String, default: "info" },
      },
    },
  },
};

export default config; // Correct export

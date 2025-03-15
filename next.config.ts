import type { NextConfig } from "next";
import nextra from "nextra";

const withNextra = nextra({
  search: false,
});

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};

export default withNextra(nextConfig);

import type { NextConfig } from "next";
// import withMarkdoc from "@markdoc/next.js";
import createMdx from "@next/mdx";
// module.exports = withMarkdoc(/* options */)({
//   pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
// });

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  experimental: {
    mdxRs: true,
  },
};
const withmdx = createMdx({});

export default withmdx(nextConfig);

import { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import { highlight } from "sugar-high";
type HeadingProps = ComponentPropsWithoutRef<"h1">;

const components: MDXComponents = {
  h1: (props: HeadingProps) => (
    <h1 className="text-red-500 font-bold text-5xl" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => <h2 {...props} />,
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
};

export function useMDXComponents(
  otherComponents: MDXComponents
): MDXComponents {
  return {
    ...otherComponents,
    ...components,
  };
}

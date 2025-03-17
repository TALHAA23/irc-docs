import { Layout, Link, Navbar, ThemeSwitch, Footer } from "nextra-theme-docs";
import { Banner, Head, Image } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";
import React from "react";
import Logo from "@/components/Logo";
export const metadata = {
  title: "IRC",
};
const banner = (
  <Banner storageKey="some-key">
    City University of science and information technology
  </Banner>
);

const logo = <Logo />;
const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/TALHAA23/intelligent-react-components"
  >
    <div className="flex items-center gap-2">
      {["docs", "examples"].map((item, index) => (
        <Link
          key={index}
          href={item}
          className="capitalize text-black dark:text-white no-underline hover:opacity-80"
        >
          {item}
        </Link>
      ))}
      <ThemeSwitch />
    </div>
  </Navbar>
);
const footer = (
  <Footer className="flex flex-col">
    <p className="flex items-center gap-3">
      Contribute with ❤️ |{" "}
      <Link href="https://github.com/TALHAA23/irc-docs">
        <Image
          src="/github.svg"
          alt="github"
          className=" h-[20px] bg-white rounded-full"
        />
      </Link>
    </p>
    <p>MIT {new Date().getFullYear()} © IRC.</p>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/TALHAA23/irc-docs/blob/master"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* hero */}
      <section className="w-full h-[80vh] flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-5xl sm:text-6xl md:text-8xl ">
          <span className="bg-gradient-to-r from-[#489EEC] to-[#61DAFB] inline-block text-transparent bg-clip-text">
            React
          </span>
          <span>, Prompted</span>
        </h1>
        <h3 className=" font-bold text-2xl">Describe. Generate. Run</h3>
        <code className="normal-btn rounded px-8 py-3.5">npm i irc</code>
      </section>

      {/* examples */}

      <section className=" p-14 flex flex-col sm:flex-row  items-center justify-between">
        <ul className="flex sm:flex-col gap-1">
          {["AIButton", "AIInput", "AIForm"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      {/* what in */}
      <section>
        <h1 className="normal-heading flex flex-col m-4">
          <span>Whats in</span>
          <span>Intelligent React Components</span>
        </h1>
        <div className=" flex flex-wrap gap-2 justify-center w-full p-5">
          {[
            {
              icon: "",
              title: "AI-Powered Component Logic Generation",
              desc: "AI generates complete component logic from natural language prompts.",
            },
            {
              icon: "",
              title: "Gemini AI",
              desc: "Powerful code generation with Google Gemini's AI",
            },
            {
              icon: "",
              title: "Data Integration",
              desc: "Connect to Firebase/Supabase with simple prompts",
            },
            {
              icon: "",
              title: "Codebase Context",
              desc: "AI uses your codebase for tailored code generation.",
            },
            {
              icon: "",
              title: "DevTools",
              desc: "Monitor AI-generated components with detailed tools, tracking requests, model reasoning, and ensuring smooth development.",
            },
          ].map((item, index) => (
            <FeatureCard {...item} key={index} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className=" p-11 h-[30vh] flex gap-2.5 flex-col items-center justify-center">
        <h1 className=" font-bold text-3xl text-center">
          <span>Ready to build with</span>
          <span>Intelligent React Components</span>
        </h1>
        <Link href={"#"} className="normal-btn py-3 px-6 rounded">
          View the Dcoumentaiton
        </Link>
      </section>
    </div>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}
const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => {
  console.log(icon);
  return (
    <div className="relative px-5 rounded w-full sm:max-w-[300px] bg-black text-white dark:bg-white dark:text-black">
      <div className="absolute h-[40px] aspect-square -left-4 -top-4 rounded-full p-1 bg-white dark:bg-black">
        <img src="/logo.svg" alt="img" className="h-full" />
      </div>
      <div className="my-6">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

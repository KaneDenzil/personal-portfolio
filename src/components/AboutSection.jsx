import { Cloud, Code, Sparkles } from "lucide-react";


import { DownloadCvMenu } from "./DownloadCvMenu";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Senior Software Engineer &middot; React Native, Node.js, AWS
            </h3>

            <p className="text-muted-foreground">
              With 9+ years of experience, I specialize in React Native and full-stack delivery. I build cross-platform mobile apps along with the web clients and services behind them, including native module bridging, REST API design, release pipelines, and cloud architecture. I&rsquo;ve led delivery teams of up to five across sports and media, fintech, healthcare, and enterprise.
            </p>

            <p className="text-muted-foreground">
              Most recently I&rsquo;ve been building a construction workforce platform at Appnovation. That work included a bilingual WhatsApp AI assistant on Amazon Bedrock and infrastructure changes that cut the project&rsquo;s AWS bill by 77%. I use AI coding tools like Claude Code every day, and I hold Anthropic certifications in the Claude API, MCP, and Claude Code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <DownloadCvMenu />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Mobile Development</h4>
                  <p className="text-muted-foreground">
                    Cross-platform apps with React Native and Expo, plus native Swift and SwiftUI, taken all the way through App Store and Play Store releases.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud &amp; Infrastructure
                  </h4>
                  <p className="text-muted-foreground">
                    Node.js services on AWS Lambda, API Gateway, and RDS, with
                    cross-region architecture, data residency, and a close eye
                    on cost.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    AI &amp; LLM Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Multilingual voice and text features with Amazon Bedrock,
                    Transcribe, and Polly, from prompt design and cost modelling
                    through to production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

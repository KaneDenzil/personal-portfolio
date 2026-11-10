import { Apple, ExternalLink, Play } from "lucide-react";

const projects = [
  {
    title: "Chun Wo Workforce Platform",
    company: "Appnovation",
    period: "2026",
    role: "Full Stack",
    description:
      "Construction workforce apps where site managers coordinate foremen and workers: account creation, worker registration (in-app and via WhatsApp), job posting, offers, and scheduling across a React Native mobile app, a React web app, and the Node.js services behind both. Designed the AWS architecture for a bilingual WhatsApp AI assistant on Amazon Bedrock.",
    highlight: "Cut the AWS bill 77%, from $291 to $66 per month",
    tags: ["React Native", "Expo", "React", "Node.js", "Amazon Bedrock", "AWS"],
    links: [],
  },
  {
    title: "Phoenix & Raven",
    company: "Phoenix Digital Health",
    period: "2025",
    role: "Sole Developer & Lead",
    description:
      "Two men's and women's health apps built from a single Turborepo + pnpm monorepo with shared types, utilities, and API layers. Orders and re-orders, Stream Chat messaging between patients, doctors, and support, push notifications, and release engineering with EAS Build, OTA updates, and GitHub Actions.",
    highlight: "Took both apps from zero to both app stores in three months",
    tags: ["React Native", "TypeScript", "Turborepo", "EAS", "Datadog"],
    links: [
      {
        label: "Phoenix",
        icon: Apple,
        href: "https://apps.apple.com/ca/developer/phoenix-digital-health-inc/id1837202930",
      },
      {
        label: "Raven",
        icon: Apple,
        href: "https://apps.apple.com/ca/app/raven-health-tracker/id6751854257",
      },
      {
        label: "Raven",
        icon: Play,
        href: "https://play.google.com/store/apps/details?id=com.phoenixhealth.raven",
      },
    ],
  },
  {
    title: "NFL App (Official)",
    company: "Apply Digital",
    period: "2021 – 2025",
    role: "Senior Developer",
    description:
      "Fan-facing features in a large React Native monorepo. Replaced on-device image storage with a caching layer, trimmed redundant shared modules, lazy-loaded heavier screens, and held the bar on TypeScript standards through code review and mentoring.",
    highlight: "Serves over 5 million weekly active users in season",
    tags: ["React Native", "TypeScript", "Monorepo", "Performance"],
    links: [
      {
        label: "App Store",
        icon: Apple,
        href: "https://nfl.smart.link/bv7pvjn28?site_id=ndc_nav&creative_id=apps_ios",
      },
      {
        label: "Play Store",
        icon: Play,
        href: "https://nfl.smart.link/xl82pxzgn?site_id=ndc_nav&creative_id=apps_android",
      },
    ],
  },
  {
    title: "Gather Investing",
    company: "Apply Digital",
    period: "2021 – 2025",
    role: "Project Lead",
    description:
      "Fintech trading and subscriptions app. Led a team of five from foundations to client handover: networking and auth layers, reusable hooks and providers, standardized data flow over REST and GraphQL, and subscription and payment flows.",
    highlight: "Led a team of five through to client handover",
    tags: ["React Native", "TypeScript", "GraphQL", "REST"],
    links: [
      {
        label: "App Store",
        icon: Apple,
        href: "https://apps.apple.com/us/app/gather-investing/id1580423069",
      },
      {
        label: "Play Store",
        icon: Play,
        href: "https://play.google.com/store/apps/details?id=com.gatherinvesting.app",
      },
    ],
  },
  {
    title: "Disney StudioOne",
    company: "Apply Digital",
    period: "2021 – 2025",
    role: "Project Lead",
    description:
      "An internal iPad-first dashboard for reviewing production statistics through data visualization and reporting. Owned delivery end to end: milestone planning, work breakdown, dependency coordination, and architecture decisions.",
    highlight: "Led a mobile team of five",
    tags: ["SwiftUI", "React Native", "iPad", "Data Visualization"],
    links: [],
  },
  {
    title: "Skiin Health",
    company: "Myant",
    period: "2019 – 2021",
    role: "Mobile Developer",
    description:
      "A wearable health app. Built the Bluetooth LE layer against the garment's firmware (pairing, connection lifecycle, background transitions) and synced ECG, heart-rate, and activity data to the backend over GraphQL.",
    highlight: "Real-time ECG and heart-rate sync from smart textiles",
    tags: ["React Native", "Bluetooth LE", "GraphQL", "Sentry"],
    links: [
      {
        label: "App Store",
        icon: Apple,
        href: "https://apps.apple.com/ca/app/skiin-connected-life/id1485314558",
      },
      {
        label: "Play Store",
        icon: Play,
        href: "https://play.google.com/store/apps/details?id=com.myantskiin",
      },
    ],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Work</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Apps I&rsquo;ve built and led, from sports and fintech to healthcare
          and construction. Most of them are live in the stores.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="gradient-border p-6 card-hover flex flex-col text-left"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <span className="text-xs text-muted-foreground">
                  {project.period}
                </span>
              </div>
              <p className="text-sm text-primary mb-4">
                {project.company} &middot; {project.role}
              </p>

              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>

              <p className="text-sm font-medium mb-4 border-l-2 border-primary pl-3">
                {project.highlight}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagKey) => (
                  <span
                    key={tagKey}
                    className="px-3 py-1 text-xs rounded-full bg-secondary/70 text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-auto pt-2">
                  {project.links.map((link, linkKey) => (
                    <a
                      key={linkKey}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      <link.icon className="h-4 w-4" />
                      {link.label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const datablogs = [
  {
    id: 1,
    title: "Responsive Design Best Practices",
    date: "May 20, 2025",
    content: [
      "Responsive design ensures your site looks great on any device, from mobile phones to large desktop monitors.",
      "Use flexible grids and fluid images to adapt seamlessly to varying screen sizes.",
      "Test breakpoints thoroughly to maintain usability across common device widths.",
      "Optimize media queries to prevent unnecessary reflows and improve performance."
    ],
    tags: ["web", "responsive", "css", "design"],
    relatedPosts: [
      { category: "Web Development", date: "May 18, 2025", title: "CSS Grid vs. Flexbox: When to Use Which?" },
      { category: "UI Design", date: "April 30, 2025", title: "Designing Mobile-First Interfaces" },
      { category: "Performance", date: "March 12, 2025", title: "Lazy Loading Images for Faster Page Loads" }
    ],
    comments: [
      { author: "Emily R.", date: "May 21, 2025", text: "Great tips on flexible grids! Helped me fix layout issues on my app." },
      { author: "Daniel K.", date: "May 22, 2025", text: "Testing breakpoints saved me debugging hours—thanks for the advice!" }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 2,
    title: "Optimizing Web Performance",
    date: "May 18, 2025",
    content: [
      "Web performance directly impacts user experience and SEO rankings.",
      "Minify CSS and JavaScript files to reduce payload size and improve load times.",
      "Use HTTP/2 and CDN services to accelerate asset delivery globally.",
      "Leverage browser caching and prefetching for critical resources."
    ],
    tags: ["performance", "seo", "web", "optimization"],
    relatedPosts: [
      { category: "Performance", date: "May 15, 2025", title: "Image Compression Techniques" },
      { category: "DevOps", date: "April 25, 2025", title: "Setting Up a CDN in Minutes" },
      { category: "Security", date: "March 30, 2025", title: "HTTPS and HTTP/2 Benefits" }
    ],
    comments: [
      { author: "Sara T.", date: "May 19, 2025", text: "Minification tip was spot on—cut my JS bundle by 40%!" },
      { author: "Michael L.", date: "May 20, 2025", text: "Great overview of caching strategies." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 3,
    title: "Introduction to ARIA Roles",
    date: "May 15, 2025",
    content: [
      "ARIA roles enhance accessibility by informing assistive technologies about element behaviors.",
      "Use role attributes judiciously to avoid redundant or conflicting information.",
      "Landmark roles like banner, navigation, and main improve screen-reader navigation.",
      "Test your pages with aXe or Lighthouse to catch ARIA issues early."
    ],
    tags: ["accessibility", "aria", "a11y", "html"],
    relatedPosts: [
      { category: "Accessibility", date: "May 10, 2025", title: "Keyboard Navigation Best Practices" },
      { category: "UI Design", date: "April 22, 2025", title: "Color Contrast for Readability" },
      { category: "UX Research", date: "March 18, 2025", title: "User Testing for Accessibility" }
    ],
    comments: [
      { author: "Olivia W.", date: "May 16, 2025", text: "ARIA roles section clarified a lot of confusion I had." },
      { author: "Liam J.", date: "May 17, 2025", text: "Using Lighthouse helped me fix missing roles quickly." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 4,
    title: "Effective Content Strategy",
    date: "May 12, 2025",
    content: [
      "A robust content strategy aligns business goals with user needs.",
      "Create an editorial calendar to maintain consistency and avoid last-minute rushes.",
      "Leverage keyword research to inform topic selection and improve discoverability.",
      "Measure content performance with analytics to refine your future strategy."
    ],
    tags: ["content", "strategy", "marketing", "seo"],
    relatedPosts: [
      { category: "Marketing", date: "May 5, 2025", title: "Keyword Research Tools Compared" },
      { category: "Web Development", date: "April 29, 2025", title: "Integrating CMS with Static Sites" },
      { category: "UX Research", date: "March 25, 2025", title: "Analyzing User Engagement Metrics" }
    ],
    comments: [
      { author: "Nathan S.", date: "May 13, 2025", text: "Editorial calendar tip saved me from content chaos!" },
      { author: "Ava M.", date: "May 14, 2025", text: "Great insights on measuring performance." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 5,
    title: "Branding Through Design Systems",
    date: "May 8, 2025",
    content: [
      "Design systems ensure brand consistency across products and teams.",
      "Document components, patterns, and brand guidelines in a living style guide.",
      "Use tokens for spacing, color, and typography to simplify theming.",
      "Automate visual regression tests to catch unintended style changes."
    ],
    tags: ["design-systems", "branding", "ui", "workflow"],
    relatedPosts: [
      { category: "Design Systems", date: "May 1, 2025", title: "Building a Theming Architecture" },
      { category: "UI Design", date: "April 20, 2025", title: "Component Library with React" },
      { category: "DevOps", date: "March 10, 2025", title: "Visual Regression Testing Tools" }
    ],
    comments: [
      { author: "Sophia H.", date: "May 9, 2025", text: "Living style guide integration was very helpful." },
      { author: "Ethan P.", date: "May 10, 2025", text: "Automated regression tests saved us from surprises." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 6,
    title: "SEO Fundamentals for Developers",
    date: "May 5, 2025",
    content: [
      "SEO isn't just for marketers—developers play a key role in on-page optimization.",
      "Ensure semantic HTML structure to help search engines understand your content.",
      "Add meaningful meta titles and descriptions to improve click-through rates.",
      "Generate XML sitemaps and use robots.txt to guide crawlers effectively."
    ],
    tags: ["seo", "web", "developers", "html"],
    relatedPosts: [
      { category: "SEO", date: "April 28, 2025", title: "Fixing Redirect Chains" },
      { category: "Performance", date: "April 15, 2025", title: "Core Web Vitals Explained" },
      { category: "Marketing", date: "March 5, 2025", title: "Link Building Strategies" }
    ],
    comments: [
      { author: "Isabella L.", date: "May 6, 2025", text: "Semantic HTML advice improved our site's rankings." },
      { author: "Benjamin R.", date: "May 7, 2025", text: "Sitemap generation tip worked like a charm." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 7,
    title: "Modern JavaScript Frameworks",
    date: "May 2, 2025",
    content: [
      "Frameworks like React, Vue, and Svelte streamline UI development.",
      "Choose a framework based on community support, performance, and learning curve.",
      "Implement state management wisely to avoid prop drilling or global stores abuse.",
      "Optimize bundle size with dynamic imports and tree shaking."
    ],
    tags: ["javascript", "frameworks", "react", "vue"],
    relatedPosts: [
      { category: "Web Development", date: "April 22, 2025", title: "State Management Patterns" },
      { category: "Performance", date: "April 10, 2025", title: "Code Splitting Strategies" },
      { category: "UX Research", date: "March 22, 2025", title: "Choosing the Right Framework" }
    ],
    comments: [
      { author: "Mia C.", date: "May 3, 2025", text: "Dynamic imports cut our initial load time by a lot." },
      { author: "Noah B.", date: "May 4, 2025", text: "Great overview of framework trade-offs." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 8,
    title: "E-commerce Trends in 2025",
    date: "April 30, 2025",
    content: [
      "AI-powered personalization is transforming product recommendations.",
      "Headless commerce architectures decouple frontend and backend for flexibility.",
      "Progressive Web Apps (PWAs) offer native-like experiences and offline support.",
      "Social commerce integration boosts discoverability on social platforms."
    ],
    tags: ["ecommerce", "ai", "pwa", "trends"],
    relatedPosts: [
      { category: "Web Development", date: "April 20, 2025", title: "Building a PWA from Scratch" },
      { category: "AI", date: "March 25, 2025", title: "Personalization Engines Explained" },
      { category: "Marketing", date: "March 10, 2025", title: "Social Commerce Platforms" }
    ],
    comments: [
      { author: "Charlotte D.", date: "May 1, 2025", text: "We implemented PWA and saw 20% engagement lift." },
      { author: "Oliver F.", date: "May 2, 2025", text: "Headless setup increased our dev speed." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  },

  {
    id: 9,
    title: "Collaboration Tools for Remote Teams",
    date: "April 28, 2025",
    content: [
      "Slack, Teams, and Discord enable real-time communication across geographies.",
      "Use tools like Miro and Figma for collaborative whiteboarding and design reviews.",
      "Automate workflows with Zapier or n8n to reduce manual tasks and errors.",
      "Regular video standups foster team cohesion and accountability."
    ],
    tags: ["remote", "tools", "collaboration", "productivity"],
    relatedPosts: [
      { category: "Productivity", date: "April 15, 2025", title: "Asynchronous Communication Best Practices" },
      { category: "Web Development", date: "March 30, 2025", title: "Integrating APIs in Zapier" },
      { category: "UX Research", date: "March 5, 2025", title: "Design Critiques Remotely" }
    ],
    comments: [
      { author: "Amelia G.", date: "April 29, 2025", text: "Figma FigJam boards have made ideation so much easier." },
      { author: "Elijah N.", date: "April 30, 2025", text: "Zapier automation saved us hours weekly." }
    ],
    imageUrl: "../img/blogImg/img1.jpg"
  }
];

export default datablogs;

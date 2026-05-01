export interface Project {
  id: string;
  title: string;
  description: string;
  problemShort: string;
  solutionShort: string;
  resultShort: string;
  detailedProblem: string;
  detailedSolution: string;
  steps: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  impact: string;
  stack: string[];
  metric: string;
  metricLabel: string;
  category: string;
  image: string;
  screenshots: string[];
  url: string;
}

export const allProjects: Project[] = [
  // Automation (3 Projects)
  {
    id: "auto-sync",
    title: "Supply Chain Sync",
    description: "Automated inventory synchronization across multiple warehouses and marketplaces.",
    problemShort: "Manual inventory updates causing overselling.",
    solutionShort: "Real-time webhook-driven sync engine.",
    resultShort: "Zero overselling errors in 12 months.",
    detailedProblem: "Client was manually updating inventory across Shopify, Amazon, and eBay, leading to frequent errors.",
    detailedSolution: "Built a custom middleware that listens to webhooks and syncs inventory in under 2 seconds.",
    steps: [{ title: "Audit", desc: "Mapping data flows." }, { title: "Build", desc: "Node.js middleware." }, { title: "Test", desc: "Load testing." }],
    features: [{ title: "Live Sync", desc: "Instant updates." }],
    impact: "Saved 20 hours/week in manual work.",
    stack: ["Node.js", "Redis"],
    metric: "100%",
    metricLabel: "Sync Accuracy",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    screenshots: [],
    url: "#"
  },
  {
    id: "invoice-bot",
    title: "Billing Automation",
    description: "Automated invoicing system for high-volume service providers.",
    problemShort: "Invoicing taking days to process manually.",
    solutionShort: "Automated PDF generation and payment tracking.",
    resultShort: "Invoices sent 5 minutes after job completion.",
    detailedProblem: "Manual billing was delayed by weeks, hurting cash flow.",
    detailedSolution: "Integrated Stripe with a custom PDF generator to automate the entire billing lifecycle.",
    steps: [], features: [], impact: "Improved cash flow by 40%.", stack: ["Stripe", "Puppeteer"],
    metric: "-95%",
    metricLabel: "Time Saved",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
    screenshots: [],
    url: "#"
  },
  {
    id: "lead-gen-auto",
    title: "Smart Lead Routing",
    description: "Automated lead qualification and distribution for sales teams.",
    problemShort: "Slow response time to new inquiries.",
    solutionShort: "AI-driven lead scoring and instant routing.",
    resultShort: "3x faster initial response time.",
    detailedProblem: "Leads were sitting in a mailbox for hours before being seen.",
    detailedSolution: "Built an AI filter that scores leads and pings the right rep via Slack instantly.",
    steps: [], features: [], impact: "Increased lead conversion by 22%.", stack: ["OpenAI", "Slack"],
    metric: "3x",
    metricLabel: "Response Speed",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    screenshots: [],
    url: "#"
  },
  // Full stack (3 Projects)
  {
    id: "eng-welfare",
    title: "Engineering Welfare Association",
    description: "A comprehensive support network specifically designed for the engineering community in India.",
    problemShort: "Lack of a unified support system for Indian engineers.",
    solutionShort: "A mutual aid hub offering certifications, mentorship, and security schemes.",
    resultShort: "Secured long-term well-being for engineers and families.",
    detailedProblem: "The engineering community in India faced fragmented access to career growth tools, professional mentorship, and a lack of specialized financial protection tailored to industry-specific risks. Professional guidance and liability support were often unavailable for complex on-site ventures.",
    detailedSolution: "Developed a comprehensive platform that integrates technical certifications, professional networking, project insurance schemes, and around-the-clock liability support. The site acts as a mutual aid hub aimed at securing the long-term well-being of engineers and their families.",
    steps: [
      { title: "Network", desc: "Building a robust community of professionals." },
      { title: "Protect", desc: "Implementing financial and liability security schemes." },
      { title: "Advance", desc: "Providing career tools and technical certifications." }
    ],
    features: [
      { title: "24/7 Support", desc: "Round-the-clock technical assistance." },
      { title: "Financial Shield", desc: "Project insurance and security schemes." },
      { title: "Career Growth", desc: "Mentorship and certification programs." }
    ],
    impact: "Acts as a vital mutual aid hub, securing the long-term well-being of engineers and their families across India.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    metric: "10,000+",
    metricLabel: "Engineers Supported",
    category: "Full stack",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a4e5190?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://www.engwelfare.com/"
  },
  {
    id: "hire-in-minutes",
    title: "Hire In Minutes",
    description: "A modern employment ecosystem that prioritises practical competency over traditional CVs by using a verified skill passport.",
    problemShort: "Traditional CV-based hiring is slow and inaccurate.",
    solutionShort: "Verified skill passports and AI-driven assessments for instant hiring.",
    resultShort: "Reduced hiring time by 60%.",
    detailedProblem: "Recruitment cycles are often plagued by slow screening processes and a reliance on traditional CVs that may not accurately reflect technical proficiency. This leads to inefficient hiring and missed opportunities for skilled talent.",
    detailedSolution: "We streamlined the recruitment cycle through automated screening and industry-standard assessments. Candidates demonstrate their expertise via digital badges and AI-driven insights, allowing recruiters to fill roles based on proven technical proficiency.",
    steps: [
      { title: "Verified Passport", desc: "Creating a secure, skill-based identity for candidates." },
      { title: "AI Assessments", desc: "Automated industry-standard screening and scoring." },
      { title: "Talent Match", desc: "Connecting pre-vetted talent with the right employers." }
    ],
    features: [
      { title: "Skill Passport", desc: "Digital badges for proven technical proficiency." },
      { title: "Pre-vetted Pools", desc: "Direct access to high-quality internships and roles." },
      { title: "AI Insights", desc: "Deep metrics on candidate competency and fit." }
    ],
    impact: "Ensures roles are filled based on proven technical proficiency, significantly improving transparency and efficiency for both job seekers and recruiters.",
    stack: ["Next.js", "OpenAI", "PostgreSQL", "Tailwind"],
    metric: "60%",
    metricLabel: "Faster Hiring",
    category: "Full stack",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507679799987-c7377bc5620e?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://www.hireinminutes.in/"
  },
  {
    id: "print-maania",
    title: "PrintMaania",
    description: "A web-based e-commerce platform focused on selling custom printed products such as clothing and merchandise.",
    problemShort: "Limited access to personalized merchandise through offline stores.",
    solutionShort: "A seamless e-commerce platform for browsing, customizing, and ordering printed items.",
    resultShort: "Efficient online shopping experience for custom merchandise.",
    detailedProblem: "Users often find it difficult to source high-quality, custom-printed clothing and merchandise through local stores. The lack of a unified digital platform makes personalizing and ordering these items a fragmented and time-consuming process.",
    detailedSolution: "We built a modern e-commerce system that handles product listings, category filtering, and cart management. Users can browse a variety of products, select designs, and place orders through a streamlined shopping flow designed for scalability.",
    steps: [
      { title: "Curate", desc: "Browsing a diverse range of high-quality apparel and merchandise." },
      { title: "Personalize", desc: "Selecting and customizing designs for individual products." },
      { title: "Order", desc: "Seamless cart management and efficient order processing." }
    ],
    features: [
      { title: "Product Filtering", desc: "Easily find items by category, style, or print design." },
      { title: "Cart Management", desc: "Persistent shopping cart with real-time price updates." },
      { title: "Scalable Core", desc: "Built to handle thousands of unique product combinations." }
    ],
    impact: "Provides a direct-to-consumer platform for personalized items, removing the dependency on offline stores and manual order tracking.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    metric: "500+",
    metricLabel: "Unique Designs",
    category: "Full stack",
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1529139513065-07b2ee429e78?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://printmaania-qhrl.vercel.app/"
  },
  // E-commerce (3 Projects)
  {
    id: "foreverbuy",
    title: "ForeverBuy E-commerce",
    description: "A comprehensive e-commerce web application designed to provide a complete online shopping experience with product browsing, selection, and checkout functionality.",
    problemShort: "Fragmented shopping experiences for premium goods.",
    solutionShort: "A streamlined storefront with detailed product views and efficient checkout.",
    resultShort: "Optimized user journey for online purchases.",
    detailedProblem: "Users often encounter friction in traditional online shopping flows, from disorganized product listings to complex checkout processes. This leads to high abandonment rates and poor user engagement.",
    detailedSolution: "We built a responsive e-commerce platform inspired by modern standards. It features categorized product listings, detailed views, and an interactive cart system. The frontend design focuses on user interaction and basic online transaction workflows for a seamless experience.",
    steps: [
      { title: "Curate", desc: "Organizing diverse product catalogs into intuitive categories." },
      { title: "Engage", desc: "Designing interactive product detail pages with rich media." },
      { title: "Convert", desc: "Implementing a streamlined, focus-first checkout flow." }
    ],
    features: [
      { title: "Smart Listings", desc: "Dynamic filtering and categorization for easy product discovery." },
      { title: "Interactive Cart", desc: "Real-time cart updates with persistent state management." },
      { title: "Responsive Flow", desc: "Seamless shopping experience optimized for all device types." }
    ],
    impact: "Demonstrates a deep practical understanding of real-world e-commerce architecture, focusing on frontend conversion and smooth user interaction.",
    stack: ["React", "Tailwind CSS", "Context API", "Vite"],
    metric: "90%",
    metricLabel: "User Satisfaction",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://foreverbuy.in/"
  },
  {
    id: "fort4-tech",
    title: "Fort4 Tech Site",
    description: "A visually immersive architectural portfolio that emphasizes craftsmanship through motion.",
    problemShort: "Generic template site scaring off premium clients.",
    solutionShort: "Motion-driven custom editorial experience.",
    resultShort: "50% increase in high-net-worth inquiries.",
    detailedProblem: "A premium architecture firm was being perceived as a budget option due to a dated and generic website.",
    detailedSolution: "We created a bespoke digital experience that uses immersive motion and large-scale visuals to mirror the firm's architectural craft.",
    steps: [
      { title: "Curate", desc: "Selected high-impact project photography and assets." },
      { title: "Compose", desc: "Built a custom layout focused on visual storytelling." },
      { title: "Animate", desc: "Integrated GSAP for smooth, intentional transitions." }
    ],
    features: [
      { title: "Headless CMS", desc: "Easy updates for the internal team via Sanity." },
      { title: "Fast Load", desc: "98+ PageSpeed score even with high-res imagery." },
      { title: "Immersive", desc: "Adaptive layouts that look perfect on all screens." }
    ],
    impact: "High-net-worth project inquiries increased by 50% and total site engagement time doubled.",
    stack: ["Astro", "Sanity", "GSAP"],
    metric: "50%",
    metricLabel: "Inquiry Growth",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "#"
  },
  {
    id: "ecommerce-admin",
    title: "E-commerce",
    description: "A centralized admin dashboard designed to manage the backend operations of an online store, featuring product management, order tracking, and sales analytics.",
    problemShort: "Fragmented and inefficient manual management of store operations.",
    solutionShort: "A centralized control system for products, inventory, and order fulfillment.",
    resultShort: "Scalable and organized backend operations for store administrators.",
    detailedProblem: "Store owners often struggle with managing large product catalogs and tracking orders through multiple manual systems. This fragmentation leads to inventory errors and slow response times to customer orders.",
    detailedSolution: "We developed a modern admin panel architecture featuring a sidebar layout, data tables, and analytics sections. It provides full control over product management, inventory categorization, and real-time sales tracking through a structured, visual interface, deployed on Netlify.",
    steps: [
      { title: "Catalog Schema", desc: "Implementing robust data structures for products and categories." },
      { title: "Ops Flow", desc: "Building streamlined workflows for order processing and tracking." },
      { title: "Analytics Sync", desc: "Integrating visual components to track revenue and sales metrics." }
    ],
    features: [
      { title: "Product Management", desc: "Full CRUD capabilities for the entire store catalog." },
      { title: "Order Tracking", desc: "Live status updates and fulfillment management system." },
      { title: "Sales Dashboard", desc: "Visualized metrics for revenue, activity, and performance." }
    ],
    impact: "Reflects real-world admin architecture, significantly reducing the manual overhead required to manage a scalable e-commerce business.",
    stack: ["React", "Redux", "Tailwind CSS", "Node.js"],
    metric: "100%",
    metricLabel: "Admin Control",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://ecommerce-admin-view.netlify.app/"
  },
  // Dashboards (3 Projects)
  {
    id: "coupon-dashboard",
    title: "Coupon Management Dashboard",
    description: "A specialized dashboard application designed to manage and visualize discount coupons efficiently, featuring real-time tracking and campaign control.",
    problemShort: "Fragmented and manual tracking of promotional discount campaigns.",
    solutionShort: "An interactive React dashboard for centralized coupon lifecycle management.",
    resultShort: "Full control over active and expired promotional campaigns.",
    detailedProblem: "Managing hundreds of discount coupons across different campaigns often leads to expiration errors and a lack of visibility into usage status. Traditional spreadsheets fail to provide the real-time interaction needed for dynamic marketing campaigns.",
    detailedSolution: "We built a specialized React dashboard with a component-based architecture. It provides a structured interface for creating, updating, and tracking coupons with details like discount value, expiration date, and usage status, delivering a responsive experience across devices.",
    steps: [
      { title: "Architect", desc: "Designing a scalable component structure for coupon entities." },
      { title: "State Sync", desc: "Implementing dynamic state management for real-time updates." },
      { title: "Visualize", desc: "Structuring data into intuitive layouts for quick monitoring." }
    ],
    features: [
      { title: "Campaign Control", desc: "Full lifecycle management from creation to expiration." },
      { title: "Status Tracking", desc: "Instant visibility into usage metrics and coupon health." },
      { title: "Responsive UI", desc: "Optimized for seamless monitoring across all devices." }
    ],
    impact: "Demonstrates a practical implementation of real-world dashboard functionality, significantly reducing administrative overhead for marketing teams.",
    stack: ["React", "Context API", "Tailwind CSS", "Framer Motion"],
    metric: "500+",
    metricLabel: "Coupons Managed",
    category: "Dashboards",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://react-kft3.vercel.app/"
  },
  {
    id: "pg-management",
    title: "PG Management Dashboard",
    description: "A centralized web application designed to simplify the administration of rental properties such as hostels and shared accommodations.",
    problemShort: "Manual and disorganized record-keeping for rental properties.",
    solutionShort: "An integrated dashboard for tracking tenants, occupancy, and financial performance.",
    resultShort: "Improved operational efficiency and real-time property visibility.",
    detailedProblem: "Hostel and PG owners often struggle with fragmented manual record-keeping for tenant data, room availability, and rent payments. This lack of a unified system leads to occupancy errors and delayed financial tracking.",
    detailedSolution: "We developed a centralized management system that enables real-time monitoring of room availability, tenant details, and financial records. The dashboard features an intuitive navigation and an interactive interface to track dues and property performance, deployed on Vercel for maximum reliability.",
    steps: [
      { title: "Data Schema", desc: "Mapping complex relationships between tenants, rooms, and payments." },
      { title: "Dashboard Sync", desc: "Building real-time status indicators for room occupancy." },
      { title: "Financial Flow", desc: "Automating rent tracking and dues notification logic." }
    ],
    features: [
      { title: "Occupancy Maps", desc: "Visual overview of room availability across multiple properties." },
      { title: "Tenant Profiles", desc: "Centralized storage for tenant documents and payment history." },
      { title: "Financial Insights", desc: "Deep metrics on monthly collection and pending dues." }
    ],
    impact: "Significantly reduces administrative overhead and manual record-keeping, improving overall property management efficiency.",
    stack: ["React", "Firebase", "Tailwind CSS", "Vite"],
    metric: "95%",
    metricLabel: "Admin Efficiency",
    category: "Dashboards",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1454165833767-027ff33026b8?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://pg-management-pg-manager.vercel.app/"
  },
  {
    id: "analytics-insight",
    title: "Analytics Insight Dashboard",
    description: "A specialized analytics dashboard designed to centralize and visualize marketing data through interactive charts and real-time updates.",
    problemShort: "Fragmented data sources making performance analysis difficult.",
    solutionShort: "A centralized analytics platform for automated reporting and trend visualization.",
    resultShort: "Faster data-driven decision making with actionable insights.",
    detailedProblem: "Marketing teams often struggle to consolidate data from multiple sources, leading to hours of manual reporting and a high risk of error. Without a centralized view, identifying performance trends becomes nearly impossible.",
    detailedSolution: "We built a dashboard-based application that centralizes data into interactive charts and structured reports. The system focuses on clear visualization, allowing users to monitor key metrics, analyze trends, and make data-driven decisions efficiently.",
    steps: [
      { title: "Aggregate", desc: "Connecting multiple data streams into a unified backend." },
      { title: "Visualize", desc: "Designing high-impact charts for immediate data interpretation." },
      { title: "Automate", desc: "Implementing real-time update logic to eliminate manual handling." }
    ],
    features: [
      { title: "Interactive Charts", desc: "Dynamic visualization of complex marketing metrics." },
      { title: "Trend Analysis", desc: "Built-in tools to identify performance patterns over time." },
      { title: "Custom Views", desc: "Organized data layouts tailored to specific business needs." }
    ],
    impact: "Eliminates the need for manual data handling, demonstrating a practical implementation of modern analytics systems used in real-world business environments.",
    stack: ["Next.js", "D3.js", "Tailwind CSS", "Recoil"],
    metric: "3x",
    metricLabel: "Reporting Speed",
    category: "Dashboards",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&w=1200&q=80"
    ],
    url: "https://dashthis.com/"
  }
];

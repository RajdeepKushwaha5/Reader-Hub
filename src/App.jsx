import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const articles = [
  {
    id: 'day-0',
    category: 'Evolution of Systems',
    date: 'Day 0',
    readTime: '3 min read',
    title: 'How It All Started: From Standalone to Servers',
    excerpt: 'Before the Internet, things were simple. Every user had their own copy of the software. Then the Internet happened...',
    image: '/images/day-0.jpg',
    content: [
      { type: 'p', text: 'Before the Internet, things were simple.' },
      { type: 'p', text: 'You wrote a piece of code, ran it on your own machine, and used it. That was a **standalone application**.' },
      { type: 'p', text: 'If someone else needed it, you just zipped the software or shipped it via CD / floppy disk. They installed it on their system, and it used their own RAM, CPU, and hard disk.' },
      { type: 'p', text: 'Every user had their own copy of the software. No sharing. No scale. No complexity.' },
      { type: 'p', text: 'Then the Internet happened.', style: { fontWeight: 600, marginTop: '32px' } },
      { type: 'p', text: 'At first, it was just a faster way to transfer software. But soon people realized something powerful:' },
      { type: 'quote', text: 'What if I keep the software on my machine, and others just send requests to it?' },
      { type: 'p', text: 'Using the **HTTP protocol**, users from anywhere in the world could send a request, and the program would process it and send back a response. Hence the program would use only one computer\'s resource. We call it a **server**. Since it serves the request.' },
      { type: 'p', text: 'That\'s how **web applications** (websites) were born.' },
      { type: 'p', text: 'Now one application was serving thousands or even millions of users all around the world and the single computer called server is used and all its resource is being shared like the same CPU, memory, disk, and network.' },
      { type: 'p', text: 'And that single change is exactly why **System Design** came into existence.', style: { color: 'var(--accent-soft)', fontWeight: 600 } },
      { type: 'p', text: 'We\'ll break this down slowly in upcoming posts.' }
    ]
  },
  {
    id: 'day-1',
    category: 'Networking Basics',
    date: 'Day 1',
    readTime: '5 min read',
    title: 'Identity & Discovery: The Story of IP and DNS',
    image: '/images/day-1.jpeg',
    content: [
      { type: 'p', text: 'How computer-A communicate to computer-B(server), in early phase.' },
      { type: 'h2', text: 'Every Server Has an Identity: IP Address' },
      { type: 'p', text: 'Every computer connected to the Internet has a unique identifier called an **IP Address** — like 192.168.1.5 or 142.250.183.14 — which tells you the exact machine you want to talk to.' },
      { type: 'p', text: 'But it\'s difficult for humans to remember numbers. Imagine this:' },
      {
        type: 'list', items: [
          'You want to visit Google',
          'You must remember: 142.250.183.14',
          'For Facebook, another number',
          'For Amazon, another number'
        ]
      },
      { type: 'h2', text: 'First Solution: HOSTS.TXT' },
      { type: 'p', text: 'To solve this problem, an early solution called **HOSTS.TXT** was introduced:' },
      {
        type: 'list', items: [
          'A simple text file (like an Excel sheet)',
          'Stored mappings like:'
        ]
      },
      { type: 'pre', text: '142.250.183.14    google\n157.240.18.35     facebook' },
      { type: 'p', text: 'When a user typed a name like google, the computer:' },
      {
        type: 'list', items: [
          'Looked into the local HOSTS.TXT file',
          'Found the corresponding IP address',
          'Connected to that server'
        ]
      },
      { type: 'p', text: 'But this won\'t last long. As the Internet grew rapidly, this approach became impossible to manage:', style: { marginTop: '32px' } },
      {
        type: 'list', items: [
          'Millions of servers were added',
          'File size kept increasing',
          'Name conflicts occurred (same name for different IPs)',
          'Constant manual updates were required'
        ]
      },
      { type: 'h2', text: 'Birth of DNS (Domain Name System)' },
      { type: 'p', text: 'To solve this scalability problem, **DNS** was invented.' },
      { type: 'p', text: 'Instead of one giant list, DNS introduced a **distributed, hierarchical system**.' },
      { type: 'h2', text: 'DNS Hierarchy' },
      {
        type: 'list', items: [
          'Root (.) → Locates top-level domains',
          'TLD (.com, .org, .edu) → Directs to domain owners',
          'Domain (google, amazon) → Points to servers',
          'Subdomain (maps, mail) → Specific services'
        ]
      },
      { type: 'p', text: 'Each level only knows the next level.', style: { fontStyle: 'italic', color: 'var(--text-secondary)' } }
    ]
  },
  {
    id: 'day-2',
    category: 'Protocols',
    date: 'Day 2',
    readTime: '8 min read',
    title: 'The Protocol Revolution: Understanding HTTP & HTTPS',
    image: '/images/day-2.jpg',
    content: [
      { type: 'p', text: 'Have you ever wondered why http:// or https:// appears when you visit a web application? What does it mean, and why does it exist?' },
      { type: 'h2', text: '1. The Early Days: The Telnet Era' },
      { type: 'p', text: 'Before **HTTP** and **HTTPS** existed, people accessed data on servers by typing IP addresses manually. They used a tool called **Telnet**.' },
      { type: 'h2', text: 'What was Telnet?' },
      { type: 'p', text: 'Telnet was a program that let your computer connect directly to a remote server. When you typed telnet in the command line, you were telling your operating system: "Please start the Telnet client program."' },
      { type: 'p', text: 'Once started, Telnet took over your screen. It connected your keyboard directly to the remote server. Whatever you typed wasn\'t running on your computer anymore — it was running on the server.' },
      {
        type: 'list', items: [
          'Command: telnet 192.168.1.5',
          'Meaning: "Start the Telnet program and connect me to 192.168.1.5."'
        ]
      },
      { type: 'p', text: 'However, this system had two major problems: **Usability** and **Security**.' },
      { type: 'h2', text: '2. The Usability Problem (Why HTTP Was Created)' },
      { type: 'p', text: 'The first problem was that the early internet was boring and disconnected.' },
      { type: 'h2', text: 'The "Dead End" Issue' },
      { type: 'p', text: 'Imagine you\'re on a NASA server reading a document about space. The document mentions "The Moon." If you wanted to read about "Mars," you had to:' },
      {
        type: 'list', items: [
          'Disconnect from the current file.',
          'Search for the IP address or file name for the Mars document.',
          'Connect again to download it.'
        ]
      },
      { type: 'p', text: 'It was a dead end. There were no links.' },
      { type: 'h2', text: 'The Solution: HTTP (HyperText Transfer Protocol)' },
      { type: 'p', text: 'Tim Berners-Lee invented **HTTP** to solve this. The "H" stands for HyperText.' },
      {
        type: 'list', items: [
          'Hyperlinks: You\'re reading about NASA, you see the word Moon in blue, you click it, and you\'re instantly on the new page.',
          'Multimedia: Before HTTP, the internet was text only. HTTP let the browser say: "Give me the text, AND the logo.png, AND the font file." This let us build web pages that looked like magazines.'
        ]
      },
      { type: 'h2', text: 'The Technical Win: Statelessness' },
      {
        type: 'list', items: [
          'Old Way (Telnet): Like a phone call. The line stayed open even if you went to get coffee. A server could only handle ~50 people before running out of lines.',
          'New Way (HTTP): It\'s Stateless. The server delivers the page and hangs up immediately. This lets one server handle millions of users at once.'
        ]
      },
      { type: 'h2', text: '3. The Security Problem (Why HTTPS Was Created)' },
      { type: 'p', text: 'The second problem was that the internet was dangerous.' },
      { type: 'h2', text: 'The "Plain Text" Issue' },
      { type: 'p', text: 'In a Telnet or standard HTTP session, data is sent as plain text.' },
      {
        type: 'list', items: [
          'If you typed your password into a Telnet session, it was sent exactly as you typed it.',
          'If a hacker was sitting on the cable between you and the server, they could read your password clearly.'
        ]
      },
      { type: 'h2', text: 'The Solution: HTTPS (HTTP Secure)' },
      { type: 'p', text: 'As people started buying things online, they needed privacy. They created **SSL** (Secure Sockets Layer), which later became **TLS** (Transport Layer Security).' },
      { type: 'h2', text: 'Why Do We Use HTTPS? (The 3 Pillars)' },
      { type: 'p', text: 'HTTPS isn\'t just for "hiding" data. It serves three specific purposes:' },
      {
        type: 'list', items: [
          'Privacy (Encryption): Turns your data into unreadable characters.',
          'Integrity (Anti-Tampering): The data is cryptographically signed. If anyone changes even one bit, your browser blocks the connection.',
          'Identity (Authentication): HTTPS requires an SSL Certificate. Your browser checks this ID with a trusted authority to confirm the server is real.'
        ]
      },
      { type: 'h2', text: '4. The Technical Stack: How It Works' },
      { type: 'p', text: 'When you type https://google.com, two major things happen before any website data is sent.' },
      { type: 'h2', text: 'Part 1: TCP (The Phone Call)' },
      { type: 'p', text: 'Imagine you want to send a 1,000-page book to a friend, but you can only mail one page at a time. **TCP** is the system that numbers every page and demands a receipt for each one.' },
      {
        type: 'list', items: [
          'Sequencing: It numbers packets (1, 2, 3...). If packet 2 arrives after packet 3, TCP reorders them.',
          'Error Correction: If packet 5 is missing, your computer tells the server: "I missed 5. Send it again."'
        ]
      },
      { type: 'h2', text: 'The TCP Handshake' },
      {
        type: 'list', items: [
          'SYN: You say "Hi, I want to talk."',
          'SYN-ACK: Server says "I heard you, I\'m ready."',
          'ACK: You say "Okay, connected."'
        ]
      },
      { type: 'h2', text: 'Part 2: The TLS Handshake (The Secret Code)' },
      { type: 'p', text: 'Now that TCP has connected the line, it\'s still an "open line." We need to start the HTTPS encryption.' },
      { type: 'h2', text: 'The Full Journey' },
      { type: 'p', text: 'When you hit "Enter" on https://google.com, your computer does this in milliseconds:' },
      {
        type: 'list', items: [
          'DNS: "Where is Google?" → 142.250...',
          'TCP Handshake: Connection opens.',
          'TLS Handshake: Google sends its certificate. Your browser creates a secret session key, locks it with Google\'s public key, and sends it back. Google unlocks it with its private key. Encryption is ON.',
          'HTTPS Request: (Encrypted) "Get me /index.html" → (Encrypted) "Here\'s the file."'
        ]
      }
    ]
  },
  {
    id: 'day-3',
    category: 'Architecture',
    date: 'Day 3',
    readTime: '6 min read',
    title: 'The Great Trio: Client, Server, and API',
    image: '/images/day-3.jpeg',
    content: [
      { type: 'p', text: 'Most of you scroll through Reels, watch hours of YouTube, or are reading this right now. But have you ever stopped to think: how does this actually work?' },
      { type: 'p', text: 'Before we dive into the mechanics, let\'s define the three main characters in this story.' },
      { type: 'h2', text: 'The Core Concepts' },
      { type: 'h2', text: 'The Client (The Asker)' },
      { type: 'p', text: 'This is the device or software that starts the communication. It sends a request for data to the server.' },
      {
        type: 'list', items: [
          'Example: Your web browser (Chrome), your mobile phone, or the Instagram app itself.'
        ]
      },
      { type: 'h2', text: 'The Server (The Provider)' },
      { type: 'p', text: 'This is a powerful computer (or system of computers) that stores data and services. It waits for requests, processes them, and serves the content.' },
      {
        type: 'list', items: [
          'Example: A supercomputer sitting in a data center that holds all the YouTube videos.'
        ]
      },
      { type: 'h2', text: 'The API (The Rulebook)' },
      { type: 'p', text: '**API** stands for Application Programming Interface. Think of it as a contract. It tells the client: "If you send a request to this specific URL with this specific data, I promise to send you back that specific result."' },
      { type: 'h2', text: 'The Interaction: The Request-Response Cycle' },
      { type: 'p', text: 'Let\'s visualize this with two machines: Computer A (The Server) and Computer B (The Client). They interact using an API endpoint, for example: https://example.com/api.' },
      { type: 'p', text: 'Here\'s the step-by-step flow of what happens when you click a button:' },
      { type: 'h2', text: 'Step 1: The Request (Client → Server)' },
      { type: 'p', text: 'The client (Computer B) starts the conversation by sending a message over the internet. This message contains three critical pieces of information:' },
      {
        type: 'list', items: [
          'The Address: Where the server lives (URL or IP address).',
          'The Method: What the client wants to do — GET: "Please show me this page." / POST: "Here is some data (like a password), please accept it."',
          'The Data: Specifics needed for the request, such as a User ID, a search term, or login credentials.'
        ]
      },
      { type: 'h2', text: 'Step 2: The Processing (Server Logic)' },
      { type: 'p', text: 'The server (Computer A) receives the request. It doesn\'t just blindly answer; it performs a few checks:' },
      {
        type: 'list', items: [
          'Validation: "Is this client allowed to ask for this?" (Security check).',
          'Fetching: It finds the requested information, often by querying a database.',
          'Formatting: It packages the answer into a format the client can understand.'
        ]
      },
      { type: 'h2', text: 'Step 3: The Response (Server → Client)' },
      { type: 'p', text: 'The server sends a message back to the client. This response includes:' },
      {
        type: 'list', items: [
          'Status Code: A number indicating success or failure — 200 OK: "Success! Here is your data." / 404 Not Found: "I couldn\'t find what you asked for." / 500 Server Error: "Something went wrong on my end."',
          'The Payload: The actual content you wanted — HTML for a website, JSON data for an app, or an image file.'
        ]
      },
      { type: 'h2', text: 'The Golden Rule' },
      { type: 'p', text: 'In this entire process, there\'s one key rule: **The client must ask first.**' },
      { type: 'p', text: 'The server is passive. It waits for a command. It only validates and responds after the client has initiated contact. This request-response model is the foundation of almost everything you do on the internet today.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-4',
    category: 'Scalability',
    date: 'Day 4',
    readTime: '10 min read',
    title: 'The Million User Milestone: Scaling Up vs Scaling Out',
    image: '/images/day-4.jpg',
    content: [
      { type: 'p', text: 'Suppose you are the creator of an XYZ startup.' },
      { type: 'p', text: 'First off, congratulations. Hitting 1 million users is a huge milestone.' },
      { type: 'p', text: 'You\'ve achieved product-market fit, and your SaaS is growing faster than expected.' },
      { type: 'p', text: 'But as any experienced developer knows: With great traffic comes great responsibility.' },
      { type: 'p', text: 'Suddenly, your app starts choking under pressure.' },
      { type: 'p', text: 'Here\'s the reality of your infrastructure right now:' },
      {
        type: 'list', items: [
          '100 users: Works seamlessly',
          '1,000 users: Still snappy',
          '10,000 users: CPU spikes, occasional lag',
          '1 Million users: server crashed'
        ]
      },
      { type: 'p', text: 'The million-dollar question changes from: "How do I get users?" to "How do I keep the server alive?"' },
      { type: 'h2', text: 'Welcome to the world of Scaling. What is Scaling?' },
      { type: 'p', text: '**Scaling** means increasing your system\'s capacity to handle more load, like:' },
      {
        type: 'list', items: [
          'more users',
          'more requests',
          'more data',
          'more concurrent activity'
        ]
      },
      { type: 'p', text: 'There are two main ways to scale a system: Vertical Scaling (Scale Up) and Horizontal Scaling (Scale Out).' },
      { type: 'h2', text: '1) Vertical Scaling' },
      { type: 'quote', text: '"My server is too weak. Let\'s make it stronger." That\'s Vertical Scaling.' },
      { type: 'p', text: 'You\'re not changing your architecture. You\'re simply upgrading the same machine with more power.' },
      { type: 'h2', text: 'How it works' },
      { type: 'p', text: 'You upgrade the server components:' },
      {
        type: 'list', items: [
          'CPU: 2 Cores → 8 Cores (or more)',
          'RAM: 4GB → 16GB → 64GB',
          'Storage: HDD → SSD / more disk space'
        ]
      },
      { type: 'p', text: 'Same server. Bigger muscles.' },
      { type: 'h2', text: 'Why vertical scaling feels amazing at first' },
      {
        type: 'list', items: [
          'Simplicity: No major code changes needed',
          'Fast results: Usually just a few clicks in your cloud console (example: upgrading an AWS EC2 instance type)',
          'Low maintenance: You\'re still managing only one server'
        ]
      },
      { type: 'h2', text: 'The limits of Vertical Scaling' },
      {
        type: 'list', items: [
          'Finite Power: There\'s a limit to how big one machine can get. You can\'t upgrade forever.',
          'Single Point of Failure: If this one "Super Server" goes down (crash, OS update, network issue), your entire app goes offline.',
          'Diminishing Returns: High-end hardware becomes exponentially expensive. The cost jump is often not worth the performance gain.'
        ]
      },
      { type: 'p', text: 'Verdict: Vertical scaling is a great short-term patch and perfect for early-stage startups. But it is not a long-term solution when you\'re aiming for massive scale.' },
      { type: 'h2', text: '2) Horizontal Scaling' },
      { type: 'p', text: 'Now you think differently: Instead of making one server stronger… What if I add more servers?' },
      { type: 'p', text: 'That\'s **Horizontal Scaling**. You increase capacity by running your app on multiple machines, not one.' },
      { type: 'h2', text: 'How it works' },
      { type: 'p', text: 'Instead of 1 server handling 1 million requests, you do 10 servers handling 100,000 requests each.' },
      { type: 'p', text: 'But there\'s one important component that makes this possible:' },
      { type: 'h2', text: 'Load Balancer (The Traffic Manager)' },
      { type: 'p', text: 'A **Load Balancer** sits in front of your servers and distributes incoming requests like a smart traffic police. So users don\'t hit a specific server directly. They hit the Load Balancer, and it routes them to an available server.' },
      { type: 'h2', text: 'Advantages of Horizontal Scaling' },
      {
        type: 'list', items: [
          'Almost Infinite Scale: Just add more servers.',
          'High Availability: If Server A crashes, the Load Balancer redirects traffic to Server B and C. Users barely notice.',
          'Auto-Scaling: During peak hours scale up to 20 servers. At night scale down to 5. This saves money and keeps performance stable.'
        ]
      },
      { type: 'p', text: 'Horizontal scaling is the standard approach for real-world systems like YouTube, Netflix, Instagram, Discord, etc. It\'s the best solution when you need growth, reliability, and fault tolerance.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-5',
    category: 'Architecture',
    date: 'Day 5',
    readTime: '7 min read',
    title: 'The Three Pillars: Client, Server, and Database',
    image: '/images/day-5.jpeg',
    content: [
      { type: 'p', text: 'When we use any website or app, we typically separate our application into three distinct layers: The Client (Frontend), The Server (Backend), and The Database.' },
      { type: 'quote', text: 'Client → Server → Database' },
      { type: 'p', text: 'Each layer has a specific responsibility, and they work together to make the application secure, fast, and reliable.' },
      { type: 'h2', text: 'Client' },
      { type: 'p', text: 'The client is what the user interacts with: Browser, mobile app, React app, Android / iOS app.' },
      { type: 'p', text: 'The client\'s job is simple: Take user input and send requests to the server.' },
      { type: 'h2', text: 'Server' },
      { type: 'p', text: 'The **server** acts as the brain of the system. It receives requests from the client, processes them, communicates with the database, and sends back a response to the client.' },
      { type: 'p', text: 'The server handles:' },
      {
        type: 'list', items: [
          'Business logic',
          'Authentication and authorization',
          'Database communication'
        ]
      },
      { type: 'h2', text: 'Database' },
      { type: 'p', text: 'The **database** is where all data is stored: Users, messages, posts, orders, etc.' },
      { type: 'p', text: 'The database does not decide rules. It only stores and returns data when asked by the server.' },
      { type: 'h2', text: 'How do they work together?' },
      { type: 'p', text: 'The flow always goes like:' },
      { type: 'quote', text: 'Client → Request → Server → Query → Database → Response → Server → Client' },
      { type: 'h2', text: 'Why Do We Even Need a Server?' },
      { type: 'p', text: 'A common beginner question is: Why not let the client directly save data into the database?' },
      { type: 'p', text: 'This sounds simple but it\'s actually very dangerous. Let\'s see why we strictly avoid this approach.' },
      { type: 'h2', text: 'Just let the Client talk to the DB' },
      {
        type: 'list', items: [
          'Security: To connect to a database, you need credentials (username/password/API keys). If you put this code in the Frontend (Client), anyone can right-click "Inspect Element," view your source code, and steal your database keys. They could then delete or steal all your user data.',
          'Lack of Control: The Server acts as a gatekeeper. It validates data ("Is this a valid email?", "Does this user have permission to see this?"). If the Client talks directly to the DB, you bypass these checks, allowing users to send malicious data.',
          'Business Logic: Complex calculations should happen on the Server, which is powerful and consistent, rather than relying on the user\'s device (phone/laptop), which might be slow or unreliable.'
        ]
      },
      { type: 'p', text: 'That\'s why we introduce the server. The server is the necessary middleman that: Protects your data, Applies rules, Controls access, and Keeps the system scalable.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-6',
    category: 'Advanced Scaling',
    date: 'Day 6',
    readTime: '8 min read',
    title: 'The Traffic Cop: Deep Dive into Load Balancers',
    image: '/images/day-6.jpeg',
    content: [
      { type: 'p', text: 'Imagine you have built an amazing web application. When the application is small, having 50 users is manageable; a single server handles this with ease.' },
      { type: 'p', text: 'But suddenly, your app goes viral.' },
      { type: 'p', text: 'You now have 50,000 users trying to access the site simultaneously. That single server, once efficient, slowly becomes a bottleneck. The CPU spikes, RAM fills up, and your users start seeing "Connection Timed Out" errors.' },
      { type: 'h2', text: 'The "Multiple Server" Trap' },
      { type: 'p', text: 'To overcome this, you decide to introduce multiple servers. It seems like a good move, but soon you realize your app is still slow.' },
      { type: 'p', text: 'Why? Because you likely implemented a simple failover list (placing servers in an array).' },
      { type: 'p', text: 'The Flaw: In this setup, traffic defaults to Server A. Only if Server A crashes does traffic move to Server B. Server A is still taking 100% of the load while Server B sits idle. You have scaled your hardware, but you haven\'t scaled your traffic flow.' },
      { type: 'p', text: 'This is where a Load Balancer comes into the picture.' },
      { type: 'h2', text: 'What is a Load Balancer?' },
      { type: 'p', text: 'A **Load Balancer** is a specialized device (hardware) or software (like Nginx or HAProxy) that acts as a "traffic cop." It sits between the clients and your server farm, distributing incoming traffic efficiently across your infrastructure.' },
      { type: 'quote', text: 'Client → Load Balancer → [ Server_1, Server_2, Server_3 ] → Database' },
      { type: 'h2', text: 'How it works' },
      {
        type: 'list', items: [
          '1. Load Balancer captures the incoming request from the internet.',
          '2. It uses an algorithm to select the best capable server.',
          '3. Sends the request to that specific server.',
          '4. Relays the server\'s response back to the client.'
        ]
      },
      { type: 'h2', text: 'Benefits' },
      { type: 'h2', text: '1. High Availability (Redundancy)' },
      { type: 'p', text: 'If Server 1 fails or crashes, the Load Balancer detects the "dead" pulse and immediately reroutes traffic to Server 2 and Server 3. The user never experiences downtime.' },
      { type: 'h2', text: '2. True Scalability' },
      { type: 'p', text: 'Need more power? You can simply add [ Server 4, Server 5 ] to the cluster. The Load Balancer will automatically start sending them traffic.' },
      { type: 'h2', text: '3. Enhanced Performance' },
      { type: 'p', text: 'Because traffic is distributed evenly, no single server is overwhelmed. This leads to faster response times and significantly lower latency.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-7',
    category: 'Advanced Scaling',
    date: 'Day 7',
    readTime: '9 min read',
    title: 'Decision Mastery: Load Balancing Algorithms',
    image: '/images/day-7.jpg',
    content: [
      { type: 'p', text: 'When an application grows, a single server can\'t handle all incoming traffic. So we add multiple servers, and to manage them properly, we introduce a Load Balancer.' },
      { type: 'p', text: 'Let\'s see how a Load Balancer actually distributes the request to multiple servers.' },
      { type: 'p', text: 'A **Load Balancer** is not just a traffic funnel — it\'s a decision maker. To decide, it uses Algorithms.' },
      { type: 'h2', text: '1. Static Algorithms' },
      { type: 'p', text: 'These don\'t check if a server is dying or healthy. They just follow the rules.' },
      { type: 'h2', text: 'Round Robin' },
      { type: 'p', text: 'How it works: Request 1 → Server A. Request 2 → Server B. Request 3 again to Server A, Request 4 again to Server B and so on.' },
      { type: 'p', text: 'Best for: Simple setups where all servers are equally powerful.' },
      { type: 'h2', text: 'Weighted Round Robin' },
      { type: 'p', text: 'How it works: If Server A is a beast (16GB RAM) and Server B is weak (4GB), you tell the LB: "Send 4 people to A for every 1 person to B."' },
      { type: 'p', text: 'Best for: A mix of old and new hardware.' },
      { type: 'h2', text: 'IP Hash' },
      { type: 'p', text: 'How it works: It uses the user\'s IP to ensure User X always goes to Server A. Hence decides on the basis of IP.' },
      { type: 'p', text: 'Best for: Shopping carts. If you switch servers mid-session, your cart might vanish.' },
      { type: 'h2', text: '2. Dynamic Algorithms' },
      { type: 'p', text: 'These are intelligent. They check the server\'s pulse before sending work.' },
      { type: 'h2', text: 'Least Connections' },
      { type: 'p', text: 'How it works: Who has the fewest open connections right now? Send the new guy there.' },
      { type: 'p', text: 'Best for: Long sessions like Discord chats or WebSocket apps.' },
      { type: 'h2', text: 'Least Response Time' },
      { type: 'p', text: 'The speed demon. How it works: The LB pings everyone. Whoever replies fastest gets the job.' },
      { type: 'p', text: 'Best for: Gaming or trading apps where lag kills.' },
      { type: 'h2', text: 'Resource-Based' },
      { type: 'p', text: 'The doctor. How it works: An agent on the server reports back: "I\'m at 90% CPU, don\'t send more!" The LB listens and routes traffic elsewhere.' },
      { type: 'p', text: 'Best for: Heavy, complex applications.' },
      { type: 'p', text: 'These are some standard industry level algorithms used by a LB internally to distribute network traffic.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-8',
    category: 'Databases',
    date: 'Day 8',
    readTime: '12 min read',
    title: 'SQL or NoSQL? The Beginner Trap',
    image: '/images/day-8.jpeg',
    content: [
      { type: 'p', text: 'Everyone starts with the question "SQL or NoSQL?" but that question itself is a beginner trap.' },
      { type: 'p', text: 'A system designer never picks a database first — they pick a failure they are willing to accept. That one idea alone separates students from engineers who design systems that actually survive production traffic.' },
      { type: 'p', text: 'Imagine you\'re building a college ERP system. Student marks, fees, attendance, and exam results. If a student pays fees and the payment succeeds but the record is not stored, that\'s unacceptable. Even one wrong entry is a disaster. This is where **SQL** databases live comfortably. Structured tables, fixed schema, strong rules, foreign keys, and ACID transactions make sure the system never enters a half-broken state. Either everything is saved or nothing is. Accuracy beats speed here, every single time.' },
      { type: 'p', text: 'Now shift your brain to Instagram. A user uploads a post, another user likes it, ten thousand users like it within a second. If one like appears one second late on someone\'s phone, nobody complains. If the app goes down for five seconds, that\'s a bigger problem than missing a single like. This is the natural home of **NoSQL**. Flexible data, fast writes, horizontal scaling, and eventual consistency. Data may sync slightly later, but the system stays alive under massive load.' },
      { type: 'p', text: 'Here\'s the mistake many beginners make. They compare SQL and NoSQL like programming languages. That\'s wrong. They solve different failure scenarios. **SQL protects you from incorrect data. NoSQL protects you from traffic spikes.**' },
      { type: 'p', text: 'Let\'s take a real-world example. Amazon does not choose one. Product catalog, recommendations, browsing history, user sessions are stored in NoSQL because speed and availability matter more than perfect accuracy. Orders, payments, refunds, invoices live in SQL because even a single incorrect transaction can cost millions and break trust. Same company, same users, two different database philosophies working together.' },
      { type: 'p', text: 'Another system design insight most people miss. NoSQL is not "schema-less", it is "schema-on-read". You still design structure, just in your application instead of the database. That\'s why poor NoSQL design leads to chaos, duplicated data, and unreadable systems. Also NoSQL does not follow ACID properties by default. They follow something called BASE properties.' },
      { type: 'p', text: 'SQL, on the other hand, is not "slow". It\'s predictable. At small to medium scale, a well-indexed SQL database can outperform badly designed NoSQL systems. The scaling challenge appears when writes explode and joins become expensive across distributed machines.' },
      { type: 'p', text: 'So the real question is never SQL vs NoSQL. The real questions are: What happens if data is temporarily inconsistent? What happens if the system goes down? What is more expensive for the business — wrong data or delayed data?' },
      { type: 'p', text: 'If you can answer those three questions, the database choice becomes obvious.' },
      { type: 'p', text: 'This mindset shift is what turns students into system designers and senior developers into architects.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-9',
    category: 'Distributed Systems',
    date: 'Day 9',
    readTime: '11 min read',
    title: 'ACID vs BASE: The Rules of Consistency',
    image: '/images/day-9.jpeg',
    content: [
      { type: 'p', text: 'Most people hear ACID and BASE and think they are database "features". That\'s already the wrong mental model. ACID and BASE are not features you turn on or off. They are design philosophies that define how a system behaves when things go wrong — and things always go wrong in production.' },
      { type: 'p', text: 'Let\'s start with **ACID**, the mindset behind traditional relational databases. ACID stands for Atomicity, Consistency, Isolation, and Durability, but memorizing the expansion is useless unless you understand the promise it makes. ACID systems promise correctness over everything else. When a transaction happens, it must either fully succeed or fully fail. There is no in-between world. If money is debited, it must be credited somewhere else. If a seat is booked, it cannot be double-booked. The system would rather slow down or block than allow incorrect data to exist.' },
      { type: 'p', text: 'Imagine a banking application. You transfer ₹10,000 from Account A to Account B. If the system crashes after debiting A but before crediting B, that is unacceptable. ACID prevents this exact nightmare. Either both steps happen, or none happen. This is why banks, payment gateways, ERP systems, and billing platforms rely heavily on ACID-compliant databases. Accuracy is not a feature here, it is the business itself.' },
      { type: 'p', text: 'Now shift your thinking to **BASE**, which is almost the opposite philosophy. BASE stands for Basically Available, Soft state, Eventually consistent. BASE systems accept a hard truth of distributed systems: when traffic is massive and systems are spread across regions, perfect consistency all the time is expensive. Instead of blocking the system, BASE chooses availability. The system stays responsive, even if the data is temporarily inconsistent.' },
      { type: 'p', text: 'Think of a social media app. You like a post, but your friend doesn\'t see that like immediately. Is that a problem? Not really. But if the app freezes every time it tries to sync likes perfectly across servers, users leave. BASE systems prioritize serving requests quickly, and they allow data to sync over time. The system might be temporarily wrong, but it will eventually become correct.' },
      { type: 'p', text: 'Here\'s where beginners often get confused. They think ACID is "good" and BASE is "bad" or "unsafe". That\'s wrong. BASE is not careless, it is intentional. It is a conscious decision to trade immediate consistency for scalability and availability. In fact, without BASE principles, modern systems like Instagram, WhatsApp, Netflix, and Amazon\'s recommendation engine would simply not scale.' },
      { type: 'p', text: 'Real-world systems don\'t pick one blindly. They mix them. Amazon uses ACID for orders, payments, and refunds because money cannot be eventually consistent. But they use BASE for product views, recommendations, wishlists, and browsing history because speed matters more than perfection there. Same system, same users, two different guarantees.' },
      { type: 'p', text: 'A crucial system design insight many miss is this: ACID reduces the complexity of application logic but increases database responsibility. BASE does the opposite. It simplifies the database but pushes complexity to the application layer. That\'s why designing BASE systems without deep thinking leads to bugs, duplicate data, and hard-to-debug issues. Eventual consistency demands discipline.' },
      { type: 'p', text: 'So the real question is never "ACID or BASE?". The real questions are: Can my business tolerate temporary inconsistency? Is availability more important than correctness at this moment? What is more expensive — blocking the system or fixing wrong data later?' },
      { type: 'p', text: 'If you can answer these questions clearly, you are no longer just choosing a database property. You are designing a system that aligns with real-world business failures.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-10',
    category: 'Databases',
    date: 'Day 10',
    readTime: '13 min read',
    title: 'Divide and Conquer: The Art of Sharding',
    image: '/images/day-10.jpeg',
    content: [
      { type: 'p', text: 'Most people think performance problems start with slow code. System designers know that most performance problems start when one machine is asked to do the job of ten. **Sharding** is simply the moment you accept that a single database, no matter how powerful, cannot carry the entire system forever.' },
      { type: 'p', text: 'Imagine you\'re building a simple user application. All user data lives in one database. Life is good. Reads are fast, writes are fast, backups are easy. Then the app grows. One million users become ten million. Queries slow down, disk usage explodes, and CPU spikes during peak hours. At this point, adding indexes or upgrading the machine gives temporary relief, but the problem keeps coming back. This is not a tuning problem anymore. It\'s a scale problem.' },
      { type: 'p', text: 'Sharding is the decision to split data across multiple databases so that each one handles only a portion of the total load. Instead of one giant database answering every request, multiple smaller databases share the work. Each database becomes responsible for a specific slice of data, and together they form the complete system.' },
      { type: 'p', text: 'Think of it like a library. When the number of books is small, one room is enough. When the library grows to millions of books, you don\'t buy a bigger room endlessly. You create multiple sections. Each section stores a subset of books, and visitors go directly to the section that has what they need. The total capacity increases, and no single room becomes a bottleneck.' },
      { type: 'p', text: 'Let\'s apply this to a real system. Suppose you are storing user profiles. Instead of placing every user in the same database, you divide users across multiple databases. Each database now stores fewer records, handles fewer queries, and responds faster. Reads and writes are distributed, and traffic spikes no longer crush a single machine.' },
      { type: 'p', text: 'Here\'s where beginners make a critical mistake. They assume sharding automatically makes everything faster. It doesn\'t. Sharding solves one problem and introduces new ones. Once data is split, operations that need data from multiple databases become harder. Simple queries that worked earlier now require coordination across shards. The system becomes more powerful, but also more complex.' },
      { type: 'p', text: 'This is why sharding is not a "Day 1" decision. Early systems prefer simplicity. Sharding appears when growth forces your hand. It\'s the point where vertical scaling stops being cost-effective and horizontal growth becomes necessary.' },
      { type: 'p', text: 'Another important insight: sharding is not about storage alone. It\'s about **load isolation**. When traffic hits one part of the system heavily, only the databases responsible for that data feel the pressure. The rest of the system stays healthy. This is one of the biggest reasons large-scale systems survive sudden traffic spikes.' },
      { type: 'p', text: 'Real-world platforms use sharding everywhere. User data, orders, messages, logs — all are divided so that no single database becomes a single point of collapse. Without sharding, high-traffic systems would spend more time recovering from outages than serving users.' },
      { type: 'p', text: 'But sharding comes with responsibility. Data placement decisions become permanent. Moving data later is expensive and risky. That\'s why system designers spend a lot of time thinking before splitting data. Sharding too early adds complexity. Sharding too late causes downtime.' },
      { type: 'p', text: 'So the real question is not "Should I shard?". The real questions are: Is one database already my bottleneck? Am I scaling hardware just to survive load? Is my system\'s growth predictable or explosive?' },
      { type: 'p', text: 'If you can answer these honestly, sharding stops being a scary concept and becomes a natural evolution of your system.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-11',
    category: 'Distributed Systems',
    date: 'Day 11',
    readTime: '15 min read',
    title: 'The Scaling Secret: Consistent Hashing',
    image: '/images/day-11.jpeg',
    content: [
      { type: 'p', text: 'Most people start with formulas. We\'ll start with the problem.' },
      { type: 'p', text: 'Assume we have multiple backend servers and we want to distribute user data across them. The goal is simple: same user should always go to the same server, load should be evenly distributed, and the system should not break when servers are added or removed.' },
      { type: 'h2', text: 'Start with normal hashing' },
      { type: 'p', text: 'Suppose we have 4 servers: S0, S1, S2, S3. We want to store user data based on userId.' },
      { type: 'p', text: 'A very common approach is: server = hash(userId) % 4' },
      { type: 'p', text: 'If hash("aman") % 4 = 1 → store on S1. If hash("rohan") % 4 = 3 → store on S3.' },
      { type: 'p', text: 'This works fine. Same userId always maps to the same server. Load is somewhat distributed. Everything looks correct — as long as the number of servers never changes.' },
      { type: 'h2', text: 'Now comes the real-world problem' },
      { type: 'p', text: 'Traffic increases. We add a new server S4. So now logic becomes: server = hash(userId) % 5. And suddenly everything breaks.' },
      { type: 'p', text: 'Earlier, hash("aman") % 4 = 1 → S1. Now, hash("aman") % 5 might be 3 → S3. That means the same user who was earlier on S1 is now expected to live on S3.' },
      { type: 'p', text: 'This doesn\'t just affect one user. Almost all keys get remapped when the divisor changes.' },
      { type: 'p', text: 'This causes serious production issues: 1) Massive data movement between servers. 2) Cache invalidation (Redis / Memcached become useless temporarily). 3) Sudden load spikes. 4) Downtime during scaling.' },
      { type: 'h2', text: 'So the real requirement becomes clear' },
      { type: 'p', text: 'We want a way to distribute data across servers such that: 1) Adding a server moves only a small portion of keys. 2) Removing a server affects only its own data. 3) Other servers and keys remain untouched.' },
      { type: 'p', text: 'This is exactly what **consistent hashing** is designed to solve.' },
      { type: 'h2', text: 'The core benefit' },
      { type: 'p', text: 'Consistent hashing helps distribute keys across servers in a way that server changes cause minimal disturbance. If there are n servers, then roughly only 1/n keys are affected when a server is added or removed — not almost all keys like modulo hashing.' },
      { type: 'h2', text: 'How it achieves this' },
      { type: 'p', text: 'Instead of tying key placement directly to the number of servers, consistent hashing places both servers and keys into the same logical space and assigns responsibility based on proximity, not count.' },
      { type: 'h2', text: 'The Ring' },
      { type: 'p', text: 'Imagine a large hash space — say numbers from 0 to a very large value. For understanding, we\'ll shrink it to 0–99. Now imagine these numbers arranged in a circle, forming a ring.' },
      { type: 'p', text: 'Hash each server name and place it on the ring. Hash each key (userId) and place it on the same ring.' },
      { type: 'p', text: 'Example (0–99 ring): S0 placed at position 10. S1 placed at position 40. S2 placed at position 70. Keys: K1 hashes to 15. K2 hashes to 50. K3 hashes to 85.' },
      { type: 'p', text: 'The most important rule: A key belongs to the first server you encounter while moving clockwise on the ring from the key\'s position.' },
      { type: 'p', text: 'So: K1 at 15 → next server clockwise is S1 at 40. K2 at 50 → next server clockwise is S2 at 70. K3 at 85 → ring wraps around → next server is S0 at 10.' },
      { type: 'h2', text: 'Adding or removing a server' },
      { type: 'p', text: 'Add S3 at position 60. What changes? Only keys that lie between 40 and 60 (clockwise) will now go to S3. These keys earlier belonged to S2. All other keys remain exactly where they were. No global reshuffle. No mass movement.' },
      { type: 'p', text: 'If S2 goes down: Only keys that mapped to S2 move. They move to the next server clockwise. Other keys are unaffected.' },
      { type: 'h2', text: 'Where you\'ll see this' },
      {
        type: 'list', items: [
          'Distributed caches',
          'Large-scale key-value stores',
          'Request routing systems',
          'Systems where availability during scaling matters more than perfect balance'
        ]
      },
      { type: 'p', text: 'In short: Consistent hashing maps both keys and servers into the same circular hash space and assigns each key to the next server clockwise. When servers are added or removed, only a small, localized set of keys move — avoiding massive reshuffling like modulo-based hashing.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-12',
    category: 'Distributed Systems',
    date: 'Day 12',
    readTime: '14 min read',
    title: 'The Fairness Factor: Virtual Nodes',
    image: '/images/day-12.jpeg',
    content: [
      { type: 'p', text: 'Let\'s continue yesterday\'s discussion on Consistent Hashing, but today we\'ll zoom into the part most people skip and later regret in production — virtual nodes.' },
      { type: 'p', text: 'Yesterday we saw how consistent hashing solves the "everything breaks when servers change" problem. Keys move locally, not globally. The system becomes stable during scaling. That\'s great. But once you deploy this in the real world, a new problem quietly shows up.' },
      { type: 'p', text: 'Assume you\'ve implemented consistent hashing correctly. Servers and keys are placed on a ring. Ownership is decided by the clockwise rule. Everything works. Now imagine this setup running in production. Some servers are handling a lot of traffic. Others are mostly idle. Not because traffic is uneven, but because hash placement is uneven.' },
      { type: 'p', text: 'This is the uncomfortable truth: hashing gives randomness, not fairness. One server might end up owning a large chunk of the ring, while another gets a very small slice. The system is correct, but the load is not balanced.' },
      { type: 'p', text: 'So now the system designer asks a new question: How do we make sure all servers get a reasonably equal share of traffic without breaking the consistent hashing guarantees? This is where **virtual nodes** come in.' },
      { type: 'h2', text: 'The problem visualized' },
      { type: 'p', text: 'In basic consistent hashing, each physical server appears exactly once on the ring. That means each server owns one continuous segment of keys. If that segment happens to be large, that server becomes hot. If it\'s small, the server stays underutilized.' },
      { type: 'p', text: 'Assume three servers on the ring: S1, S2, S3. Because of random hash placement, S1 ends up owning 50% of the ring, S2 owns 30%, and S3 owns only 20%. Now imagine 1 million requests per minute coming in.' },
      { type: 'p', text: 'S1 handles 500k requests, starts throttling. S2 is busy but fine. S3 is mostly idle.' },
      { type: 'p', text: 'Nothing is "wrong" in logic. But operationally, this system is fragile. A small traffic spike can push S1 into failure, even though total capacity exists. This is exactly the kind of issue that only appears after deployment — and is painful to debug.' },
      { type: 'h2', text: 'What virtual nodes actually are' },
      { type: 'p', text: 'What we really want is not one big segment per server, but many small segments spread across the ring. Virtual nodes are the mechanism that gives us exactly that. Instead of placing each physical server once on the ring, we place it multiple times — using different identifiers.' },
      { type: 'p', text: 'So instead of: S1 — We conceptually create: S1#1, S1#2, S1#3, S1#4.' },
      { type: 'p', text: 'Each of these is hashed independently and placed at different positions on the ring. Important point: These are not extra servers. They are just multiple logical positions representing the same physical server.' },
      { type: 'p', text: 'Earlier, one server owned one large region. Now, the same server owns many small regions scattered across the ring. As a result: 1) Load is spread more evenly. 2) Traffic spikes are less concentrated. 3) No single unlucky hash placement can overload a server.' },
      { type: 'h2', text: 'Scaling and failures' },
      { type: 'p', text: 'When a new server is added, it also comes with its own set of virtual nodes. Each virtual node takes over a small region of the ring from its neighbors. The total data movement is still limited, but now it\'s spread across multiple servers instead of hitting one server hard.' },
      { type: 'p', text: 'When a server goes down, all its virtual nodes disappear from the ring. The keys owned by those virtual nodes move to the next servers clockwise. Again, movement is local and distributed — not concentrated. This makes the system far more stable under real-world conditions.' },
      { type: 'h2', text: 'Heterogeneous servers' },
      { type: 'p', text: 'Virtual nodes allow heterogeneous servers. If one machine is twice as powerful as another, you can simply assign it more virtual nodes. More virtual nodes means more regions on the ring, which naturally translates to handling more keys and traffic. No special routing logic. No manual balancing. The ring handles it organically.' },
      { type: 'p', text: 'This is why virtual nodes are not an optional optimization. They are the reason consistent hashing actually works at scale. Most production systems don\'t use consistent hashing without virtual nodes. Doing so is technically correct, but operationally fragile.' },
      { type: 'h2', text: 'Where you\'ll see this' },
      {
        type: 'list', items: [
          'Distributed caches',
          'Large key-value stores',
          'Storage systems',
          'High-scale routing layers'
        ]
      },
      { type: 'p', text: 'Consistent hashing decides where keys go with minimal movement. **Virtual nodes** decide how evenly that load is spread across servers. Together, they turn a theoretically scalable system into a practically stable one.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-13',
    category: 'Databases',
    date: 'Day 13',
    readTime: '12 min read',
    title: 'The Safety Net: Master-Slave Replication',
    image: '/images/day-13.jpeg',
    content: [
      { type: 'p', text: 'Databases use sharding as we learned in previous posts so all the keys don\'t go to one db. That means we can now horizontally scale our db.' },
      { type: 'p', text: 'But what happens when a shard goes down? All the data stored in it are lost? No. In real systems other than just sharding the db we also replicate the data of a shard (db) to multiple places. This is known as **master-slave architecture**.' },
      { type: 'p', text: 'Everyone learns "master-slave replication" early, but very few people actually understand why it exists and what problem it is quietly solving in production systems. Like most system design patterns, this one is not about elegance — it\'s about surviving real traffic and real failures.' },
      { type: 'h2', text: 'The core idea' },
      { type: 'p', text: 'In a master-slave architecture, there is exactly one place where data changes. The **master** database handles all writes: inserts, updates, deletes. Every **slave** database is a copy of the master and serves read-only traffic. No exceptions.' },
      { type: 'p', text: 'This rule is strict because it protects the system from conflicts and inconsistencies. If everyone writes everywhere, chaos follows.' },
      { type: 'h2', text: 'How most applications behave' },
      { type: 'p', text: 'Users read far more than they write. Think about an e-commerce site. Browsing products, viewing orders, checking status — all reads. Actual actions like placing an order or updating a profile are rare compared to reads. This imbalance is where master-slave shines. Writes go to one place, reads fan out to many places.' },
      { type: 'h2', text: 'A simple setup' },
      { type: 'p', text: 'One master database. Five slave databases. Every insert, update, or delete hits the master. The master replicates those changes to the slaves. Meanwhile, user requests asking for data are spread across all five slaves. Suddenly, the system can handle far more traffic without stressing the write path. Same data, parallel reads, better throughput.' },
      { type: 'p', text: 'This is why replication improves performance. Not because databases magically get faster, but because work is divided intelligently. Writes are serialized and controlled. Reads are parallelized and scaled.' },
      { type: 'h2', text: 'When things break' },
      { type: 'p', text: 'Let\'s say one slave goes down. Nothing dramatic happens. Reads are redirected to other slaves. Users barely notice. A new slave is brought up and synced from the master. The system heals itself.' },
      { type: 'p', text: 'Now consider a worse scenario. The master goes offline. This is scary because writes are blocked. But the architecture still gives you a path forward. One of the slaves is promoted to become the new master. All write traffic is redirected there. Reads continue. The system survives, even if briefly degraded.' },
      { type: 'p', text: 'This is where people often misunderstand replication. Replication is not about never failing. It\'s about failing gracefully. Even in disasters like hardware crashes, power failures, natural calamities — your data still exists because it lives in multiple places.' },
      { type: 'h2', text: 'Replication lag' },
      { type: 'p', text: 'There is also a subtle but important point most beginners miss. In production, slaves may lag slightly behind the master. That means data might not always be perfectly fresh. This is an intentional trade-off. The system chooses availability and scalability over immediate consistency for reads. For most applications, that delay is acceptable. For critical writes, everything still goes through the master.' },
      { type: 'p', text: 'So when a system designer chooses master-slave, they are making a clear decision: Writes must be correct. Reads must be fast. Failures must be survivable.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-14',
    category: 'Optimization',
    date: 'Day 14',
    readTime: '13 min read',
    title: 'Survival Mechanism: The Power of Caching',
    image: '/images/day-14.jpeg',
    content: [
      { type: 'p', text: 'Everyone hears "use cache to make it fast", but very few people stop and ask what caching actually is and what problem it is solving. In system design, cache is not an optimization — it is a survival mechanism.' },
      { type: 'p', text: 'At its core, a **cache** is temporary storage for data that is expensive to fetch repeatedly. Expensive does not always mean slow CPU. It can mean disk access, database queries, network calls, or even computations. The idea is simple: if the same data is requested again and again, don\'t rebuild it every time. Keep it closer.' },
      { type: 'h2', text: 'Why do we cache things?' },
      { type: 'p', text: 'Because systems don\'t fail due to logic — they fail due to latency and load. Databases are good at correctness, not at serving millions of identical reads per second. Without cache, every user request hits the database. With cache, most requests never reach it.' },
      { type: 'h2', text: 'A simple example' },
      { type: 'p', text: 'You open an e-commerce app and view a product page. Product name, price, description, ratings — this data does not change every second. If ten thousand users open the same product page in one minute and each request queries the database, the database becomes the bottleneck.' },
      { type: 'p', text: 'Instead, the first request fetches data from the database and stores it in cache. The next 9,999 requests are served directly from memory. The result: faster response time, lower database load, and a system that stays alive under traffic.' },
      { type: 'p', text: 'That\'s the core value of caching: Speed for users. Protection for databases. Stability for the system.' },
      { type: 'h2', text: 'Types of cache' },
      { type: 'p', text: 'There is client-side cache (browser cache, mobile app cache), where data is stored close to the user. There is application-level cache, usually in memory, shared across servers. There is database query cache or result cache. And there are distributed caches that multiple services can access.' },
      { type: 'p', text: '**Local cache** lives inside the application process. It is extremely fast but disappears when the service restarts and cannot be shared across machines. **Distributed cache** lives outside the application, usually in a separate system, and is shared by multiple services. It is slightly slower than local memory but far more scalable and reliable.' },
      { type: 'h2', text: 'Redis' },
      { type: 'p', text: '**Redis** is an in-memory, distributed data store commonly used as a cache. Data is stored in RAM, not on disk, which makes reads and writes extremely fast. But Redis is not just a key-value store. It supports strings, lists, sets, sorted sets, hashes, and more. This allows it to solve real system problems, not just store blobs.' },
      { type: 'p', text: 'In practice, Redis sits between your application and your database. Request comes in → check Redis. If data exists, return it immediately. If not, fetch from database, store in Redis with an expiration, and return.' },
      { type: 'p', text: 'The expiration part is critical. Cache is not the source of truth. Databases are. Cache data is allowed to expire, be evicted, or even be lost. The system must always be able to rebuild cache from the database.' },
      { type: 'p', text: 'Redis is designed to handle massive read traffic with predictable latency. That makes it ideal for sessions, rate limiting, frequently accessed objects, counters, and hot data.' },
      { type: 'h2', text: 'A key mindset shift' },
      { type: 'p', text: 'Cache is not about correctness. Cache is about performance and resilience. You cache data that is read frequently, changes infrequently, and is expensive to compute or fetch. You never blindly cache everything.' },
      { type: 'p', text: 'So the real questions are not "should we use cache?". They are: What happens if cache is empty? What happens if cache is stale? What happens if cache goes down? If your system can answer those questions safely, cache becomes one of your strongest allies.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-15',
    category: 'Optimization',
    date: 'Day 15',
    readTime: '14 min read',
    title: 'The Decision Trap: Cache Eviction Strategies',
    image: '/images/day-15.jpeg',
    content: [
      { type: 'p', text: 'Caching sounds simple until memory fills up. Then the real system design decisions begin.' },
      { type: 'p', text: 'A cache is always finite. No matter how much RAM you add, it will eventually run out. When that happens, the system must decide what to keep and what to throw away. That decision is called a **cache eviction strategy**, and it directly affects performance, cost, and user experience.' },
      { type: 'h2', text: 'Start from the problem' },
      { type: 'p', text: 'Assume your cache can store 100 items. Your application receives thousands of requests for different data. New data keeps coming in, but memory is full. If you don\'t evict anything, the cache stops being useful. If you evict the wrong thing, you destroy your hit rate and overload the database again.' },
      { type: 'p', text: 'So the real question becomes: Which cached data is least valuable right now?' },
      { type: 'h2', text: 'Time-based eviction (TTL)' },
      { type: 'p', text: 'Every cached item has a time-to-live. Once that time expires, the item is removed automatically. This works well for data that becomes outdated naturally, like prices, feeds, or analytics. It\'s predictable and easy to reason about, but it doesn\'t care whether the data is popular or not. A frequently accessed item can still expire and cause a cache miss spike.' },
      { type: 'h2', text: 'Least Recently Used (LRU)' },
      { type: 'p', text: 'The assumption is intuitive: if something hasn\'t been used for a long time, it probably won\'t be needed soon. So when space is needed, the cache removes the item that was accessed least recently. This works very well for user-driven systems where access patterns show locality — users tend to request the same things again and again.' },
      { type: 'h2', text: 'Least Frequently Used (LFU)' },
      { type: 'p', text: 'Here the cache tracks how often each item is accessed. When eviction is needed, the item with the lowest access count is removed. This favors long-term popularity over recent spikes. It\'s useful when some data is consistently hot over long periods, but it can struggle with changing trends because old popular items may stick around longer than they should.' },
      { type: 'h2', text: 'First In, First Out (FIFO)' },
      { type: 'p', text: 'This treats cache like a queue. The oldest item gets evicted first, regardless of usage. It\'s simple and fast, but also blind. It doesn\'t care about access patterns, so hit rates are usually lower compared to smarter strategies.' },
      { type: 'h2', text: 'Random eviction' },
      { type: 'p', text: 'This sounds naive but has real use cases. When tracking metadata is expensive or unnecessary, randomly removing items keeps implementation simple and avoids bias. It\'s not optimal, but it\'s surprisingly acceptable in some high-throughput systems.' },
      { type: 'h2', text: 'Production reality' },
      { type: 'p', text: 'In real production systems, eviction is rarely just one technique. It\'s usually a combination. For example, items may expire after a fixed time and still be subject to LRU eviction if memory fills up early. This balances freshness and popularity.' },
      { type: 'p', text: 'The most important system design insight: Eviction strategy should match access patterns, not theory. Caching user profiles behaves differently from caching trending content. Session data behaves differently from configuration data. There is no universally "best" eviction policy, only the best fit for your workload.' },
      { type: 'p', text: 'A bad eviction strategy doesn\'t just reduce cache effectiveness. It causes cascading failures: More cache misses. Higher database load. Increased latency. Unexpected outages during traffic spikes.' },
      { type: 'p', text: 'Cache eviction is not about removing data — it\'s about protecting what matters most under pressure.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-16',
    category: 'Distributed Systems',
    date: 'Day 16',
    readTime: '15 min read',
    title: 'The Design Lens: Decoding CAP Theorem',
    image: '/images/day-16.jpeg',
    content: [
      { type: 'p', text: 'CAP theorem is one of those ideas everyone knows, but very few actually design with. And that\'s because it\'s usually taught as a formula, not as a pressure situation.' },
      { type: 'p', text: 'Assume you\'re building a distributed system. Not a single server, not a single database. Multiple nodes, multiple machines, talking over a network. The moment you distribute a system, one thing becomes inevitable: things will fail. Machines crash. Networks slow down. Packets get lost. You don\'t get to opt out of this.' },
      { type: 'h2', text: 'CAP talks about three guarantees' },
      {
        type: 'list', items: [
          'Consistency: every read sees the latest written data',
          'Availability: every request gets a response (not an error)',
          'Partition tolerance: the system continues to work even if network communication breaks between nodes'
        ]
      },
      { type: 'p', text: 'Here\'s the key insight most beginners miss: **Partition tolerance** is not a choice in real distributed systems. Networks will fail. So the real tradeoff is never CA vs CP vs AP. In practice, it\'s always Consistency vs Availability under a partition.' },
      { type: 'h2', text: 'What that actually means' },
      { type: 'p', text: 'Imagine a distributed database with two nodes, Node A and Node B. They replicate data between them. Everything is fine until the network cable between them breaks. This is a partition. Now a user sends a write request to Node A, and another user sends a read request to Node B.' },
      { type: 'p', text: 'The system designer must answer one uncomfortable question: What do we do right now?' },
      { type: 'p', text: 'Option 1: Favor consistency. Node B refuses to answer reads because it might be outdated. The system returns an error or waits until the partition heals. Data stays correct, but users experience downtime. This is the **CP** choice.' },
      { type: 'p', text: 'Option 2: Favor availability. Node B answers the read using whatever data it has, even if it\'s stale. The system stays responsive, but different users may see different data temporarily. This is the **AP** choice.' },
      { type: 'p', text: 'There is no third option. You can\'t magically have both once the partition exists.' },
      { type: 'h2', text: 'Grounded with intuition' },
      { type: 'p', text: 'Think of a banking system. If your balance is wrong even for a second, that\'s unacceptable. The system would rather say "try again later" than show incorrect data. Banking systems lean toward consistency, even if availability suffers during failures.' },
      { type: 'p', text: 'Now think of social media. If your like count is slightly off or a post appears a few seconds late, nobody panics. But if the app stops loading entirely, users leave instantly. These systems lean toward availability, accepting temporary inconsistency.' },
      { type: 'p', text: 'Same distributed reality. Different business priorities.' },
      { type: 'h2', text: 'A subtle point most people misunderstand' },
      { type: 'p', text: 'CAP is not about normal operation. During healthy operation, systems can often appear consistent and available. CAP becomes visible only during failures. And failures are exactly when architecture matters most.' },
      { type: 'p', text: 'This is why CAP is not a limitation. It\'s a design lens. It forces you to ask the right questions early: Is it worse to be wrong or to be down? Can the business tolerate stale data? What kind of inconsistency is acceptable, and for how long?' },
      { type: 'p', text: 'CAP theorem is not saying "you can only pick two forever". It\'s saying: when things break, you must choose what you\'re willing to sacrifice.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-17',
    category: 'Distributed Systems',
    date: 'Day 17',
    readTime: '12 min read',
    title: 'Temporarily Inconsistent: Eventual Consistency',
    image: '/images/day-17.jpeg',
    content: [
      { type: 'p', text: 'Let\'s talk about eventual consistency — one of those ideas that sounds scary at first, but quietly powers most large-scale systems you use every day.' },
      { type: 'p', text: 'Imagine a distributed system with one primary node and multiple replicas. Writes go to the primary. Reads can come from replicas. This setup is extremely common because it scales well.' },
      { type: 'h2', text: 'What happens in practice' },
      { type: 'p', text: 'A user writes X = 10 to Node A (Primary). Node A confirms the write immediately. From the user\'s perspective, the operation is successful. But replication is not instant.' },
      { type: 'p', text: 'Node A now starts copying this update to Node B and Node C in the background. Before Node B receives the update, another user sends a read request to Node B for X. What does Node B return? It returns the old value: X = 5.' },
      { type: 'p', text: 'Nothing is broken. Nothing is buggy. This is expected behavior. A little later, replication completes. Node B receives X = 10. Now the same read request returns the updated value.' },
      { type: 'p', text: 'This behavior is called **eventual consistency**. The system does not guarantee that every read immediately reflects the latest write.' },
      { type: 'p', text: 'What it guarantees is this: If no new updates are made, all replicas will eventually converge to the same value. That word "eventually" is doing a lot of work here. Eventual consistency is a conscious design choice, not a compromise made by accident.' },
      { type: 'h2', text: 'Why would anyone accept this?' },
      { type: 'p', text: 'Because the alternative is worse for certain systems. If you force every read to wait until all replicas are updated, you introduce latency. If a replica is slow or temporarily unreachable, reads start failing. Availability drops.' },
      { type: 'p', text: 'Eventual consistency flips the priority: Keep the system fast and available, even if some reads are briefly stale. This is incredibly valuable at scale.' },
      { type: 'h2', text: 'Think about use cases' },
      {
        type: 'list', items: [
          'Social media likes',
          'View counters',
          'Product recommendations',
          'Activity feeds'
        ]
      },
      { type: 'p', text: 'If a like count is off by one for a few seconds, nobody notices. If the app freezes or errors out, everyone notices. That\'s the tradeoff.' },
      { type: 'h2', text: 'The flow' },
      {
        type: 'list', items: [
          'Write is accepted and confirmed quickly',
          'Replication happens asynchronously',
          'Early reads may return old data',
          'Later reads return the updated value',
          'All nodes converge over time'
        ]
      },
      { type: 'p', text: 'No locks. No global coordination. No waiting for slow replicas. Eventual consistency does not mean inconsistent forever. It means temporarily inconsistent by design.' },
      { type: 'h2', text: 'When not to use it' },
      { type: 'p', text: 'You would never use eventual consistency for: Bank balances. Inventory deductions without safeguards. Financial transactions.' },
      { type: 'p', text: 'But you absolutely want it for: High-traffic, read-heavy systems. Globally distributed applications. Systems where uptime matters more than instant correctness.' },
      { type: 'p', text: 'Strong consistency feels safe. Eventual consistency keeps systems working.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-18',
    category: 'Architecture',
    date: 'Day 18',
    readTime: '16 min read',
    title: 'Splitting Responsibility: Microservices',
    image: '/images/day-18.jpeg',
    content: [
      { type: 'p', text: 'A client sends a request. That request does not directly hit business logic. It first goes through an **API Gateway**. From there, the request fans out to multiple independent services, and those services interact with the database. That structure itself tells a story.' },
      { type: 'h2', text: 'Start from the problem' },
      { type: 'p', text: 'As systems grow, one big application starts becoming painful. Every feature lives in the same codebase, shares the same deployment cycle, and often the same database. A small change in one module risks breaking something completely unrelated. Scaling becomes awkward. Teams start stepping on each other\'s toes.' },
      { type: 'p', text: '**Microservices** are not about splitting code. They\'re about splitting responsibility. In a microservice architecture, instead of one giant application, the system is broken into small, focused services, each owning a single business capability.' },
      { type: 'h2', text: 'The services' },
      { type: 'p', text: 'Service 1 could be user management. Service 2 could be payments. Service 3 could be notifications. Service 4 could be search. Each service does one thing and does it well.' },
      { type: 'h2', text: 'The API Gateway' },
      { type: 'p', text: 'The client doesn\'t need to know how many services exist or where they live. It talks to one entry point. The API Gateway handles routing, authentication, rate limiting, and request coordination. It becomes the system\'s front door.' },
      { type: 'p', text: 'From a design perspective, this gives you two huge advantages: 1) You can change internal services without breaking clients. 2) You centralize cross-cutting concerns instead of duplicating them everywhere.' },
      { type: 'h2', text: 'Independent evolution' },
      { type: 'p', text: 'Each service runs independently. They can be deployed independently. They can be scaled independently. If Service 3 suddenly gets heavy traffic, you scale only Service 3. You don\'t touch Service 1, 2, or 4. This is the core promise of microservices: independent evolution.' },
      { type: 'h2', text: 'Data ownership' },
      { type: 'p', text: 'In real production systems, services often own their own data, even if diagrams show a single database for simplicity. The important idea is ownership. A service should control how its data is read and written. Other services interact through APIs, not by poking into tables directly. This avoids tight coupling at the data level, which is where most systems silently rot.' },
      { type: 'h2', text: 'Why teams adopt microservices' },
      { type: 'p', text: 'The biggest benefit is organizational scalability. Multiple teams can work in parallel. Each team owns a service. Each team deploys on their own schedule. Failures also become isolated. If Service 4 goes down, the rest of the system may degrade gracefully instead of collapsing entirely.' },
      { type: 'h2', text: 'The cost' },
      {
        type: 'list', items: [
          'Network calls instead of function calls',
          'Distributed failures',
          'Debugging across services',
          'Operational complexity'
        ]
      },
      { type: 'p', text: 'That\'s why microservices make sense only when the system and team size justify them. A small application does not need this. A growing platform absolutely does.' },
      { type: 'p', text: 'Monoliths optimize for simplicity. **Microservices** optimize for change. A single entry point. Multiple independent services. Clear boundaries. Loose coupling.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-19',
    category: 'Architecture',
    date: 'Day 19',
    readTime: '15 min read',
    title: 'The Escape Plan: Strangler Pattern',
    image: '/images/day-19.jpeg',
    content: [
      { type: 'p', text: 'You have a large monolith. It works. It\'s making money. But it\'s slow to change. Deployments are risky. Multiple teams are stepping on the same codebase. Every release feels like surgery. You can\'t rewrite it from scratch. That\'s dangerous. You can\'t shut it down. That\'s impossible.' },
      { type: 'p', text: 'So what do you do? You don\'t kill the monolith. You slowly replace it. That is the **strangler pattern**.' },
      { type: 'h2', text: 'The name' },
      { type: 'p', text: 'The name comes from the strangler fig tree. It grows around an existing tree and slowly replaces it. The old tree doesn\'t fall instantly. It gets replaced gradually.' },
      { type: 'h2', text: 'Early Migration' },
      { type: 'p', text: 'You introduce something called a **Strangler Facade**. This sits in front of your legacy system. New requests first hit the facade. The facade decides: Should this go to the old legacy system? Or should it go to a new modern service? Initially, most traffic still goes to legacy. But new features are built in modern services. The key idea: New functionality does NOT go into the monolith anymore.' },
      { type: 'h2', text: 'Later Migration' },
      { type: 'p', text: 'More and more features are extracted. More traffic is routed to modern services. Legacy shrinks in responsibility. The facade remains the control point. Clients don\'t know what\'s happening behind the scenes. They still talk to one entry point.' },
      { type: 'h2', text: 'Migration Complete' },
      { type: 'p', text: 'Legacy disappears. Only modern remains.' },
      { type: 'h2', text: 'Independent deployment' },
      { type: 'p', text: 'When a feature is extracted into a microservice, that team no longer depends on monolith release cycles. 1) Faster iteration. 2) Lower blast radius. 3) Clear ownership.' },
      { type: 'p', text: 'Migration is not instant. It\'s phased. Some services are still inside the monolith box. They still share the old pipeline. This is realistic.' },
      { type: 'h2', text: 'What the strangler pattern helps with' },
      {
        type: 'list', items: [
          'Reducing migration risk',
          'Gradual modernization',
          'Independent team ownership',
          'Controlled traffic shifting',
          'Business continuity during transformation'
        ]
      },
      { type: 'h2', text: 'When it\'s especially useful' },
      {
        type: 'list', items: [
          'The system is too big to rewrite',
          'Downtime is unacceptable',
          'Teams need autonomy',
          'Legacy tech is holding back innovation'
        ]
      },
      { type: 'h2', text: 'But it requires discipline' },
      {
        type: 'list', items: [
          'Route all traffic through the facade',
          'Avoid adding new features to legacy',
          'Define clear service boundaries',
          'Monitor traffic during migration'
        ]
      },
      { type: 'p', text: 'Otherwise you end up with a hybrid mess forever. Strangler pattern is not about deleting legacy. It\'s about surrounding it, replacing it piece by piece, until one day it quietly disappears.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-20',
    category: 'Architecture',
    date: 'Day 20',
    readTime: '18 min read',
    title: 'Separating Concerns: The CQRS Mindset',
    image: '/images/day-20.jpeg',
    content: [
      { type: 'p', text: 'A few years ago, I was working on a system that looked perfectly fine on paper. Single service. Single database. Clean APIs. Everything felt "simple".' },
      { type: 'p', text: 'Then traffic started growing. At first, we were happy. More users. More activity. But slowly, weird issues started showing up. Product listing became slow. Order history APIs started timing out. Database CPU was always high. Every small optimization felt temporary.' },
      { type: 'p', text: 'We scaled the database. It helped. For a while. Then it broke again. And the funny thing? Writes were not that high. Actual transactions were manageable.' },
      { type: 'p', text: 'The real explosion was in reads. People refreshing dashboards. Checking order status. Opening product pages. Filtering lists. Hundreds of reads for every single write. But our system treated both the same way. Same models. Same tables. Same database handling everything.' },
      { type: 'p', text: 'That\'s when we asked a very uncomfortable question: "Why are we forcing the same model to handle two completely different jobs?" That question led us to **CQRS**. Command Query Responsibility Segregation. Big name. But the idea is simple. Separate writes from reads.' },
      { type: 'h2', text: 'Commands vs Queries' },
      { type: 'p', text: 'When a user clicks "Place Order", they are issuing a command. A command changes the system. CreateOrder. UpdateAddress. CancelSubscription. Commands need validation. Business rules. Transactions. Consistency.' },
      { type: 'p', text: 'Now compare that with: "Show me my orders." That\'s not changing anything. It\'s just reading data. So why should both flows fight for the same database resources?' },
      { type: 'h2', text: 'What changed' },
      { type: 'p', text: 'With CQRS, we stopped mixing them. Commands went to a write side. The write database was optimized for correctness, transactions, and integrity. After a successful write, we emitted an event — something like OrderPlaced.' },
      { type: 'p', text: 'That event updated a separate read database. And this read database was designed differently. It was denormalized. Precomputed. Structured for fast queries. No heavy joins at runtime. No transaction overhead. Just fast lookups.' },
      { type: 'h2', text: 'What happened next' },
      { type: 'p', text: 'Read traffic could scale independently. If dashboards were getting hammered, we scaled only the read side. If business logic became complex, we improved only the write side. They stopped interfering with each other.' },
      { type: 'h2', text: 'The honest part' },
      { type: 'p', text: 'It wasn\'t perfect. There was a small delay between a write and when it appeared on the read side. For a few milliseconds or seconds, the system was slightly out of sync. But for our use case, that was acceptable. Users preferred fast responses over perfect immediacy.' },
      { type: 'h2', text: 'When CQRS makes sense' },
      {
        type: 'list', items: [
          'Reads are much heavier than writes',
          'Write logic is complex',
          'You need multiple views of the same data',
          'Your system is growing fast'
        ]
      },
      { type: 'p', text: 'It does not make sense for small CRUD apps. If your system is simple, CQRS will only add complexity.' },
      { type: 'p', text: 'But when your database starts feeling like it\'s doing too many jobs, when scaling reads also forces you to scale writes, when performance tuning becomes a daily ritual — that\'s when you should ask yourself: Are we mixing responsibilities?' },
      { type: 'p', text: 'Commands change the system. Queries observe the system. Different intentions. Different needs. Different optimizations. Sometimes the biggest improvements don\'t come from adding more power. They come from separating concerns properly.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-21',
    category: 'Distributed Systems',
    date: 'Day 21',
    readTime: '18 min read',
    title: 'Controlled Damage: The Saga Pattern',
    image: '/images/day-21.jpeg',
    content: [
      { type: 'p', text: 'If you was building a ticket booking system from scratch, it will look simple initially. User selects a seat, pays, seat gets confirmed. Flow was clear: Block Seat → Take Payment → Allocate Seat → Done. Everyone thought, "Easy microservices use case."' },
      { type: 'p', text: 'Then reality hit. What if payment fails after the seat is blocked? What if payment succeeds but seat allocation fails? What if one service is slow? What if a network timeout happens in between? Now remember, this was not a single database system. Seat Service had its own DB. Payment Service had its own DB. Booking Service had its own DB. One booking request was now touching three independent services.' },
      { type: 'p', text: 'So the big question came: Can we wrap all of this in one ACID transaction? No. Distributed transactions with 2PC? Possible, but heavy, slow, and risky in high-scale systems. So what\'s the alternative?' },
      { type: 'h2', text: 'The Saga Pattern' },
      { type: 'p', text: '**Saga** says: Don\'t try to make one big distributed transaction. Break it into small local transactions. And if something fails, execute **compensating transactions** to undo previous successful steps. So instead of one giant all-or-nothing block, you move step by step, and if something breaks, you compensate.' },
      { type: 'h2', text: 'The booking flow' },
      { type: 'p', text: 'Step 1: Block Seat. Step 2: Process Payment. Step 3: Allocate Seat. Each step commits locally in its own service. If all succeed, booking completes. But if Payment fails after seat is blocked? We don\'t "rollback" globally. We trigger Unblock Seat. If Allocation fails after payment succeeds? We trigger Reverse Payment and maybe Move Seat back to pool. Every forward step has a defined undo step. That\'s the heart of Saga.' },
      { type: 'h2', text: 'Choreography-based Saga' },
      { type: 'p', text: 'In choreography, there is no central controller. No master brain. Services communicate through events. One service finishes its work and publishes an event. Another service listens and reacts. Think of it like a dance. No one is giving commands. Each dancer knows their move based on music.' },
      { type: 'p', text: 'In our booking example: Booking Service creates a BookingCreated event. Seat Service listens to it, blocks the seat, and publishes SeatBlocked. Payment Service listens to SeatBlocked, processes payment, and publishes PaymentSuccessful or PaymentFailed. If PaymentFailed is published, Seat Service listens and runs Unblock Seat automatically. No central coordinator. Just events flowing and services reacting.' },
      { type: 'p', text: 'It\'s highly decoupled. Easy to start. No single point controlling everything. But as flows grow bigger, how do you track the full process? Business logic is scattered across services. Debugging becomes harder. With five services it\'s manageable. With fifteen, it becomes complex.' },
      { type: 'h2', text: 'Orchestration-based Saga' },
      { type: 'p', text: 'Here, there is a central **Saga Orchestrator**. Think of it like a conductor in an orchestra. The conductor tells each musician when to play. In booking, Orchestrator receives the request. It tells Seat Service: Block Seat. Waits for response. Then tells Payment Service: Process Payment. Waits for response. Then tells Booking Service: Allocate Seat. If any step fails, Orchestrator explicitly calls compensating steps like Reverse Payment or Unblock Seat.' },
      { type: 'p', text: 'The entire business flow is in one place. Easier to visualize. Easier to modify. Easier to debug. But tradeoff? You introduce a central component. Slightly tighter coupling. If not designed well, it can become a bottleneck.' },
      { type: 'h2', text: 'Which one to choose?' },
      { type: 'p', text: 'If your flow is simple and event-driven, choreography works well. If your flow is complex, has many steps, conditional logic, or strict ordering, orchestration often makes life easier. In real-world systems, teams often start with choreography and move to orchestration when complexity increases.' },
      { type: 'h2', text: 'The real mindset shift' },
      { type: 'p', text: 'Saga does not try to eliminate failure. It accepts failure as normal. It designs recovery into the system. Not strong consistency through global locks, but eventual consistency through well-defined compensations.' },
      { type: 'p', text: 'But be careful. Designing compensating actions is not trivial. What if Reverse Payment fails? What if compensation runs twice? You must think about idempotency. Retries. Observability. Monitoring. Saga solves one problem, but introduces design responsibility.' },
      { type: 'p', text: 'Saga is controlled damage. Do small local commits. If something breaks, undo gracefully. And honestly, once you\'ve seen a distributed booking system charge money but fail to allocate a seat in production, you\'ll truly understand why Saga exists.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-22',
    category: 'Architecture',
    date: 'Day 22',
    readTime: '18 min read',
    title: 'The Nervous System: Event Driven Architecture',
    image: '/images/day-22.jpeg',
    content: [
      { type: 'p', text: 'Imagine you are building an e-commerce platform. A customer places an order. What all should happen? Payment should be processed. Inventory should be updated. Email confirmation should be sent. Analytics should record the purchase. Maybe fraud detection should run.' },
      { type: 'p', text: 'Now tell me honestly, should Order Service directly call all these services one by one? What happens if Email Service is down? Should order placement fail? What if Analytics is slow? Should customer wait? This is where tight coupling starts hurting.' },
      { type: 'h2', text: 'Event Producers' },
      { type: 'p', text: 'On the left, you see multiple **Event Producers**. These are event sources. They generate events. For example, Order Service generates OrderPlaced. Payment Service generates PaymentCompleted. User Service generates UserRegistered. These producers don\'t know who will consume their events. They just publish them.' },
      { type: 'h2', text: 'Event Broker' },
      { type: 'p', text: 'In the center, you see the **Event Broker**. This could be Kafka, RabbitMQ, Service Bus. Think of it as a central nervous system. Producers push events to the broker. The broker stores, filters, and routes events based on subscriptions. It follows publish-subscribe model. A producer publishes an event. Subscribers who are interested receive it. No direct dependency. No tight coupling.' },
      { type: 'h2', text: 'Event Consumers' },
      { type: 'p', text: 'On the right, you see **Event Consumers**. These are subscribers. They listen for specific events. When OrderPlaced happens, Payment Service consumes it and processes payment. Inventory Service consumes it and reduces stock. Email Service consumes it and sends confirmation. Analytics consumes it and updates dashboard. Each service reacts independently.' },
      { type: 'p', text: 'Does Order Service need to know about Email Service? No. Does it care if Analytics is temporarily down? No. It just emits OrderPlaced event and moves on. That is loose coupling. That is asynchronous communication.' },
      { type: 'h2', text: 'What exactly is an event?' },
      { type: 'p', text: 'An event is a record of something that happened. It is immutable. Once created, it does not change. For example, OrderPlaced with payload: orderId, userId, items, amount. That payload gives context. Events represent facts, not commands.' },
      { type: 'h2', text: 'Components in EDA' },
      {
        type: 'list', items: [
          'Event Source: Where the event originates — user click, DB change, sensor, external API',
          'Publisher: Converts action into event and pushes to broker',
          'Event Broker: Receives and routes events',
          'Subscriber: Registers interest in certain event types',
          'Listener: Keeps watching for those events',
          'Event Handler: Contains business logic',
          'Dispatcher: Ensures correct delivery',
          'Aggregator: Combines multiple events into one meaningful event (e.g., CartUpdated)'
        ]
      },
      { type: 'h2', text: 'Why EDA is powerful' },
      { type: 'p', text: 'First, real-time responsiveness — events are processed as they happen. Second, scalability — if traffic increases, you scale consumers horizontally. Third, flexibility — want to add a new service that reacts to OrderPlaced? Just subscribe. No need to modify existing services. That\'s huge in evolving systems.' },
      { type: 'h2', text: 'Challenges' },
      { type: 'p', text: 'What if events arrive out of order? What if a consumer processes the same event twice? You must design idempotent handlers. What about debugging? In a synchronous system, stack trace is clear. In EDA, flow is distributed across services. Observability becomes critical. Logging, tracing, correlation IDs are mandatory. And since communication is asynchronous, there may be slight delay before all consumers react.' },
      { type: 'h2', text: 'Real world use cases' },
      {
        type: 'list', items: [
          'Financial systems: fraud detection triggered by transaction events',
          'E-commerce: order workflow automation',
          'Telecom: real-time network monitoring',
          'Online games: player actions and game state updates'
        ]
      },
      { type: 'p', text: 'Event Driven Architecture is about reacting to facts instead of calling functions directly. Something happens. You publish it. Interested parties react. System becomes reactive, scalable, and loosely coupled.' },
      { type: 'p', text: 'In your current system, are services tightly calling each other in chains? Or are they reacting to events? The answer often tells you how scalable your system will be in the future.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-23',
    category: 'Architecture',
    date: 'Day 23',
    readTime: '15 min read',
    title: 'Resourceful Rules: Understanding REST APIs',
    image: '/images/day-23.jpeg',
    content: [
      { type: 'p', text: 'When systems were small, life was simple. One frontend, one backend, one database. Everything tightly connected. Then suddenly product grows. Now you have a mobile app. Then a web app. Then a partner API. Then an admin panel. Now imagine if each of them directly accessed your database. Chaos. Security nightmare. Schema changes break everything. Business logic scattered everywhere.' },
      { type: 'p', text: 'So what do we need? A middle layer. A controlled interface. That\'s where **REST API** comes in.' },
      { type: 'h2', text: 'The diagram' },
      { type: 'p', text: 'On the left: Client — React web app, Android app, iOS app, or another backend service. In the middle: REST API layer — your application server exposing endpoints. On the right: Server resources — database, business logic, services. The client never talks directly to the database. It sends an HTTP request to a specific URL. That URL represents a resource.' },
      { type: 'h2', text: 'Resource-oriented, not action-oriented' },
      { type: 'p', text: 'Bad design: /createUser, /updateUser, /deleteUser. Better REST design: /users (POST to create), /users/101 (PUT to update), /users/101 (DELETE to remove). Same resource. Different HTTP methods define action.' },
      { type: 'h2', text: 'HTTP methods' },
      {
        type: 'list', items: [
          'GET: Fetch data. Does not modify server state. Safe and idempotent.',
          'POST: Create new resource. Not idempotent — calling twice may create two records.',
          'PUT: Update or replace resource. Idempotent — same result regardless of how many times called.',
          'DELETE: Remove resource. Idempotent.'
        ]
      },
      { type: 'p', text: 'Why does **idempotency** matter? Because in distributed systems, retries happen. Network fails. Client retries. If operation is not idempotent, you may create duplicate records.' },
      { type: 'h2', text: 'Statelessness' },
      { type: 'p', text: 'Server does not store session state between requests. Every request must contain everything needed for processing. For example, authentication token must be sent in every request. Why is this powerful? Because it makes horizontal scaling easy. If request 1 goes to server A and request 2 goes to server B, nothing breaks. No shared session memory required.' },
      { type: 'h2', text: 'Representation' },
      { type: 'p', text: 'When client requests /users/101, server does not send the database row directly. It sends a representation of the resource, usually JSON. This representation can vary based on client needs. Sometimes XML, but mostly JSON in modern systems.' },
      { type: 'h2', text: 'HTTP status codes' },
      {
        type: 'list', items: [
          '200 OK → Success',
          '201 Created → Resource created',
          '400 Bad Request → Client error',
          '401 Unauthorized → Authentication missing',
          '403 Forbidden → Not allowed',
          '404 Not Found → Resource doesn\'t exist',
          '500 Internal Server Error → Server failed'
        ]
      },
      { type: 'h2', text: 'Layering' },
      { type: 'p', text: 'REST allows layered architecture. Client does not know if it\'s talking to actual server or load balancer or API gateway. Request flow could be: Client → API Gateway → Auth Service → Application Server → Database. But from client perspective, it\'s just one endpoint.' },
      { type: 'h2', text: 'Why REST became dominant' },
      { type: 'p', text: 'Because it uses existing web standards. No special protocol. No heavy framework dependency. It rides on HTTP. That made adoption universal.' },
      { type: 'p', text: 'But REST is not perfect. Sometimes you fetch too much data (over-fetching). Or you need data from multiple resources and make multiple API calls, increasing latency. Still, for most CRUD-based systems, REST is clean, predictable, scalable, and easy to maintain.' },
      { type: 'p', text: 'Everything is a resource. Resources are identified by URLs. Actions are defined by HTTP methods. Communication is stateless. Server returns representations. HTTP status codes define the result. Are your APIs resource-oriented? Are you respecting HTTP semantics? If yes, you are designing REST the right way.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-24',
    category: 'Databases',
    date: 'Day 24',
    readTime: '20 min read',
    title: 'The Reliability Contract: ACID Properties',
    image: '/images/day-24.jpeg',
    content: [
      { type: 'p', text: 'Let\'s talk about something every backend engineer has heard of, but not everyone has deeply internalized — **ACID** properties. Four words. Simple definitions. But in real systems, especially distributed and high-scale systems, these four properties shape everything from database choice to architecture decisions.' },
      { type: 'h2', text: 'Atomicity — All or Nothing' },
      { type: 'p', text: 'At its core, **atomicity** means a transaction is indivisible. Either every operation inside it succeeds, or none of them do. Think about a banking transfer: Debit account A. Credit account B. What if debit succeeds but credit fails? Network glitch. DB crash. Power outage. Atomicity ensures partial writes do not leave the system in an inconsistent state. Internally, databases use write-ahead logs (WAL), undo logs, or shadow paging to roll back incomplete changes.' },
      { type: 'p', text: 'In distributed systems, can you truly maintain atomicity across multiple services? Within a single database, atomicity is straightforward. Across services, it becomes a distributed transaction problem. Two-phase commit (2PC) tries to preserve atomicity, but introduces blocking and performance overhead. That\'s why patterns like Saga exist — they trade strict atomicity for eventual consistency with compensating actions. Atomicity is easy locally. Hard globally.' },
      { type: 'h2', text: 'Consistency — Valid State Transitions' },
      { type: 'p', text: '**Consistency** means the database moves from one valid state to another valid state. What defines valid? Constraints. Business rules. Invariants. Balance should never be negative. Foreign key must exist. Unique email per user. If after a transaction commits these invariants are violated, consistency is broken.' },
      { type: 'p', text: 'The subtle part: the database guarantees structural consistency (constraints, triggers). You are responsible for business consistency. Suppose two transactions individually preserve invariants. But when interleaved, they break a higher-level invariant. That\'s where isolation level comes in. Consistency is not magic. It\'s a contract between application logic and database enforcement.' },
      { type: 'h2', text: 'Isolation — The Concurrency Battlefield' },
      { type: 'p', text: '**Isolation** answers: when multiple transactions run concurrently, how much should they see of each other? Two users booking the last seat on a flight. Transaction A reads availability: 1. Transaction B reads availability: 1. Both try to decrement. Without proper isolation, you just oversold.' },
      {
        type: 'list', items: [
          'Read Uncommitted — can see uncommitted changes from other transactions',
          'Read Committed — only sees committed data',
          'Repeatable Read — same row reads return same data within transaction',
          'Serializable — strongest: equivalent to sequential execution, highest lock contention'
        ]
      },
      { type: 'p', text: 'Is Serializable isolation always the right choice? Technically it provides the strongest guarantees, but performance cost is high. That\'s why many production systems use Read Committed or Snapshot Isolation — they accept certain anomalies in exchange for performance. Isolation level should be a conscious architectural decision, not a default configuration.' },
      { type: 'h2', text: 'Durability — Surviving the Apocalypse' },
      { type: 'p', text: '**Durability** answers: if I get a "transaction committed" response, can I trust it? Once committed, changes must survive crashes, restarts, and power failures. Databases ensure durability using write-ahead logging, fsync to disk, and replication to replicas.' },
      { type: 'p', text: 'Is writing to disk enough? What if the disk itself fails? What about region-level failure? Durability at single node level is not durability at system level. That\'s why production systems use replication, quorum writes, multi-AZ setups. Every durability guarantee has latency cost. Synchronous replication increases commit latency. Asynchronous replication reduces latency but risks data loss. Financial ledger? Maximum durability. Analytics clickstream? Maybe slight data loss is acceptable. Durability is not binary. It\'s a spectrum of guarantees.' },
      { type: 'h2', text: 'ACID in modern system design' },
      { type: 'p', text: 'ACID was born in the era of single-node relational databases. But today we build distributed, cloud-native systems. Do you need strict ACID everywhere? Often, the answer is no. Inside a service boundary — yes, ACID is powerful. Across service boundaries — you may prefer eventual consistency. That\'s why microservices often combine ACID within service database and BASE across services.' },
      { type: 'p', text: 'ACID is not just theory. It\'s a set of tradeoffs you actively choose. Atomicity protects against partial failure. Consistency protects invariants. Isolation protects against concurrency anomalies. Durability protects against data loss. So the next time someone casually says "It\'s ACID compliant," pause and ask: At what scope? At what isolation level? At what replication mode? Under what failure model? That\'s where real system design thinking begins.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-25',
    category: 'Databases',
    date: 'Day 25',
    readTime: '18 min read',
    title: 'The Correctness Boundary: SQL Transactions',
    image: '/images/day-25.jpeg',
    content: [
      { type: 'p', text: 'Let\'s talk about something every backend engineer uses almost daily, but not everyone has deeply internalized — **SQL Transactions**. You\'ve written BEGIN. You\'ve written COMMIT. You\'ve handled ROLLBACK. But have you really thought about what boundary you are drawing when you open a transaction? What failure model you are accepting? What concurrency guarantees you are implicitly choosing?' },
      { type: 'p', text: 'From a system design perspective, SQL transactions are not just a database feature. They are a correctness boundary.' },
      { type: 'h2', text: 'What is a SQL transaction, really?' },
      { type: 'p', text: 'At a surface level, a SQL transaction is a sequence of statements executed as a single logical unit of work. But at system level, a transaction is a failure containment boundary. Inside the boundary, everything succeeds together. Outside it, nothing is guaranteed.' },
      { type: 'p', text: 'BEGIN; UPDATE inventory SET stock = stock - 1 WHERE product_id = 10; INSERT INTO orders (...); COMMIT; — This is not just two statements. It is a contract: Either both stock reduction and order creation happen, or neither does. That contract defines correctness.' },
      { type: 'h2', text: 'Transaction boundaries as architectural decisions' },
      { type: 'p', text: 'Where should a transaction start and end? At controller level? At service level? Per repository call? Across multiple services? The smaller the boundary: lower lock contention, higher throughput, lower latency. The larger the boundary: stronger invariants, higher correctness, higher risk of contention. Transactions are not just technical constructs. They are architectural tradeoffs.' },
      { type: 'h2', text: 'What happens internally' },
      { type: 'p', text: 'When you execute BEGIN: database assigns a transaction ID, starts tracking row versions, prepares to acquire locks, prepares to write to WAL. When you execute statements: data changes go to memory buffers, log entries are written to WAL, locks are acquired. When you COMMIT: WAL is flushed to disk (fsync), only after log is durable does commit acknowledge, locks are released, changes become visible. When you ROLLBACK: undo logs revert changes, locks are released, state returns to pre-BEGIN snapshot.' },
      { type: 'h2', text: 'Concurrency — the real battlefield' },
      { type: 'p', text: 'Transactions are easy in isolation. They become interesting under concurrency. Two users booking the last ticket. Transaction A reads availability: 1. Transaction B reads availability: 1. Without isolation, both decrement. Oversell. Isolation levels define what is visible between transactions. Is Read Committed sufficient for financial systems? Is Serializable always necessary? Serializable ensures behavior equivalent to sequential execution — but at cost of reduced concurrency. Most production systems operate at Read Committed or Snapshot Isolation. Because perfect isolation is expensive.' },
      { type: 'h2', text: 'Locking vs MVCC' },
      { type: 'p', text: 'Traditional locking blocks readers and writers. Modern databases use **MVCC** (Multi-Version Concurrency Control). MVCC allows readers to see old committed versions and writers to create new versions. This reduces contention dramatically. But here\'s a deep question: do you know how long-running transactions affect MVCC cleanup? In systems like PostgreSQL, old row versions cannot be garbage collected. Vacuum is delayed. Table bloat increases. Replication lag increases. Long transactions silently degrade system health.' },
      { type: 'h2', text: 'Deadlocks — not a bug, a reality' },
      { type: 'p', text: 'Deadlocks happen when Transaction A locks row 1, wants row 2, and Transaction B locks row 2, wants row 1. Database detects deadlock. One transaction is aborted. Do you retry aborted transactions automatically? Or do users see random 500 errors? Deadlocks are normal in high concurrency systems. Retry logic is part of system design, not optional.' },
      { type: 'h2', text: 'Transactions and performance' },
      { type: 'p', text: 'Every COMMIT requires writing to WAL, flushing to disk, possibly syncing replicas, releasing locks. If you commit 1000 times individually, you pay fsync cost 1000 times. If you batch inside one transaction, you pay once. Are you committing too frequently? Or are you holding transactions open too long? Both extremes hurt performance.' },
      { type: 'h2', text: 'Distributed system perspective' },
      { type: 'p', text: 'Inside a single SQL database, transactions are strong. Across microservices? No built-in atomicity. You either use distributed transactions (2PC) — high coordination cost, reduced availability — or use Saga pattern — compensating actions, eventual consistency. SQL transactions are extremely powerful inside a service boundary. Beyond that, you must design explicitly for distributed correctness.' },
      { type: 'p', text: 'Transactions are where theoretical database guarantees meet real-world system constraints. If you deeply understand SQL transactions, you understand where correctness lives in your system. And once you understand that boundary, you can design with confidence.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-26',
    category: 'Databases',
    date: 'Day 26',
    readTime: '18 min read',
    title: 'The Flexible Power of MongoDB',
    image: '/images/day-26.jpeg',
    content: [
      { type: 'p', text: 'Before MongoDB, most systems used relational databases like MySQL or PostgreSQL. Data was stored in tables. Rows and columns. Fixed schema. Strict structure. That works well when data is predictable. But imagine you are building Instagram. Users have profile info, posts, comments, followers, reels, stories, analytics. Now ask yourself: will every user have exactly the same structure? No, right. Some have business accounts. Some don’t. Some features evolve over time. Schema keeps changing. In relational databases, changing schema in production is painful. Joins become expensive at scale. Horizontal scaling is hard. So the real problem becomes: how do we store massive, semi-structured, fast-evolving data and scale easily?' },
      { type: 'p', text: 'This is where MongoDB comes in. MongoDB is a NoSQL document database. Instead of rows, it stores documents. A document is basically a JSON-like object. For example, one user document can contain user_id, name, followers count, and even an array of posts inside it. Everything stored together. No rigid schema. Flexible structure. Hence Easy to evolve. MongoDB optimizes for flexible, hierarchical data.' },
      { type: 'h2', text: 'What is mongod?' },
      { type: 'p', text: 'Now you might ask, how does it actually run internally? The core process is called **mongod**. mongod is the actual database server. It stores data on disk, handles reads and writes, manages indexes, and manages replication. If MongoDB were a bank, mongod would be the vault storing the money. Every shard runs mongod processes.' },
      { type: 'h2', text: 'Sharding: Scaling Out' },
      { type: 'p', text: 'But things get interesting when scale increases. Imagine your app grows to 200 million users. One machine cannot handle that much traffic or data. So what do we do? We distribute data across multiple machines. This is called **sharding**. Sharding is horizontal partitioning. Instead of one giant database, we split data into multiple pieces and store them on different servers called shards. Now load is distributed. System design principle: scale out, not just scale up.' },
      { type: 'p', text: 'But how does MongoDB decide which data goes to which shard? Using something called a **shard key**. A shard key is a field in your document used for distribution. For example, if user_id is the shard key, MongoDB distributes users based on user_id ranges. Choosing a shard key is a serious system design decision. A bad shard key can create hot shards and uneven load. A good shard key ensures uniform distribution.' },
      { type: 'h2', text: 'The Router: mongos' },
      { type: 'p', text: 'Now imagine your application wants to fetch user 123. Does it need to know which shard holds that data? No. That complexity is hidden. This is where **mongos** comes in. mongos is the router. Your application talks to mongos. mongos checks metadata from config servers and routes the request to the correct shard. Think of mongos as a traffic controller. The client does not worry about where data lives. mongos handles routing.' },
      { type: 'h2', text: 'Config Servers' },
      { type: 'p', text: 'Now what are **config servers**? Config servers store metadata about the cluster. They maintain information about which shard holds which chunk of data and what the shard key ranges are. Without config servers, mongos would not know where to send requests. Think of config servers as the map of the entire distributed system.' },
      { type: 'h2', text: 'Replica Sets' },
      { type: 'p', text: 'Inside each shard, you don’t just have one machine. You typically have a **replica set**. A replica set consists of one primary and multiple secondary nodes. The primary handles writes. Secondaries replicate data from the primary. If the primary crashes, an election happens and one secondary becomes the new primary. That is fault tolerance. So notice something important: sharding solves scalability, replication solves reliability. Two different distributed system problems solved together.' },
      { type: 'h2', text: 'Tracing a Request' },
      { type: 'p', text: 'Now let’s trace a real request. Suppose your application sends "Get user 123." The driver forwards it to mongos. mongos checks config metadata to find which shard contains user 123. It routes the request to that shard. The shard processes the query, possibly using an index, and returns the result. The application never knows which machine handled the request. Abstraction is maintained.' },
      { type: 'h2', text: 'Consistency and the CAP Theorem' },
      { type: 'p', text: 'What about consistency? MongoDB allows strong consistency when reading from primary db. If you read from secondaries, you may get eventual consistency. You can configure read preference and write concern. For example, you can require majority acknowledgment for writes to ensure durability. These are trade-offs between consistency and performance. This is **CAP theorem** in action.' },
      { type: 'h2', text: 'When should you choose MongoDB?' },
      { type: 'p', text: 'Choose it when schema evolves frequently, when data is hierarchical, when horizontal scalability is important, when you want built-in sharding. Avoid it when you heavily depend on complex joins and strict relational constraints. Though MongoDB supports transactions now, relational databases still dominate certain financial systems with strict ACID needs.' },
      { type: 'h2', text: 'Fault Tolerance' },
      {
        type: 'list', items: [
          'What happens if mongos crashes? It is stateless. Hence Start another shard.',
          'What happens if a shard primary crashes? Replica set election happens. One of secondary is voted to become primary.',
          'What if config server fails? Config servers also run as replica sets for reliability. Hence we have fault tolerance.'
        ]
      },
      { type: 'p', text: 'See the pattern? Stateless components are already easy to scale. And Stateful components are replicated. We always try to avoid single point of failures. And that is not just true for MongoDB. That is distributed systems thinking.', style: { fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },

  {
    id: 'day-27',
    category: 'Databases',
    date: 'Day 27',
    readTime: '15 min read',
    title: 'Connected Data: Graph Databases',
    image: '/images/day-27.jpeg',
    content: [
      { type: 'p', text: 'Let’s discuss today about Graph DB, one of the most hot topics for today’s design. Let’s see what problem does graph DB solve that traditional DB like SQL can’t.' },
      { type: 'p', text: 'Before graph databases, most systems used relational databases. Relational databases store data in tables. Rows and columns. Clean structure. Now imagine you\'re building a social network. You have: Users, Friends, Followers, Addresses, Recommendations.' },
      { type: 'p', text: 'Let’s say John is friends with Paul. Paul is friends with Ringo. Ringo is friends with George. Now ask yourself: If I want to find "friends of friends of John", how do I do that in SQL? You write joins. Lots of joins. User table joined with Friend table. Then join again. And Then again.' },
      { type: 'p', text: 'As relationships grow deeper, joins grow heavier. Performance drops. So here’s the real question: What if relationships are the core of your system? What if traversing connections is more important than raw data storage? This is where Graph Databases come in.' },
      { type: 'h2', text: 'What is a Graph Database at the Most Basic Level?' },
      { type: 'p', text: 'A Graph DB stores data as: 1) Nodes, 2) Edges (relationships), 3) Properties. That’s it. In your image: John, Paul, Ringo, Stuart, George → Nodes. "friends with" → Edges. "lives at" → Another type of edge. Address → Node.' },
      { type: 'p', text: 'Instead of storing data in rows, we store it as connected entities. Think of it like a network map. If MongoDB optimizes for flexible documents, Graph DB optimizes for relationships. Graph databases treat relationships as first-class citizens.' },
      { type: 'h2', text: 'Let\'s Understand the Image' },
      { type: 'p', text: 'Look carefully. John → friends with → Paul. Paul → friends with → Ringo. Stuart → friends with → George. Each person "lives at" an Address.' },
      { type: 'p', text: 'So we have: People nodes, Address nodes, Relationship edges connecting them. Now imagine asking: "Who are John\'s friends of friends who live in London?" In SQL, painful joins. In Graph DB, simple traversal. Because relationships are directly stored.' },
      { type: 'h2', text: 'Why Are Joins Expensive in Relational DBs?' },
      { type: 'p', text: 'In relational databases, relationships are stored as foreign keys. To find related data, the database must scan indexes and match keys. In Graph DB, each node directly points to connected nodes. So traversal is O(1) per hop. That means performance depends on relationship depth, not total database size. That’s a huge difference.' },
      { type: 'p', text: 'If your database has 1 billion users, finding John’s friends still only depends on John’s edges. That’s powerful. A Graph DB internally stores: Node records, Relationship records, Pointers connecting to them.' },
      { type: 'p', text: 'Each node contains: ID, Properties (name: John). Each relationship contains: Start node, End node, Type (friends_with, lives_at). So instead of Table → Foreign Key → Join, we have Node → Direct Pointer → Connected Node. That’s why traversal is fast.' },
      { type: 'h2', text: 'Real-World Use Cases' },
      {
        type: 'list', items: [
          'Social networks',
          'Recommendation systems',
          'Fraud detection',
          'Knowledge graphs',
          'Network topology',
          'Supply chain analysis'
        ]
      },
      { type: 'h2', text: 'How Would a Query Flow?' },
      { type: 'p', text: 'Let’s say you ask: "Find all friends of John." Step 1: Query engine finds John node. Step 2: It follows outgoing "friends with" edges. Step 3: It directly reaches Paul and Stuart. No joins. No table scans.' },
      { type: 'p', text: 'Now let’s say: "Find friends of friends." Step 4: From Paul, follow his "friends with" edges. From Stuart, follow his edges. Traversal continues. This is called graph traversal. And it’s extremely efficient.' },
      { type: 'h2', text: 'From System Design Perspective' },
      { type: 'p', text: 'When should you choose Graph DB? Choose it when relationships are deep and complex, query patterns involve traversals, you need shortest path queries, recommendation engines, or you analyze networks.' },
      { type: 'p', text: 'Do NOT choose it when data is mostly transactional and tabular in nature, relationships are shallow, or simple CRUD dominates the flow.' },
      { type: 'p', text: 'Remember Graph DB is not a replacement for SQL but It’s a specialized tool. If John has 5 friends and the database has 1 billion users, will traversal slow down? No. Because traversal only touches connected nodes.' },
      { type: 'p', text: 'If you want to find the shortest path between John and George? Graph DBs have built-in algorithms for that. Now try doing that efficiently in SQL — it will be hard since you need to apply joins as the data are stored in tables.' },
      { type: 'p', text: 'In relational DB, cost depends on table size. In Graph DB, cost depends on relationship depth. That’s a fundamental difference. The graph DB applies the tradeoff to heavy global indexing for efficient local traversal.', style: { fontWeight: 600, color: 'var(--accent-soft)' } },
      { type: 'p', text: 'In any system design interviews the idea of choosing graph DB in a particular use case as describe above and explaining your logic to do so takes you way ahead.', style: { fontStyle: 'italic', fontWeight: 600, color: 'var(--accent-soft)' } }
    ]
  },
  {
    id: 'day-28',
    category: 'Databases',
    date: 'Day 28',
    readTime: '18 min read',
    title: 'The Ring of Resilience: Cassandra DB',
    image: '/images/day-28.jpeg',
    content: [
      { type: 'h2', text: 'The Core Problem - Why Do We Even Need Cassandra?' },
      { type: 'p', text: 'Before distributed databases, most systems used a single relational database server. That works fine… until traffic explodes.' },
      { type: 'p', text: 'Now imagine you\'re building: A messaging app, A payment tracking system, An IoT telemetry platform, A social media feed system.' },
      { type: 'p', text: 'Millions of writes per second. Global users. Zero downtime expectation.' },
      { type: 'p', text: 'Now ask yourself: Can one single database machine handle that forever? No, obviously.' },
      { type: 'p', text: 'Even if you scale vertically (more CPU, more RAM), there is a physical limit. So the real problem becomes: How do we build a database that: 1) Scales horizontally, 2) Never goes down, 3) Works across multiple data centers, 4) Handles massive write throughput. This is where Cassandra comes in.' },
      { type: 'h2', text: 'What is Cassandra at the Most Basic Level?' },
      { type: 'p', text: 'Cassandra is a distributed, peer-to-peer, NoSQL database designed for high availability and massive scalability.' },
      { type: 'p', text: 'Key idea: There is no single master. Every node is equal.' },
      { type: 'p', text: 'Unlike traditional databases where you have one primary server and replicas, Cassandra uses a ring architecture.' },
      { type: 'p', text: 'In your image: You see a Cluster. Inside the cluster: Data Center 1 and Data Center 2. Inside each data center: Multiple Cassandra Nodes connected in a ring-like structure. Each node can accept reads and writes. That\'s powerful.' },
      { type: 'h2', text: 'Let\'s Understand the Image' },
      { type: 'p', text: 'Client sends a request. The request can go to ANY Cassandra node. That node becomes the coordinator for that request.' },
      { type: 'p', text: 'Okay, if any node can accept a write, how does Cassandra know where to store the data? By the use of Consistent hashing.' },
      { type: 'p', text: 'Cassandra uses a partition key to determine where data should live. Data is distributed across nodes using a hash ring. Instead of: Shard 1 stores users 1–1000, Shard 2 stores users 1001–2000. Cassandra hashes the key and distributes evenly across the ring. This ensures uniform load distribution.' },
      { type: 'h2', text: 'What Happens When You Write Data?' },
      { type: 'p', text: 'Let\'s say client writes: Insert user with id = 123.' },
      { type: 'list', items: ['Step 1: Request hits Node A.', 'Step 2: Node A calculates hash of partition key (user_id).', 'Step 3: Based on hash, Cassandra determines which nodes are responsible.', 'Step 4: Data is written to multiple nodes (replication).'] },
      { type: 'p', text: 'Now look at your image. Each data center has multiple nodes. Replication arrows show that data is copied across nodes. So write is not stored in just one place. This is called Replication Factor.' },
      { type: 'p', text: 'Example: Replication factor = 3. Data will be stored on 3 different nodes. Why? Because hardware fails sometimes, Disks may crash or Machines may die. We must always be ready for failures.' },
      { type: 'p', text: 'Cassandra assumes failure is normal. That\'s distributed systems thinking.' },
      { type: 'h2', text: 'So what exactly is a Cassandra Cluster?' },
      { type: 'p', text: 'Cluster is the group of nodes working together. In the image: The outer box labeled "Cluster" contains both data centers. Cluster can span multiple geographic regions so that we get disaster recovery and low latency for global users.' },
      { type: 'p', text: 'If Data Center 1 goes down, Data Center 2 continues serving traffic. Hence No single point of failure.' },
      { type: 'h2', text: 'How Replication Works' },
      { type: 'p', text: 'Inside each data center: Nodes replicate data among themselves. Even Across data center Replication can happen. We can configure whether to configure locally or globally.' },
      { type: 'p', text: 'Now important question: If data is replicated, how does Cassandra maintain consistency? Cassandra allows tunable consistency.' },
      { type: 'p', text: 'When writing, you can specify: ONE (only one node must acknowledge), QUORUM (majority must acknowledge), ALL (all replicas must acknowledge).' },
      { type: 'p', text: 'So you decide what you want. Stronger consistency or lower latency? This is CAP theorem in action. Cassandra prioritizes Availability and Partition Tolerance. Consistency is tunable.' },
      { type: 'h2', text: 'Peer-to-Peer Architecture' },
      { type: 'p', text: 'Unlike traditional master-slave systems, Cassandra has no central leader. All nodes are peers. If one node fails: Cluster keeps running. No election delays like primary-replica systems. That\'s why Cassandra is extremely resilient.' },
      { type: 'h2', text: 'Let\'s see a Read Path' },
      { type: 'list', items: ['Step 1: Request hits any node.', 'Step 2: Coordinator determines which nodes own that partition.', 'Step 3: Based on consistency level, it fetches from required replicas.', 'Step 4: If data mismatch occurs, Cassandra performs read repair.'] },
      { type: 'p', text: 'That means it fixes inconsistencies during reads. This is called Self-healing behavior.' },
      { type: 'p', text: 'Cassandra internally uses: Commit Log (for durability), Memtable (in-memory write buffer), SSTables (immutable disk files).' },
      { type: 'p', text: 'Write flow: Write → Commit Log → Memtable → Flushed to SSTable.' },
      { type: 'p', text: 'We will discuss all the above things in detail in some other post.' },
      { type: 'p', text: 'Writes are append-heavy. This makes Cassandra extremely fast for writes. It does not update rows in place like relational databases. It writes new versions. That\'s why it handles massive write workloads well.' },
      { type: 'h2', text: 'When Should You Choose Cassandra?' },
      { type: 'p', text: 'Choose Cassandra when: Write throughput is massive, System must be always available, Multi-region replication required, Data size is huge, Eventual consistency is acceptable.' },
      { type: 'list', items: ['Messaging platforms', 'Logging systems', 'Activity feeds'] },
      { type: 'p', text: 'Do NOT choose Cassandra when: You need complex joins, You need strong ACID multi-row transactions, Data relationships are deep (Graph DB better there).' },
      { type: 'p', text: 'Cassandra is optimized for availability and scale, not relational complexity.' },
      { type: 'p', text: 'If one node crashes, does system stop? No. Other replicas serve data. If one entire data center fails? Other data center continues. If traffic increases 10x? Add more nodes. Cluster scales horizontally. No downtime required.' },
      { type: 'quote', text: 'Stateless client. Peer-to-peer nodes. Replication for durability. Partitioning for scale. This is distributed system design. It is not just a database. It is a distributed storage engine built for failure, scale, and global systems.' }
    ]
  },
  {
    id: 'day-29',
    category: 'Databases',
    date: 'Day 29',
    readTime: '20 min read',
    title: 'Closeness Counts: Understanding Vector Databases',
    image: '/images/day-29.jpeg',
    content: [
      { type: 'p', text: 'Imagine you\'ve just joined a fast-growing startup. Your first task sounds simple: "Implement the \'Similar Products\' section on the product page."' },
      { type: 'p', text: 'You think, fine. Query the database. Add some filters. Done. Then your tech lead says, "We already store product vectors in a vector database. Just use that."' },
      { type: 'p', text: 'You pause. Vectors? Separate database? Why can\'t we just query MySQL with some tags and categories? Why introduce another DB into the system?' },
      { type: 'h2', text: 'Lets, understand the real problem.' },
      { type: 'p', text: 'Traditional databases are excellent at exact queries.' },
      { type: 'p', text: 'You search: Find user where id = 42, Get orders where status = "paid", Fetch products where category = "chair". These are precise conditions. The database uses indexes and returns results efficiently.' },
      { type: 'p', text: 'But now imagine you are building: An e-commerce platform that shows "Similar products", A music app recommending "Songs like this", A job portal suggesting "Candidates similar to this profile", A fraud detection system finding "Transactions similar to known fraud cases".' },
      { type: 'p', text: 'Now the question is no longer exact. It becomes: "What is similar to this?" And similarity is not equality. It is closeness. That is where the challenge starts.' },
      { type: 'h2', text: 'Let\'s take a real-world example.' },
      { type: 'p', text: 'Suppose you run an online furniture marketplace. A user is viewing a "modern wooden chair." You want to show 10 similar chairs. Can you just write: WHERE style = "modern" AND material = "wood". Not really.' },
      { type: 'p', text: 'Two chairs might look very similar but have slightly different descriptions. One says "oak finish." Another says "walnut texture." One says "minimal Scandinavian design." Another says "Nordic modern aesthetic." Text differs. Meaning overlaps.' },
      { type: 'p', text: 'So instead of relying purely on structured fields, you convert each product into a numerical representation - a vector.' },
      { type: 'p', text: 'Think of it as placing every product on a coordinate system in multi-dimensional space. Products that are similar end up close to each other. Now your problem becomes: Given this product\'s coordinates, find the nearest neighbors. That is not what traditional database indexes are built for.' },
      { type: 'h2', text: 'Now let\'s understand the architecture clearly.' },
      { type: 'p', text: 'Step 1: Raw Data. Your product descriptions, images, user behavior logs — this is raw input.' },
      { type: 'p', text: 'Step 2: Convert to Numerical Representation. A separate service converts this raw data into a vector (a list of numbers). Important design point: This conversion is compute-heavy. So in a well-designed system, this is not done inside the database. It runs as a separate service. That way: Storage scales independently. Compute scales independently. Separation of concerns keeps systems maintainable.' },
      { type: 'p', text: 'Step 3: Store the Vector. The vector database stores: Product ID, Vector (list of numbers), Optional metadata. But storing numbers is easy. The real engineering challenge is searching efficiently.' },
      { type: 'p', text: 'Let\'s say you have 50 million products. A user searches for "minimal wooden chair." You convert that query into a vector. Now you must find the closest vectors among 50 million entries.' },
      { type: 'p', text: 'If you compare against every single record, it\'s too slow. So vector databases use specialized indexing techniques designed for nearest-neighbor search. Instead of scanning everything, the system narrows the search intelligently. These methods don\'t always guarantee the mathematically perfect nearest result. But they return very close matches extremely fast.' },
      { type: 'p', text: 'In production systems, speed and user experience matter more than perfect mathematical precision.' },
      { type: 'h2', text: 'Now let\'s discuss data ingestion.' },
      { type: 'p', text: 'When a new product is added: 1) Product data is stored in the primary database. 2) A vector is generated. 3) The vector is inserted into the vector database. 4) The similarity index updates.' },
      { type: 'p', text: 'Unlike a simple B-tree index, updating similarity indexes can be more complex. So if your platform has high write traffic: You may batch inserts. You may rebuild parts of the index periodically. You must test ingestion throughput carefully. This is where real system engineering decisions are made.' },
      { type: 'h2', text: 'Now let\'s walk through the query path clearly.' },
      { type: 'p', text: 'User searches: "minimal wooden chair." 1) Application sends the text to the vector conversion service. 2) Service returns a query vector. 3) That vector goes to the vector database. 4) The database returns top 20 closest product IDs. 5) Your main database fetches full product details. 6) Business logic applies filters (price, stock, availability).' },
      { type: 'p', text: 'Notice something important: The vector database is not your main source of truth. It does not replace MySQL or PostgreSQL. It works alongside them. One handles structured data and transactions. The other handles similarity search.' },
      { type: 'h2', text: 'Now think about scale.' },
      { type: 'p', text: 'Suppose you have 500 million products. You cannot store all vectors on one machine. So you shard. Each shard stores a portion of vectors. When a query comes: It is sent to multiple shards. Each shard returns its top matches. A coordinator merges them. Final top results are returned. This merging step must be efficient. Otherwise latency grows quickly. This pattern is similar to distributed search engines.' },
      { type: 'h2', text: 'Now consider memory planning.' },
      { type: 'p', text: 'Similarity indexes are often memory-heavy. You must calculate: Vector size × number of records × index overhead. Index overhead can be multiple times the raw vector size. If you underestimate this, performance degrades. Good system design includes capacity planning, not just coding.' },
      { type: 'h2', text: 'What about failures?' },
      { type: 'p', text: 'If one node fails, replica nodes take over. These systems usually prioritize availability. If one similar product differs slightly for a few seconds, users won\'t notice. But if search goes down entirely, that\'s unacceptable. So trade-offs are intentional.' },
      { type: 'h2', text: 'Let\'s test your understanding.' },
      { type: 'p', text: 'If vector dimension increases from 256 to 1024: Memory usage increases. CPU cost for distance calculation increases. Latency may increase. Higher dimension means higher infrastructure cost. If dataset grows from 10 million to 100 million: Search should not become 10x slower. But shard count and memory planning must adjust. Scale changes architecture.' },
      { type: 'h2', text: 'So when should you use a vector database?' },
      { type: 'p', text: 'Use it when: Similarity search is a core product feature, Dataset is large, Low latency is required, Brute-force comparison is not feasible.' },
      { type: 'list', items: ['E-commerce recommendations', 'Music similarity', 'News article related stories', 'Fraud pattern detection', 'Resume matching'] },
      { type: 'p', text: 'When should you avoid it? Small datasets, Exact filtering use cases, Heavy transactional requirements, Complex relational joins. In those cases, a relational database is sufficient.' },
      { type: 'quote', text: 'A vector database is built to answer one type of question efficiently: "What is closest to this?" It separates compute from storage. It uses specialized indexing. It scales horizontally. It complements your primary database.' }
    ]
  }
];

/* =====================================================================
   HELPERS
   ===================================================================== */
const ALL_CATEGORIES = [...new Set(articles.map(a => a.category))];

/* Parse **bold** markdown in text strings */
const parseBold = (text) => {
  if (!text || !text.includes('**')) return text;
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
};

const renderBlock = (block, idx) => {
  switch (block.type) {
    case 'p': {
      const isTakeaway = block.style && (block.style.fontWeight === 600 || block.style.fontWeight === '600');
      if (isTakeaway) {
        return (
          <div key={idx} className="article-takeaway" role="note">
            {parseBold(block.text)}
          </div>
        );
      }
      return <p key={idx} style={block.style}>{parseBold(block.text)}</p>;
    }
    case 'h2':
      return <h2 key={idx}>{block.text}</h2>;
    case 'h3':
      return <h3 key={idx} style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 700, marginTop: '36px', marginBottom: '16px' }}>{block.text}</h3>;
    case 'list':
      return (
        <ul key={idx} role="list">
          {block.items.map((item, i) => {
            const colonIdx = item.indexOf(':');
            if (colonIdx > 0 && colonIdx < 35) {
              return (
                <li key={i}>
                  <strong>{item.slice(0, colonIdx)}</strong>{parseBold(item.slice(colonIdx))}
                </li>
              );
            }
            return <li key={i}>{parseBold(item)}</li>;
          })}
        </ul>
      );
    case 'pre':
      return (
        <pre key={idx} aria-label="Code example">
          <code>{block.text}</code>
        </pre>
      );
    case 'quote':
      return (
        <blockquote key={idx} className="article-quote">
          {parseBold(block.text)}
        </blockquote>
      );
    default:
      return null;
  }
};


/* =====================================================================
   READING PROGRESS BAR
   ===================================================================== */
const ReadingProgress = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setWidth(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="reading-progress-bar"
      style={{ width: `${width}%` }}
      role="progressbar"
      aria-valuenow={Math.round(width)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
    />
  );
};

/* =====================================================================
   ARTICLE VIEW
   ===================================================================== */
const Article = ({ article, fontSize, setFontSize, allArticles, setCurrentArticleId }) => {
  const currentIdx = allArticles.findIndex(a => a.id === article.id);
  const prevArticle = currentIdx < allArticles.length - 1 ? allArticles[currentIdx + 1] : null;
  const nextArticle = currentIdx > 0 ? allArticles[currentIdx - 1] : null;

  const navigate = (id) => {
    setCurrentArticleId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <article className="article-outer" aria-labelledby="article-title">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Meta bar */}
        <div className="article-meta-bar" role="complementary" aria-label="Article information">
          <div className="article-meta-left">
            <span className="badge" aria-label={`Category: ${article.category}`}>{article.category}</span>
            <span aria-hidden="true">•</span>
            <span>{article.date}</span>
            <span aria-hidden="true">•</span>
            <span aria-label={`Estimated reading time: ${article.readTime}`}>{article.readTime}</span>
          </div>
          <div className="font-size-controls" role="group" aria-label="Font size controls">
            <button
              onClick={() => setFontSize('normal')}
              className={fontSize === 'normal' ? 'active' : ''}
              aria-pressed={fontSize === 'normal'}
              aria-label="Normal font size"
              style={{ fontSize: '0.85rem' }}
            >A</button>
            <button
              onClick={() => setFontSize('large')}
              className={fontSize === 'large' ? 'active' : ''}
              aria-pressed={fontSize === 'large'}
              aria-label="Large font size"
              style={{ fontSize: '1rem' }}
            >A</button>
          </div>
        </div>

        {/* Title */}
        <h1 id="article-title">{article.title}</h1>

        {/* Hero Image */}
        <img
          src={article.image}
          alt={`Cover image for ${article.title}`}
          className="article-hero-img"
          loading="lazy"
        />

        {/* Body */}
        <div className={`article-body${fontSize === 'large' ? ' large' : ''}`}>
          {article.content.map((block, idx) => renderBlock(block, idx))}
        </div>

        {/* Prev / Next Navigation */}
        {(prevArticle || nextArticle) && (
          <nav className="article-nav" aria-label="Article navigation">
            {prevArticle ? (
              <div
                className="article-nav-card"
                onClick={() => navigate(prevArticle.id)}
                role="button"
                tabIndex={0}
                aria-label={`Previous article: ${prevArticle.title}`}
                onKeyDown={e => e.key === 'Enter' && navigate(prevArticle.id)}
              >
                <div className="nav-label">← Previous</div>
                <div className="nav-title">{prevArticle.title}</div>
              </div>
            ) : <div />}
            {nextArticle ? (
              <div
                className="article-nav-card next"
                onClick={() => navigate(nextArticle.id)}
                role="button"
                tabIndex={0}
                aria-label={`Next article: ${nextArticle.title}`}
                onKeyDown={e => e.key === 'Enter' && navigate(nextArticle.id)}
              >
                <div className="nav-label">Next →</div>
                <div className="nav-title">{nextArticle.title}</div>
              </div>
            ) : <div />}
          </nav>
        )}
      </motion.div>
    </article>
  );
};

/* =====================================================================
   BROWSE VIEW with Search & Filter
   ===================================================================== */
const Browse = ({ setView, setCurrentArticleId }) => {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const reversedArticles = [...articles].reverse();

  const filtered = reversedArticles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const q = query.toLowerCase().trim();
    const matchesQuery = !q
      || article.title.toLowerCase().includes(q)
      || article.category.toLowerCase().includes(q)
      || article.date.toLowerCase().includes(q)
      || (article.content || []).some(b => b.text && b.text.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  const openArticle = (id) => {
    setCurrentArticleId(id);
    setView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ['All', ...ALL_CATEGORIES];

  return (
    <section className="browse-section" aria-labelledby="browse-title">
      <div className="browse-header">
        <div className="hero-bg-shapes">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              top: '-10%',
              left: '10%',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1.2, 1, 1.2],
              x: [0, -60, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '5%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
              filter: 'blur(80px)',
            }}
          />
        </div>

        <div className="container hero-content-inner">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-avatar-wrap"
          >
            <img
              src="/images/aditya_tandon.png"
              alt="Aditya Tandon"
              className="hero-avatar"
            />
            <div className="hero-avatar-glow" />
          </motion.div>
          <motion.div
            className="hero-info-column"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 id="browse-title" className="browse-title">
              System Design
            </h1>
            <motion.div
              className="hero-author"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              By Aditya Tandon
            </motion.div>
            <motion.p
              className="browse-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              A deep dive into the architecture of modern scalable systems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="hero-actions"
            >
              <a
                href="https://whatsapp.com/channel/0029VbBF1XKF1YlMyYuPM23s"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Join Channel
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="container">
        <div className="search-bar-wrap">
          <div className="search-input-wrap" role="search">
            <span className="search-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              id="search-articles"
              type="search"
              className="search-input"
              placeholder="Explore system design topics..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Search articles"
              autoComplete="off"
              spellCheck="false"
            />
          </div>

          <div className="filter-chips-container">
            <div className="filter-chips" role="group" aria-label="Filter by category">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`filter-chip${activeCategory === cat ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="search-meta" aria-live="polite" aria-atomic="true">
            <div className="search-results-line" />
            <span className="search-results-count">
              {filtered.length === reversedArticles.length
                ? `System Design Masterclass`
                : `Found ${filtered.length} matching articles`}
            </span>
            <div className="search-results-line" />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="articles-grid" role="list">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <div className="no-results" role="status">
              <h3>No articles found</h3>
              <p>Try a different keyword or clear filters.</p>
            </div>
          ) : (
            filtered.map((article, i) => {
              const excerpt = article.excerpt
                || ((article.content.find(c => c.type === 'p')?.text || '').substring(0, 140) + '…');
              return (
                <motion.div
                  key={article.id}
                  className="article-card"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.04, 0.3) }}
                  onClick={() => openArticle(article.id)}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${article.date}: ${article.title}`}
                  onKeyDown={e => e.key === 'Enter' && openArticle(article.id)}
                >
                  <img
                    src={article.image}
                    alt={`Thumbnail for ${article.title}`}
                    className="card-image"
                    loading="lazy"
                  />
                  <div className="card-body">
                    <div className="card-meta">
                      <span className="card-badge">{article.date}</span>
                      <span>{article.category}</span>
                      <span aria-label={`Reading time: ${article.readTime}`}>{article.readTime}</span>
                    </div>
                    <h2 className="card-title">{article.title}</h2>
                    <p className="card-excerpt">{excerpt}</p>
                    <div className="card-cta" aria-hidden="true">
                      Read Article
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

/* =====================================================================
   MAIN APP
   ===================================================================== */
function App() {
  const [view, setView] = useState('browse');
  const [currentArticleId, setCurrentArticleId] = useState('day-0');
  const [isDistractionFree, setIsDistractionFree] = useState(false);
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('normal');

  const currentArticle = articles.find(a => a.id === currentArticleId);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Escape key exits focus mode
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsDistractionFree(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, currentArticleId]);

  return (
    <div style={{ minHeight: '100vh' }}>
      <ReadingProgress />

      {/* ---- HEADER ---- */}
      <header
        className={`site-header${isDistractionFree ? ' hidden' : ''}`}
        role="banner"
      >
        <button
          onClick={() => { setView('browse'); setIsDistractionFree(false); }}
          className="logo"
          aria-label="ReaderHub – go to homepage"
          style={{ border: 'none', background: 'transparent', cursor: 'pointer', padding: 0 }}
        >
          Reader<span>Hub</span>
        </button>

        <nav className="nav-actions" aria-label="Site navigation">
          <button
            onClick={toggleTheme}
            className="btn btn--icon"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light'
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
            }
          </button>

          {view === 'article' && (
            <button
              onClick={() => { setView('browse'); setIsDistractionFree(false); }}
              className="btn"
              aria-label="Back to all articles"
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
              All Articles
            </button>
          )}

          {view === 'article' && (
            <button
              onClick={() => setIsDistractionFree(prev => !prev)}
              className="btn"
              aria-label={isDistractionFree ? 'Exit focus mode' : 'Enter focus mode'}
              aria-pressed={isDistractionFree}
            >
              {isDistractionFree
                ? <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" /><line x1="10" y1="14" x2="3" y2="21" /><line x1="21" y1="3" x2="14" y2="10" /></svg> Exit Focus</>
                : <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg> Focus</>
              }
            </button>
          )}
        </nav>
      </header>

      {/* ---- MAIN ---- */}
      <main id="main-content" tabIndex={-1} aria-label="Main content">
        <AnimatePresence mode="wait">
          {view === 'browse' ? (
            <motion.div
              key="browse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Browse setView={setView} setCurrentArticleId={setCurrentArticleId} />
            </motion.div>
          ) : (
            <motion.div
              key={currentArticleId}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Article
                article={currentArticle}
                fontSize={fontSize}
                setFontSize={setFontSize}
                allArticles={articles}
                setCurrentArticleId={(id) => {
                  setCurrentArticleId(id);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ---- FOOTER ---- */}
      <footer className={`site-footer${isDistractionFree ? ' hidden' : ''}`} role="contentinfo">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: Brand & Identity */}
            <div className="footer-col brand-col">
              <div className="footer-logo">
                <span className="logo-text">Reader Hub</span>
              </div>
              <p className="footer-tagline">
                Mastering the art of scalable architectures and distributed systems.
              </p>
              <div className="creator-focus">
                <span className="built-label">Curated & Built by</span>
                <a href="https://rajdeep-singh.vercel.app/" target="_blank" rel="noopener noreferrer" className="creator-name-link">
                  Rajdeep Singh
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className="footer-col links-col">
              <h4 className="footer-heading">Platform</h4>
              <nav className="footer-nav">
                <a href="#" onClick={(e) => { e.preventDefault(); setView('browse'); }}>Browse Articles</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setView('about'); }}>About Course</a>
                <a href="#" onClick={(e) => { e.preventDefault(); }}>System Design 101</a>
                <a href="#" onClick={(e) => { e.preventDefault(); }}>Interview Guide</a>
              </nav>
            </div>

            {/* Column 3: Resources */}
            <div className="footer-col links-col">
              <h4 className="footer-heading">Resources</h4>
              <nav className="footer-nav">
                <a href="https://whatsapp.com/channel/0029VbBF1XKF1YlMyYuPM23s" target="_blank" rel="noopener noreferrer">WhatsApp Channel</a>
                <a href="#">Technical Blog</a>
                <a href="#">Architecture Maps</a>
                <a href="#">Open Source</a>
              </nav>
            </div>

            {/* Column 4: Social & Connect */}
            <div className="footer-col social-col">
              <h4 className="footer-heading">Connect</h4>
              <div className="footer-social-list">
                <a href="https://github.com/RajdeepKushwaha5" target="_blank" rel="noopener noreferrer" className="social-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
                  <span>GitHub</span>
                </a>
                <a href="https://x.com/rajdeeptwts" target="_blank" rel="noopener noreferrer" className="social-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  <span>Twitter</span>
                </a>
                <a href="https://www.linkedin.com/in/rajdeepsingh5/" target="_blank" rel="noopener noreferrer" className="social-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
                  <span>LinkedIn</span>
                </a>
                <a href="https://medium.com/@rajdeep01" target="_blank" rel="noopener noreferrer" className="social-item">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.41-3.38 6.41s-3.38-2.87-3.38-6.41 1.51-6.41 3.38-6.41 3.38 2.87 3.38 6.41zM24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12z" /></svg>
                  <span>Medium</span>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 Reader Hub
            </div>
            <div className="footer-legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ---- FOCUS MODE EXIT BUTTON ---- */}
      <AnimatePresence>
        {isDistractionFree && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            onClick={() => setIsDistractionFree(false)}
            className="exit-focus-btn"
            aria-label="Exit focus mode"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 14 10 14 10 20" /><polyline points="20 10 14 10 14 4" /><line x1="10" y1="14" x2="3" y2="21" /><line x1="21" y1="3" x2="14" y2="10" /></svg>
            Exit Focus Mode
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

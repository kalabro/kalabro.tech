---
title: "React Alicante 2023"
description: "My takeaways and useful links from the conference."
date: "2023-10-01T20:00:00.000Z"
image: image.jpg
---

On this page, you can find a full list of all React Alicante 2023 talks with my short comments. If you want a longer opinionated summary, it’s at the very bottom.

Enjoy and feel free to reuse it if you need a summary for your team or employer.  


## Table Of Contents

[[TOC]]

## Sessions - Day 1
*16 high quality talks on performance, accessibility, resumability, types, SolidJS, Playwright, Canvas, CDN & Edge, tRPC, React Native, codemods, MSW, React Query, and more. Great atmosphere, friendly people, and a lot of complaints about useEffect!* 😄

### React—The Good Parts by Tejas Kumar
Twitter: [@TejasKumar_](https://twitter.com/TejasKumar_)

A response to React haters (who were not really in that room 🤷‍♀️) full of cool "implement it yourself" demos from basic counter app to server components.

### 🌟 SolidJS for React Developers by Erik Rasmussen 🌟
Twitter: [@erikras](https://twitter.com/erikras)  
Slides: https://speakerdeck.com/erikras/solid-for-react-developers  

As I've been using react-final-form from Erik for a while, I trust his opinion on [Solid](https://www.solidjs.com/).
He managed to get the audience up to speed with Solid in 30 minutes, comparing Solid and React side by side and highlighting some non-obvious things. Apparently, the syntax is almost the same but the devil is in details.

### Playing your tests wright by Debbie O'Brien
Twitter: [@debs_obrien](https://twitter.com/debs_obrien)

Another reminder that the testing pyramid is in the past. End-to-end tests are the most reliable way to ensure your app _really_ works, and the tooling is there to make it happen. I agree with the general message, but I may not be as attached to Playwright as Debbie.

### Type safety from the database to the frontend by Forbes Lindesay
Twitter: [@ForbesLindesay](https://twitter.com/ForbesLindesay)

Code-heavy talk on getting your types right in different parts of the stack from [databases](https://www.atdatabases.org/) to [untyped external APIs](https://github.com/ForbesLindesay/funtypes) and everything in between. We even looked at some Rust code. As a bonus, I learned that I can write numbers with underscore symbol in JavaScript:

```js
const oneMillion = 1_000_000;
```

### Building Text Containers in Canvas by Aakansha Doshi
Twitter: [@aakansha1216](https://twitter.com/aakansha1216)  
Slides: https://docs.google.com/presentation/d/1INBB7oE0tI3SFGK5t65ThWXc0lO3hQ_utVBntKyUyog/edit#slide=id.g24789271ec1_0_0  

A deep dive into canvas from [Excalidraw](https://excalidraw.com/) developer. I appreciated the level of detail and how Aakansha broke down the problem into smaller, understandable pieces. Canvas API reminded me of programmatic PDF manipulation from my past PHP experience. I'm glad I don't have to deal with it anymore 😄

### Pushing boundaries to the edge by Facundo Giuliani
Twitter: [@facundozurdo](https://twitter.com/facundozurdo)

An intro into origin vs CDN vs edge for frontend developers. As I was already familiar with the topic, it was less interesting for me. Edge computing is more challenging in practice than it may 
sound in the intros. Still, I met quite a few attendees who enjoyed this overview from Facundo. Indeed, if you are on Vercel, it should be rather easy to start with edge.

### tRPC - Better than REST/GraphQL? by Devlin Duldulao
Twitter: [@DevlinDuldulao](https://twitter.com/DevlinDuldulao)

Lightweight intro into tRPC. The talk wasn't actually diminishing REST or GraphQL as it may look from the title.

### Common Pitfalls in React Native Apps and How to fix them by Dan Neciu
Twitter: [@neciudan](https://twitter.com/neciudan)  
Slides: https://drive.google.com/file/d/1Tw4ojP3iNFe2UdT_xzYvvIWxtcNQOwkt/view

A couple of gotchas from Dan's experience with React Native, such as lack of localStorage, how to correctly import fonts and render HTML, etc. It was interesting to compare it with my [Flutter experience as a React developer](https://kalabro.tech/flutter-for-react-developers/).

### Maximizing React Performance with DevTools: Profiler and Components by Jelena Maravic
LinkedIn: [Jelena Maravic](https://www.linkedin.com/in/jelena-maravic)  
Slides: https://www.canva.com/design/DAFnrN1Ls5g/view  

This short talk was packed with React performance tips and tricks. In practice, developers often fear profiling tools, and I would love to see more presentations popularizing them.

### Codemods - how to support your users with breaking changes delivery by Łukasz Nowak
GitHub: [@lukasznowakpl](https://github.com/lukasznowakpl)  
Slides: https://github.com/LukaszNowakPL/codemods/blob/main/%5BEN%5D%202023-09-29%20-%20React%20Alicante%20-%20Codemods.pdf  

A hands-on example of using codemods to help users overcome breaking changes in your library. Apparently, tools like [jscodeshift](https://github.com/facebook/jscodeshift) make it, if not easy, then at least doable. 

### Seek, and you shall find your way to fun! by Kevin Maes
Twitter: [@kvmaes](https://twitter.com/kvmaes)

Kevin presented his side project, which he built just for fun (and also to learn some fancy graph algorithms that we wouldn't usually use in our React apps). You can find the code [here on GitHub](https://github.com/kevinmaes/maze).

### Crafting Accessible Components for Component Libraries by Mathilde Buenerd
GitHub: [@mathildebuenerd](https://github.com/mathildebuenerd)

Mathilde opened a series of accessibility talks at React Alicante with React-specific tips on accessibility, such as React.forwardRef for overcoming focus issues, or React.AriaAttributes to enable aria-* attributes on library components.
### The State of GraphQL Clients in 2023 by Roy Derks
Twitter: [@gethackteam](https://twitter.com/gethackteam)

A short and practical overview of GraphQL clients' space, with special attention to Relay. As I'm relatively new to GraphQL, I found this talk informative. 

### 🌟 Hydration, Islands, Streaming, Resumability… Me, Oh My! by Matheus Albuquerque 🌟 
Twitter: [@ythecombinator](https://twitter.com/ythecombinator)  
Slides: https://speakerdeck.com/ythecombinator/react-alicante-2023  

A thorough walk-through with tons of historical references and technical details. I bookmarked the slides to review the links later. Given how hot this space is right now, I appreciate the balanced, non-biased tone of this talk.

### All you need is a contract… by Daniel Afonso
Twitter: [@danieljcafonso](https://twitter.com/danieljcafonso)

Daniel is clearly a big fan of Mock Service Worker and React Query! I believe they are both defacto standards anyway. MSW received special attention as an amazing dev tool not only 
for running tests but also for parallelising backend and frontend development.

### 🌟 Practical guide to building accessible forms in React by Kateryna Porshnieva 🌟
Twitter: [@krambertech](https://twitter.com/krambertech)  
Slides: https://krambertech.notion.site/krambertech/Practical-Guide-to-building-accessible-forms-in-React-daba42af8f894223bbc8e184e532ed64

The best talk of the day and probably the best talk I've seen in a while. Kateryna is a pro at explaining complex topics in a simple, engaging way. Absolutely recommended.

## Sessions - Day 2

*Another 16 talks on AI, Solid, Astro, Qwik, ReasonML, state machines and more.*
### Why I Still Choose React by Chance Strickland
Twitter: [@chancethedev](http://twitter.com/chancethedev)

An overview of React past and present with funny 200-line useEffect examples from 
a seasoned React developer involved in Remix, React Training, Reach UI and other famous projects. SolidJS is mentioned again, but it's clear that the audience still 
chooses React.   
Chance rightly points out that if signals were a silver bullet, React would adopt them already. React's main advantage is its mental (rendering) model, and there should be other ways to fix useEffect without sacrificing the beauty of the `UI = fn(state)` formulae.


### Processes, StateCharts and WorkFlows by Mattia Manzati
Twitter: [@mattiamanzati](https://twitter.com/mattiamanzati)  
Slides: https://mattiamanzati.github.io/long-running-process/1  

A side track into the world of sagas, eventual consistency and state machines. 
I could make sense of the material thanks to Mattia's creative analogies and [my prior DDD knowledge](https://kalabro.tech/learning-domain-driven-design-book/). It may feel too advanced, but in fact, we all deal with more complex problems at work than the famous counter app. 

### Resumability in the next generation frontend framework With O(1) loading time by Ruby Jane
Twitter: [@rubyjane88](https://twitter.com/rubyjane88)

A rather boring intro into resumability and its frontman Qwik. What impressed me, though, is how the React community is open to alternative voices and ideas in the space.

### 🌟 Server-side rendering React natively with Reason by David Sancho 🌟 
Twitter: [@davesnx](https://twitter.com/davesnx)  
Slides: https://docs.google.com/presentation/d/150JjwU4HdtdWN_iT5MkvaKrQv3Dnj3OJCey-cRi3V9U/edit#slide=id.g7207e88d15_0_121  
Blog post: https://sancho.dev/blog/server-side-rendering-react-in-ocaml 

An active contributor to Reason/OCaml ecosystem explains the basics of ReasonML and 
shares a story of building [server-reason-react](https://github.com/ml-in-barcelona/server-reason-react). I wish there were more talks from active open source contributors who deserved their round of applause!

### Bye-bye, weeds! Digital Gardening with Astro & MDX by Kathleen McMahon
Twitter: [@resource11](https://twitter.com/resource11)

A story of upgrading a personal blog from Gatsby 2.3 to Astro. Funny enough, this very blog
runs on Gatsby 2.4. I feel Kathleen's pain, but maybe a dedicated talk at React Alicante is a bit too much for this topic. Anyway, I shortlisted Astro if I ever need to migrate from Gatsby.

### Rendering Dilemma: Reacting to State Change by Atila Fassina
Twitter: [@AtilaFassina](https://twitter.com/atilafassina)

At this point, speakers started repeating each other with Solid comparisons, counter demos and `UI = fn(state)` slides. Nevertheless, Atila's talk was well prepared, and I learned about React Forget compiler efforts (auto-memoisation) and [Svelte Runes](https://svelte.dev/blog/runes) (signals in Svelte).

### A comparison of Microfrontends composition techniques Module Federation (webpack, vite vs turborepo) by Aris Markogiannakis
Twitter: [@arismarko](https://twitter.com/arismarko)  
Slides: https://www.canva.com/design/DAFqwlKyZ5o/rn_f4K5wT41jbsR0e3XpYA/view

As it was a lightning talk, it only gave a quick overview of [microfrontends](https://micro-frontends.org/) concept. Aris 
compared Next.js multi-zones solution with Webpack Module Federation (which now has Vite support), and the latter won (no surprise).   
Apparently, I missed a whole conference dedicated
to microfrontends, but luckily [videos are available on YouTube](https://youtube.com/@smapiot?si=4-pJATHPowA6rR2Y)!

### Accelerating Your Career: Becoming a 10x Junior Engineer by Joana Santos
Twitter:  [@joanamcsa](https://twitter.com/joanamcsa)

An exceptionally well-prepared lighting talk! I'm extra happy that Joana pointed 
out the importance of mentorship in tech.

### Supercharging React Performance with SolidJS Signal by Subham Bhattacharjee
Twitter: [@subhaminion](https://twitter.com/subhaminion)

Unfortunately, the talk repeated 99% of what previous speakers had already covered.

### Patterns for Making Accessible Components by Chris Cormier
GitHub: [@LeviathanTheGreat](LeviathanTheGreat)

An organic continuation of the accessibility topic started on day 1. Chris took a couple of practical examples and walked us through making them accessible. Accessibility
speakers coordinated well to avoid repeated content and at the end of the day
I had a coherent understanding of the topic. Well done!

### How To Build a Chrome Extension Using React by Adina Stoica
Twitter [@adinutzyc21](https://twitter.com/adinutzyc21)

A shorter version of Adina's talk missed the React part but was still informative if you plan
to build a Chrome extension.

### You are not becoming rich with a mobile app by Stefano Solinas
Twitter: [@obsidianart](https://twitter.com/obsidianart)

Stefano shared the news from indiehackers space. Most side gigs fail, but even when
they succeed in the first place, like Stefano's Imagzle app, it's a tough ride.

### Reviewing code review - duty, fun or... revenge? by Paulina Chojnowska
Twitter: [@AntariaPaulina](https://twitter.com/AntariaPaulina)  
Slides: https://www.slideshare.net/Paulina218683/reactalicante2023paulinachojnowskapdf  

Another perfect lightning talk on the challenges of a good old code review. Paulina nails it down to two questions: Does the code work? Do you like it?   
A bonus:
[slides from Smashing Conference on Conventional Comments](https://slides.pixelschubser.ch/conventional-comments-for-codereviews.html#/).

### 🌟 Making state management intelligent by David Khourshid 🌟 
Twitter: [@davidkpiano](https://twitter.com/davidkpiano)

An impressive yet easy-to-follow demo by David using [xstate](https://www.npmjs.com/package/xstate), ChatGPT and React. This talk was very much needed after so many counter demos!

### Building Machine Learning Models on Edge with React by Shivay Lamba
Twitter: [@HowDevelop](https://twitter.com/HowDevelop)  
Slides: https://docs.google.com/presentation/d/1Eg4mdpc9-kvmk_yXUU0_mCkyzXs_jvHMqj5FR4URhKE/edit#slide=id.g2863585916f_0_1 

A comprehensive overview of AI tools in the web ecosystem. Check the slides for tons of links from TensorFlow.js to Langchain to AI.JSX. I will definitely do as it will likely be part of my
day-to-day job very soon.

### Imperative vs Declarative: Weathering the storm by Kyle Simpson
Twitter: [@getifyX](https://twitter.com/getifyX)

Kyle welcomed us to reconsider what we understand as imperative and declarative programming.
He emphasised the importance of optimising code for reading, not for compiling. Unfortunately, he lost me in the second part of his talk as I was clearly overreacted.

## My summary

It was my first conference entirely dedicated to React, and I enjoyed it a lot, even if my
talk reviews may sound a bit picky. Sorry about that - I'm a demanding attendee!

In fact, I liked it so much that I put together this page to 
share useful ideas with my friends and colleagues. Here are they:

### Sessions diversity and distribution 👩🏼‍💻👨🏾‍💻
All talks can be separated into inspirational speeches aka keynotes (1), overviews/getting-started guides (2), and specialised deep dives (3). To me, we had too many keynote-style sessions (1) and not enough advanced React-specific content (3).

The average quality of talks was very high. Speakers from various locations and with diverse backgrounds were presented. 

### Beyond React 💐
It was clear to me and everyone whom I met in Alicante that React will be around for a long time. The ecosystem is healthy, and there is no need to switch to another framework.
Still, the React Alicante lineup responded enthusiastically to the rise of alternative frameworks. I'm returning to Barcelona knowing much more about Solid than I knew before. 

### Popular choices 📊

Based on a few conversations I had: Next.js, Typescript, React Query, Cypress, GraphQL (no surprises here)

### Unpopular topics 🔻

State management, code structure / architecture, styling & UI libraries, forms - these topics were on hold as solved.

React Server Components were purely covered, even though performance was a hot topic. RSC adoption is low, too (again, only based on my conversations)

### Organisation 👏

By the end of day 2 it became a tradition to clap to the organisers at the beginning
of every talk. Indeed, the organisation was high class. I'm definitely returning next year!  
Maybe with a lightning talk? 😄
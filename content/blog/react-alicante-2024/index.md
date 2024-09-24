---
title: "React Alicante 2024"
description: "Full list of talks with my short comments."
date: "2024-09-25T10:00:00.000Z"
image: image.jpg
---

_✍️ This post is still a draft_

On this page, you can find a full list of all [React Alicante 2024](https://reactalicante.es/) talks with my short comments. A longer opinionated summary at the end.

Enjoy and feel free to reuse it if you need a summary for your team or employer. 

## Table Of Contents

[[TOC]]

## Sessions - Day 1

*17 high quality talks on React Server Components, Astro, SolidJS, a11y, and good old CSS!*

### Composition is King by Chance Strickland
[**@chancethedev**](http://x.com/chancethedev)

Despite the fact that React is shifting to the server, its core principles, **composition** and  **UI as a function of state**, won't go anywhere.

### Enhancing Forms with React Server Components and React 19 by Aurora Scharff
[**@aurorascharff**](http://x.com/aurorascharff) ([slides](https://speakerdeck.com/aurorascharff/enhancing-forms-with-react-server-components))

A hands on demo of server components and actions in Next.js. Aurora popularizes RSC in her talks, workshops, and [a blog](https://aurorascharff.no/) where she publishes in-depth RSC guides. She also recommended me a [case study talk from Tomas Jansson](https://youtu.be/4wOqpPdR1tg?si=AFMRpjZ5Q2lFJj4E) as an example of RSC in production (of course, in Next.js).

### Debugging JS and React by Mark Erikson
[**@acemarke**](http://x.com/acemarke) ([older version of slides from 2023](https://blog.isquaredsoftware.com/presentations/2023-06-debugging-js/?slideIndex=0&stepIndex=0))

A good refresher on debugging techniques from Redux maintainer. I've never used `console.table()` or `console.count()` before. `console.timeStamp()` should be handy in profiling, too.

### 🌟 Building Complex UI with State Machines by Erik Rasmussen 🌟 
[**@erikras**](http://x.com/erikras) ([code](https://github.com/erikras/search-state-machine))

Erik, who is most famous for [redux-form](https://github.com/redux-form/redux-form) and [final-form](https://github.com/final-form/final-form), walked us through building a state machine for a search form using [XState](https://github.com/statelyai/xstate). In his unique style, he made me, my teammates and probably the whole audience fall in love with XState.

### Astro Studio - All Secrets Reveiled by Elian Van Cutsem
[**@eliancodes**](http://x.com/eliancodes) ([code](https://github.com/ElianCodes/astro-ama-demo))

An overview of all the latest Astro features: [Astro Studio sunset and Astro DB](https://astro.build/blog/goodbye-astro-studio/), [server islands](https://astro.build/blog/astro-4120/#experimental-server-islands) and [actions](https://astro.build/blog/astro-490/#react-19-support), [Astro Starlight](https://starlight.astro.build/), [community loaders](https://astro.build/blog/community-loaders/), and I likely forgot something. Astro 5 is in beta, but the only missing bit is stable Vite 6 release.

### The A1lyboros (maximizing code accessibility with Copilot) by Alena Nikolaeva & David Jensenius
[**@alenanik11**](https://x.com/alenanik11) ([slides](https://pitch.com/v/maximizing-code-accessibility-with-ai-assistants-c444mr))

The only way to ensure accessibility is through thorough manual testing. The speakers, who both work on Copilot at Github, raised the problem of bias in large language models. AI code generators don't guarantee accessibility, but they still can be helpful for exploring the topic. Get started with this prompt shared by the speakers:

```
I need to learn about accessibility and need to write code that conforms with the WCAG 2.1 level A and AA
success criteria defined at https://www.w3.org/TR/WCAG21/. I want you to be my accessibility coach, a
subject-matter expert that makes me think and account for all accessibility requirements and usability
enhancements. When you answer questions about accessibility please use reputable sources such as w3.org,
webaim.org, developer.mozilla.org, and https://www.ibm.com/able/. When possible, please provide links and
references for additional learning. When you suggest code please use semantic HTML, ensure it is operable
using the keyboard, follow WCAG 2.1 sufficient techniques, and follow the ARIA Authoring Practices Guide
and related design patterns. Do you understand these instructions?
```

### Enhancing your Static Sites with React Server Components by Akash Hamirwasia
[**@blenderskool**](https://x.com/blenderskool)

Every static site eventually needs more dynamic data fetching, and it's historically been a pain. On a simple example, Akash demonstrates how RSC dramatically simplify the process and render previous tricks like `useStaticQuery` from Gatsby or `getStaticProps` from Next.js obsolete. An earlier version of this talk is available in [the author's blog](https://akashhamirwasia.com/talks/enhancing-static-sites-with-react-server-components-react-nexus/).

### Making your own tRPC-like library by Gabriel Grubba
[**@gabrielgr**](https://x.com/gab_grubba)

With end-to-end type safety provided by tools like tRPC, you can "dot your way into it" without ever leaving your IDE. But how does tRPC work? Gabriel suggests implementing one yourself to understand the magic. The constraints of a lightning talk, unfortunately, didn't allow me to catch the details.

### Diagrams you need to know by Jenny Truong
[**@jen\_ayy\_**](https://x.com/jen_ayy_)

Non-technical lightning talk from a stately team member with tons of links to diagram drawing services. I only managed to capture https://dbdiagram.io/ and https://www.tldraw.com/. Waiting for the slides!

### Using events and modern state management tools to clean up local-first logic by Wojciech Ogrodowczyk
[**@sharnik**](https://github.com/sharnik) ([slides](https://pitch.com/v/react-alicante-wojciech-p7utf2))

What makes some products really great? They solve a hard problem for their users, often employing a non-obvious technical approach, like event sourcing for an imaginary TODO app. As another example, Wojciech references [a talk from Liner about local-first approach](https://www.youtube.com/watch?v=VLgmjzERT08).

### Dude where is my password? by Miquel Company
[**@solilokiam**](https://github.com/solilokiam) ([demo](https://whereismypassword.vercel.app/) / [repo](https://github.com/solilokiam/whereismypassword))

Miquel explained how passkeys work by building an app with [SimpleWebAuthn](https://github.com/MasterKale/SimpleWebAuthn) and Next.js. While passwordless approach is much more secure, Miquel admitted that after years of memorizing passwords, users don't feel confident in getting rid of them. Popularization talks like his are a great way to spread the word.

### Let's build everything! The chaos of pet projects by Mikhail Korolev
[**@mkrl__**](https://x.com/mkrl__)

A mix of art and technology from someone who broke two arms in an bicycle accident just before the conference. Misha is the king of pet projects and shared how he manages his projects from the initial idea to the finish line. Talks like this make in-person conferences special, and it's impossible to fully capture their vibe in text or video.

### How to make cheap e2e tests by Anastasiia Dragich
[**@nastia_dragich**](https://twitter.com/nastia_dragich)

Playwright won, and we all run hours of end-to-end tests in our CI pipelines. Nastia shared how she makes them much faster by mocking backend APIs. She calls this type of tests "isolated integration tests". I also learned that Playwright has `webServer` config to start background processes before running tests.

### 3D Models on the Web with React Three Fiber by Thomas Derflinger
**Web:** https://tderflinger.com/

An interactive intro into React Three Fiber for rendering 3D models in the browser. Thomas also has [a blog post](https://tderflinger.com/en/react-three-fiber-displaying-gltf-model) on the same topic.

### A Schema is all you need! by Mattia Manzati
[**@MattiaManzati**](https://x.com/MattiaManzati) ([slides](https://mattiamanzati.github.io/schema-is-all-you-need/1))

Yes, TypeScript is great, but it doesn't help in the good old JavaScript runtime. Solutions like [zod](https://zod.dev/) improve the situation, but don't fully solve it. Mattia demos the power of [`@effect/schema`](https://effect.website/docs/guides/schema/introduction) by building an encoder and decoder for a simple Todo item schema. I also learned about property-based testing with [fast-check](https://fast-check.dev/).

### Signals: What, How, and Why! by Atila Fassina
[**@atilafassina**](https://x.com/atilafassina)

Atila stepped up on short notice to replace a cancelled talk and delivered a high-quality deep dive into signals in SolidJS and beyond. I learned about lazy vs eager signals, performance optimizations in Solid and upcoming [SolidHack](https://hack.solidjs.com/) event.

### 🌟 One App Fits All: Building Responsive Experiences in React by Kateryna Porshnieva 🌟
[**@krambertech**](https://x.com/krambertech)

Kateryna reminded us that we may not need JS at all with the power of modern CSS. She built a responsive app interface using [Utopia](https://utopia.fyi/) fluid design approach, [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp) CSS function, CSS grid, [container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries), [ch units](https://caniuse.com/ch-unit), [hover](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover), [pointer](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer), and [prefers-reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media queries. As an example of UI that does require JS, Kateryna built a fully fluid navigation bar using [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver).

## Sessions - Day 2

*Another 17 talks on React 19, TypeScript, React Native, soft skills and more*

### 🌟 useWat by David Khourshid 🌟
[**@DavidKPiano**](https://x.com/DavidKPiano)

React library (or framework?) is far from being perfect. With humor and kindness, the author of [XState](https://github.com/statelyai/xstate) walked us through some of the weirdest React parts that we learned to accept as a norm. In all this mess, it's best to stop worrying about the latest React features and instead focus on building great products for our users.

### From Chaos to Clarity: Design Patterns for Scalable Software by Joana Santos
[**@joanamcsa**](https://x.com/joanamcsa)

Nobody expected a design patterns talk to include YMCA dance and life advice on how to be yourself. Joana definitely knows how to keep the audience engaged.

### Type-Safe React with OCaml: A Practical Guide by Dillon Mulroy
[**@dillon_mulroy**](https://x.com/dillon_mulroy)

Dillon shared his passion for OCaml and walked us through a simple OCaml code example. OCaml ecosystem is rapidly evolving and becomes more approachable thanks to the tools like [create-melange-app](https://github.com/dmmulroy/create-melange-app) created by Dillon.

### Full Stack Form Validation with React Server Actions by Evyatar Alush
[**@evyataral**](https://x.com/evyataral)

The author of a very interesting form validation framework [Vest](https://github.com/ealush/vest) gave us a live demo of how to get started with it. Server actions supported!

### Continuous Improvements of The Code Review Process by Keren Kenzi
**Blog:** https://medium.com/@KerenKenzi

An overview of code review practices, also available in [Keren's blog](https://medium.com/@KerenKenzi/continuous-improvements-of-the-code-review-process-b776893aba4a).

### Chaos Mode - Finding & Fixing Race Conditions by Forbes Lindesay
[**@ForbesLindesay**](https://x.com/ForbesLindesay) ([slides](https://www.slideshare.net/slideshow/chaos-mode-finding-fixing-race-conditions/271996157))

Forbes provided a great visual explanation of a race condition bug using a search-as-you-type widget as an example. He suggested a method to catch race conditions by introducing random fetch delays, which he calls "Chaos Mode". Then, he showed the wrong, the right and the fast ways to fix the issue. State machines are mentioned again!

### React is turning 19! by Nikhil Sharma
[**@niksharma1997**](https://twitter.com/niksharma1997)

An overview of all the latest React 19 features including React Compiler (even though it's not part of React 19)

### From mentee to mentor: the art of asking questions that accelerate careers by Kate Marshalkina
[**@kalabro**](https://x.com/kalabro)

I had the pleasure of giving a lightning talk, which can be summarized as: "Don't give advice, ask more questions." More on my speaker experience at the end of the post

### Covid fairytale: Building a React Native App to find a toilet roll during pandemic by Aris Markogiannakis
[**@arismarko**](https://x.com/arismarko) ([slides](https://www.canva.com/design/DAD6TaBCdys/CihHkJErEGIy4Ls7U5B9Uw/view?utm_content=DAD6TaBCdys&utm_campaign=designshare&utm_medium=link&utm_source=viewer))

A story of building a fun React Native app as React developer including some details on Prisma and Expo.

### Speed at Scale: Optimizing The Largest CX Platform Out There by Matheus Albuquerque
[**@ythecombinator**](https://x.com/ythecombinator) ([slides](https://speakerdeck.com/ythecombinator/react-alicante-2024))

While conferences focus on bright new things, at work we often deal with legacy codebases, outdated tools, and slow applications. Matheus shared an in-depth case study on optimizing the performance of a large legacy app (React 15, Webpack 1, Node 10). The content was too extensive for a lightning talk, but fortunately, the slides contain all the references. Highly recommended!

### The easy way to Full Stack by Dani Coll
[**@dani-coll**](https://github.com/dani-coll)

Dani sets the stage by sharing dozens of full stack job postings in companies of all sizes. Despite common view, companies do hire full stack engineers. It can be an interesting and fulfilling career path but how to get there? By following our interests and picking small tasks at work beyond our common responsibilities.

### Sweet, savory, and fresh! Accessible design system Storybook tests by Kathleen McMahon
[**@resource11**](https://twitter.com/resource11)

Kathleen made us all smile even though [the stats](https://webaim.org/projects/million/) she shared were not so fun: the more aria labels developers add to webpages, the more accessibility issues they introduce. One way to improve accessibility of React components is to use Storybook built-in tools. They can't replace manual testing, but at least it's a good start.

### Types, TypeScript and the JIT by Daniel Minor
[**@dminor**](https://github.com/dminor) ([slides](https://docs.google.com/presentation/d/1ij_oHImk6UgWpW_vYIQB9wDYeCsbI63MdtfmaFhTRls/mobilepresent#slide=id.g2fe5656cdaa_0_0))

Daniel works on SpiderMonkey, a JavaScript engine that powers Firefox. In his lightning talk, he touched on the theory of types, soundness vs completeness, and how a JavaScript engine executes our code.

### The Shape of Frameworks to Come by Daniel Afonso
[**@danieljcafonso**](https://x.com/danieljcafonso)

An intro to SolidStart, a meta-framework for SolidJS. In contrast to some other frameworks, it aims to mitigate the vendor lock-in issue by using a composable architecture, where each piece can be replaced with a different implementation.

### How you can Server-Render without Rendering on the Server by Eric Vicenti
[**@EricVicenti**](https://x.com/EricVicenti)

Eric presented [Rise Tools](https://rise.tools/), a framework for building mobile apps that are heavily controlled by the server. With a live coding demo, we all saw in action how a mobile app can be updated in real time. Very cool! If Rise Tools takes off, we will have a new way to quickly build and test our mobile app ideas.

### Evolving Game Development with Genetic Algorithms by Kevin Maes
[**@kvmaes**](https://twitter.com/kvmaes)

Kevin shared how he built a game using genetic algorithms to evolve the complexity of game levels. It was fun to listen to his story full of interesting learnings, little details, and funny episodes. I'm impressed by the amount of work required to build a game from scratch. All code is available on [Github](https://github.com/kevinmaes/eggdrop). Of couse, powered by XState!

### The Illusion of Success: When Delivering on Time is not Everything by Paulina Chojnowska

A lot of wisdom about software development processes delivered through a set of funny stories. As a community, we all agree on the importance of work-life balance, the dangers of tech debt, the power of prioritization, and the synergies of teamwork. Yet, things often go wrong. Paulina’s talk was a great reminder that our jobs are not only about code. That’s why we probably won’t be replaced by AI anytime soon.

## My summary

React Alicante is known for its smooth organization, international speakers, and a long list of diverse talks. This year, the conference hosted 18 full talks, 16 lightning talks, and 12 workshops—a massive volume of content! Many speakers and attendees return year after year, which is a sign of a great community. For me, it was the second React Alicante in a row, and this time I returned with a lightning talk!

#### Speaker experience 📣

I'm extremely greatful to the conference organizers for the opportunity to speak. It was interesting and challenging to prepare a 10 min non-technical session on a topic that I could talk about for hours. Inspired by several other talks ([1](https://www.youtube.com/watch?v=KCQ7FAsZCHM), [2](https://www.youtube.com/watch?v=Kl0rmx7aa0w)), I decided to build my presentation around one simple idea: ask more questions. This way I could keep it focused and hopefully useful even for people who were not interested in mentorship.

If you want to learn more about my mentorship experience, please check out my article ["Where to find a mentor"](https://kalabro.tech/where-to-find-mentor-2023/).

#### Technical issues ☠️

This year, I paid more attention to technical issues because I was concerned about them as a speaker. It turned out that a tiny technical issue can severely affect a talk. As a speaker, it’s easy to start panicking and lose the vibe. The audience quickly picks up on this and becomes disengaged. Experienced speakers had video recordings of their live coding pieces in case something went wrong.

#### Popular topics 📊

Unlike last year, **React Server Components** were mentioned in every other talk, sometimes with a fair dose of skepticism due to Next.js situation. **TypeScript** without any doubt became a first-class citizen in the React ecosystem. **XState** was a very popular topic too.

AI was present, but mostly in the form of jokes. Irrelevant Copilot suggestions during live coding demos made people smile. 

#### Videos 🎥

All sessions were recorded and will be available on YouTube. While waiting, please feel free to check out [videos](https://www.youtube.com/watch?v=35u6CMh5IJM&list=PLd7nkr8mN0sVkr3aRy-TZjh8jbjdUENrA) and [my report](https://kalabro.tech/react-alicante-2023/) from 2023.

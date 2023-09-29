---
title: "React Alicante 2023"
description: "My takeaways and useful links from the conference."
date: "2023-09-29T23:55:00.000Z"
image: image.jpg
---

## Day 1
*16 high quality talks on performance, accessibility, resumability, types, SolidJS, Playwright, Canvas, CDN & Edge, tRPC, React Native, codemods, MSW, React Query, and more. Great atmosphere, friendly people, and a lot of complaints about useEffect!* 😄

### React—The Good Parts by Tejas Kumar
Twitter: [@TejasKumar_](https://twitter.com/TejasKumar_)

A response to React haters (who were not really in that room 🤷‍♀️) full of cool "implement it yourself" demos from basic counter app to server components.

### 🌟 SolidJS for React Developers by Erik Rasmussen 🌟
Twitter: [@erikras](https://twitter.com/erikras)

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

A deep dive into canvas from [Excalidraw](https://excalidraw.com/) developer. I appreciated the level of detail and how Aakansha broke down the problem into smaller, understandable pieces. Canvas API reminded me of programmatic PDF manipulation from my past PHP experience. I'm glad I don't have to deal with it anymore 😄

### Pushing boundaries to the edge by Facundo Giuliani
Twitter: [@facundozurdo](https://twitter.com/facundozurdo)

An intro into origin vs CDN vs edge for frontend developers. As I was already familiar with the topic, it was less interesting for me. Edge computing is more challenging in practice than it may 
sound in the intros. Still, I met quite a few attendees who enjoyed this overview from Facundo.

### tRPC - Better than REST/GraphQL? by Devlin Duldulao
Twitter: [@DevlinDuldulao](https://twitter.com/DevlinDuldulao)

Lightweight intro into tRPC. The talk wasn't actually diminishing REST or GraphQL as it may look from the title.

### Common Pitfalls in React Native Apps and How to fix them by Dan Neciu
Twitter: [@neciudan](https://twitter.com/neciudan)

A couple of gotchas from Dan's experience with React Native, such as lack of localStorage, how to correctly import fonts and render HTML, etc. It was interesting to compare it with my [Flutter experience as a React developer](https://kalabro.tech/flutter-for-react-developers/).

### Maximizing React Performance with DevTools: Profiler and Components by Jelena Maravic
LinkedIn: [Jelena Maravic](https://www.linkedin.com/in/jelena-maravic)

This short talk was packed with React performance tips and tricks. In practice, developers often fear profiling tools, and I would love to see more presentations popularizing them.

### Codemods - how to support your users with breaking changes delivery by Łukasz Nowak
GitHub: [@lukasznowakpl](https://github.com/lukasznowakpl)

A hands-on example of using codemods to help users overcome breaking changes in your library. Apparently, tools like [jscodeshift](https://github.com/facebook/jscodeshift) make it, if not easy, then at least doable. 

### Seek, and you shall find your way to fun! by Kevin Maes
Twitter: [@kvmaes](https://twitter.com/kvmaes)

Kevin presented his side project, which he built just for fun (and also to learn some fancy graph algorithms that we wouldn't usually use in our React apps). You can find the code [here on GitHub](https://github.com/kevinmaes/maze).

### Crafting Accessible Components for Component Libraries by Mathilde Buenerd
GitHub: [@mathildebuenerd](https://github.com/mathildebuenerd)

A few React-specific tips on accessibility, such as React.forwardRef for overcoming focus issues, and React.AriaAttributes to enable aria-* attributes on library components.

### The State of GraphQL Clients in 2023 by Roy Derks
Twitter: [@gethackteam](https://twitter.com/gethackteam)

A short and practical overview of GraphQL clients' space, with special attention to Relay. As I'm relatively new to GraphQL, I found this talk informative. 

### Hydration, Islands, Streaming, Resumability… Me, Oh My! by Matheus Albuquerque
Twitter: [@ythecombinator](https://twitter.com/ythecombinator)

A thorough walk-through with tons of historical references and technical details. I [bookmarked the slides](https://speakerdeck.com/ythecombinator/react-alicante-2023) to review the links later. Given how hot this space is right now, I appreciate the balanced, non-biased voice of this talk.

### All you need is a contract… by Daniel Afonso
Twitter: [@danieljcafonso](https://twitter.com/danieljcafonso)

Daniel is clearly a big fan of Mock Service Worker and React Query! I believe they are both defacto standards anyway.

### 🌟 Practical guide to building accessible forms in React by Kateryna Porshnieva 🌟
Twitter: [@krambertech](https://twitter.com/krambertech)

The best talk of the day and probably the best talk I've seen in a while. Kateryna is a pro at explaining complex topics in a simple, engaging way. Once I hunt down the slides, I'll update the article with the link. Absolutely recommended.

## Day 2

*This is a live draft, stay tuned for updates*
---
title: "My tech year in review"
description: "A few tech highlights from 2019."
date: "2019-12-26T15:00:00.115Z"
---

2019 was an interesting and productive year for me. At SystemSeed, I keep sharpening my Tech Lead skills as well as observe the outer space for promising tools, good advice, and inspiration. Unfortunately I spend less time sharing my knowledge publicly and contributing to the open source, and I'm grateful to thousands of talented developers who build amazing libraries, frameworks and modules (that I have to cope with). Without you, web development wouldn't be so wild and creative job. I'm proud to be part of web development industry, and I love my job very much ❤️

Below are a few highlights from my tech work in 2019. All opinions are my own.

## Books

As I get order, I tend to choose books over blog posts. 
By the end of the year I can barely remember a good article or YouTube video -
there were too many of them. It's much easier with good books: I've got only a couple of them to mention.

### [Accelerate: The Science of Lean Software and DevOps: Building and Scaling High Performing Technology Organizations](https://www.goodreads.com/book/show/39080433-accelerate)

The authors of Accelerate book acknowledge that business leaders are often unaware of DevOps as a powerful and effective instrument for IT organizations. This book helps me to facilitate conversations about
importance of DevOps with clients and stakeholders who may push
back on everything that is not pure feature development. In fact what businesses
often want is not just *a* feature, but rather an ability to develop and deliver
features in a good pace, an ability to make changes as businesses learn from their users and evolve their strategies.  
**Business wants developer operations to be optimized for change.** It's everyone responsibility
to ensure that DevOps is part of project scope naturally, part of planning and
prioritization. Accelerate book is amazing in explaining that.

My video review for SystemSeed team is [here](https://www.youtube.com/watch?v=EJi1qCV-pfM):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/EJi1qCV-pfM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### [A Philosophy of Software Design](https://www.goodreads.com/book/show/39996759-a-philosophy-of-software-design)

This is a brilliant read that I can recommend to every developer regardless of their experience and specialization.
You will definitely learn or re-discover something valuable about software craftsmanship.

> I have noticed that the design-it-twice principle is sometimes hard for really smart people to embrace. When they are growing up, smart people discover that their first quick idea about any problem is sufficient for a good grade; there is no need to consider a second or third possibility. This makes it easy to develop bad work habits. However, as these people get older, they get promoted into environments with harder and harder problems. Eventually, everyone reaches a point where your first ideas are no longer good enough; if you want to get really great results, you have to consider a second possibility, or perhaps a third, no matter how smart you are. The design of large software systems falls in this category: no-one is good enough to get it right with their first try.

Apart from these two books, I would like to mention “Clean Architecture” by Uncle Bob ([my video review here](https://www.youtube.com/watch?v=4AUVBtj04Cg)).
It was a little bit hard to read for me because of special terminology and references to [SOLID](https://en.wikipedia.org/wiki/SOLID) in every single paragraph.  
If your team already speak SOLID language, it will be a good reiteration of “Clean Code” for them. Otherwise “A Philosophy of Software Design” might be a better first step.
It does not introduce that many terms, and for me it was more intuitive, more inline with my own experience.

## Technologies

### Decoupled Drupal

As you may know, most of my experience in web development is somehow related to Drupal. Once I joined community back in 2011, it affected dramatically my further career and views on technology in general.

Last year I was working with Drupal 8 as a pure backend system. User facing applications were decoupled from Drupal and written in JavaScript (React, Next.js).

You can watch and read about decoupled Drupal in detail here:

- [SERVE THEM ALL! Headless Drupal as a backend for multiple frontend applications](https://youtu.be/ouBIAap09oA)
- [Kicking off decoupled Drupal & React projects with boilerplate](https://medium.com/systemseed/kicking-off-decoupled-drupal-react-projects-with-boilerplate-67253a8dee29)

If you want to investigate this approach deeper, consider one of [the available boilerplate projects](https://www.enik.io/drupal/boilerplate/2019/08/30/drupal-boilerplates.html). Please don't expect it to be super straightforward. Decoupled Drupal is quite far away from the popular JavaScript stacks in terms of developer-friendliness.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ouBIAap09oA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Kubernetes

Surprisingly, as part of my job at SystemSeed I had an opportunity to learn some basics of AWS, Kubernetes, Helm, Terraform and other hosting-related stuff. A huge benefit of running your own cluster is that you have unlimited flexibility on hosting level. Node.js, PHP, Go, Elasticsearch, Redis - everything can be dockerized and reused for both local development and production run.

My daily routines include basic operations with deployments, pods and jobs. I would love to have them automated eventually so that I can focus on building new features rather than on running the same commands in terminal.

To sum up, it turned out that Kubertenes isn't as scary and complected as I thought. If you plan to touch it, I can recommend high level overview from our CTO: [“Kubernetes, KOPS & Helm”](https://www.youtube.com/watch?v=mHxRUzZbzO4). 

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mHxRUzZbzO4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Semantic UI

The other day I was reviewing the latest State of JS report. I found it a bit naive that most of developers who work almost only and exclusively with JavaScript [consider themselves Full Stack developers](https://2019.stateofjs.com/demographics/jobTitle). Full Stack is when you put Kubernetes and Semantic UI one by one in your tech list 😄

But back to my list. This year I had a chance to try Semantic UI and its [React addon](https://react.semantic-ui.com/). It's well documented, feature-rich and very developer-friendly library. At SystemSeed we used it for admin dashboard, but I can see its potential for other types of MVP. 

As a side note, I'm intrigued by the raise of Tailwind CSS framework. In some cases component-based frameworks like Bootstrap or Material don't fit custom design requirements. It such cases Tailwind may be a good alternative.

### Auth0 & Okta for user management

These are two very different identity access management tools that I worked with recently.

[Auth0](https://auth0.com/) has a generous free plan with powerful APIs for developers and No-Code features for startups. If you plan to scale, Auth0 offers a lot of advanced features on their paid tiers. I had only positive experience with this service and can recommend it to everyone who considers cloud-based solution for user management.

[Okta](https://www.okta.com/) positions itself as Enterprise Identity Standard. If you work with larger organizations then at some point you will face a need to integrate with Okta. It's the opposite to Auth0 in terms of learning curve and developer-friendliness. It's fine to work with though, and it seems to have a huge list of features that make Okta attractive for enterprises.

### JAMStack

A few paragraphs above I made a joke about Full Stack Developers. That was a sad joke for me. In fact, frontend developers can develop and deliver entire projects without traditional "backend". Platforms like Netlify or Zeit make it very easy to build professional websites on top of JAMStack. Developers spend more dev time building project-specific UIs rather then setting up backends and APIs. 

- With free GitHub account they can host codebase and assets as well as set up project management workflow and CI.
- On a free Rollbar plan, they can have error monitoring and alerting. 
- With Cloudflare they can have powerful CDN for great performance and Cloudflare Workers for running custom application logic without a need for a server, all for free.
- With FaunaDB, they can store and retrieve their data, without a need for a server, again, all for free. 
- With Auth0, they can have secure login and user management, for free. 
- With Algolia... 

I guess you've got the idea: everything that is not specific to the business can be delegated to a cloud service at a lower price then developing and hosting in house (It's not JAMStack-specific though, and can be applied to any stack). 

I'm curious if Full Stack in the State of JS report means an ability to set up appropriate third-party services and complementary NPM packages to get job done.

In general, I'm optimistic about this approach regardless of complaints about risks, data ownership, poor architectures. Javascript tech stacks unleashed creativity of hundreds of thousands frontend developers who wanted to start building their own things.
As a next step, No-Code trend will allow non-techies to build complex applications without writing a single line of code. As developers, we may not like this trend but [it's already there](https://webflow.com/nocodeconf).

### React state management

React Hooks is one of those tech concepts that I found truly elegant and intuitive. Unfortunately, there was too much of unhealthy hype around them and around React state managers in general. I would prefer people to spend more time learning web standards and general programming practices rather then building yet another state manager for React.

### React Native

It's common to mention React Native when we list benefits of React over some other JavaScript frameworks. For me, one real benefit is that developers who already know React will learn React Native faster than Swift of Flutter. They still will need to learn specifics of app development very well, and read a decent amount of app-specific code, sometimes in Java or Objective-C.

For web developers who already know React and want to start building native apps professionally, React Native is a great choice, but be prepared to work hard.

Watch my overview of React Native for SystemSeed team [here](https://www.youtube.com/watch?v=HiSkdF3QMmc):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/HiSkdF3QMmc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Strong Customer Authentication

If you build web sites for EU, you already know about GDPR regulation. The next challenge is SCA, Strong Customer Authentication for payments. As far as I know, initial plan was to enforce the new standard in September 2019, but many European regulators postponed it until **the end of next year**. One of online payment processors that was ready on time is Stripe. They released a new version of their API that is optimized for SCA with minimum amount of work for developers. I enjoyed working with their new API and as you may already guess I shared my experience with SystemSeed team: [watch it here](https://www.youtube.com/watch?v=eLeYeJvBjJw).

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/eLeYeJvBjJw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Tools

I'm not a computer geek, but I'm quite comfortable with terminal and can impress non-technical people who watch me pressing Ctrl + R all the time. Below are some tools that I use every day at work: 

- Macbook Pro 2016 [mounted on an arm](https://sun9-30.userapi.com/c850720/v850720206/94d38/w5rcY3Xvk-U.jpg)
- Firefox and Chrome (but I try to avoid Chrome)
- BetterTouchTool
- Docker
- PhpStorm
- VS Code
- iTerm
- Evernote
- 1Password
- Wakatime (for personal purposes, I don't report data from it to my employer)
- Pen and paper

## What's up next

I am a workaholic developer. I love working. I can forget about everything when I'm hooked by my next project, either routine or challenging. I know very well how [“the flow state”](https://en.wikipedia.org/wiki/Flow_(psychology)) feels (it's amazing!), as well as how burnout and anxiety feel. I'm learning how to keep balance between work and rest, how to avoid perfectionism and do more with less. 

Programming languages and frameworks are great, but these days I'm more interested in human side of software development. How to build working environment where humans feel safe and empowered to unleash all their intelligence and creativity? 

In the past I thought that I must work hard so that later I would have time and resources for a creative and relaxed hobby. I thought I have to separate work and creativity. I don't think so any more. We spend most of our active hours at work, so why wouldn't we make them fun, creative and fulfilling? 

I wish a creative decade to all of us 🎄
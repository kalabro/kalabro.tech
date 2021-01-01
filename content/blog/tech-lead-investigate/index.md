---
title: "How to investigate technical solutions"
description: "We, developers, tend to value practice over theory because this is how we learn most of the things. Often though, we don't know how to start, which library or service to pick, etc. Quick investigation process described in this article helps me in such situations."
date: "2020-05-23T20:00:34.115Z"
---

In my [previous post on the subject](https://kalabro.tech/mental-health-full-stack-developers/) I suggested the long term approach to the learning problem: focus on general knowledge rather than on specific tools and implementations. But what if you need to investigate a new technical field *right now*, let's say this week, to proceed with the project at hand? Tech leads do this kind of work regularly in order to prepare high-level estimates and architect new systems.  

In this article, I will share my approach to a quick technical investigation. I apply it to new technologies and any other unknowns as they appear in my daily tasks. I mapped the steps to the days of the week, but the timeline can be scaled up or down based on the size of the problem. So, let's get started:

## Part 1: Monday

#### 😍 You are great

It's totally fine to not know something. Don't treat it as your “fault” or a lack of talent/education/seniority. You are going to figure it out and you are great! 

#### 🔍 Be specific

Narrow down the area of investigation as much as possible. In practice, it means that technical investigation starts with business investigation. When the problem is defined, ensure you can't solve it without further investigation. Sometimes people ask for AI, but their problem can be solved with a regular expression. Stop thinking that your solution isn't “cool” enough. It's super cool as long as it solves the problem.

#### 🙋‍♀️ Ask people

If you need to proceed with further investigation, then first ask your colleagues and friends who were working on something similar in the past (don't confuse friends and colleagues with random strangers on the internet!). There is no point in learning something the hard way if you can just ask your teammate for help. An extreme variant of this option is to hire a person who has the necessary experience and learn from them.

#### 📝 Pick 10 random articles

Google your problem definition using different wording and pick 10 random articles and videos (it also can be one *short* book). List them in your notes and start reading them all from top to the bottom. Don't try to figure out your final solution, don't make any decisions just yet, don't try code snippets suggested in the articles. Just read them.

Keep reading and taking quick notes. It can be a simple bullet list, a drawing or a mind map. Stop when you finished with your 10 articles. Sleep on it.

## Part 2: Tuesday

#### 🏁 Fill in the gaps

Review your notes and compare with the problem definition. You'll notice some gaps in your notes. Google them again, find 2-3 extra resources and add them to your list. Finish the notes and stop gathering information. Most likely you have already learned just enough to proceed to the next step.

#### 👯‍♀️ Show it to a teammate
Now it's time to present your notes to someone else. Explaining the topic to another person will help you understand what you learned.  

While presenting, reflect the fact that the information is not yet verified. For example, don't say “The best A/B testing tool is X”. Instead, say “I found several authors who really enjoyed X”. Pay extra attention to the remaining unknowns (instead of leaving them out of the discussion).

Together, narrow down potential solutions to a minimum. For example, if you have five A/B testing services in your notes, pick two most promising based on what you learned so far and on the problem definition. Don't worry that you may occasionally exclude the “right” solution from your shortlist. There is no one right way to solving any technical problem.

## Part 3: Wednesday, Thursday, Friday 

#### 🏖 Try it in a sandbox

Finally, we are in the famous practice step. I remember times when I was putting together something new that I barely understood only to push it to production faster. This approach was fast at the beginning, but in some cases, it slowed down further development dramatically.

Before starting to write any code, prepare a list of outstanding questions that you want to clarify through practice. When the problem is small enough, you can start implementing the real solution without properly finishing the investigation. But in the general case, proofs of concepts should not go straight to production to avoid unnecessary risks.

#### ✍️ Write a summary

Finish with a concise report that you wish had been written by someone else before you
started your investigation. Don't put too much effort in it - such reports usually become outdated in 6-9 months. Share the report with the team and agree on the next steps. Switch to something else for a little while to clear your mind.

## To summarise

My quick investigation process includes the following parts: 

1. Gathering & structuring information on a very narrow topic (*X time*)
2. Sharing with someone else and filtering out (*X time*)
3. Building proofs of concept to figure out some crucial details (*3X time*)
4. Putting together a summary for discussion and further actions.
5. Iterating.

This process is very intense because you consume and analyse a lot of new information within a short period of time. It also can be uncomfortable to touch something completely new and to feel stupid after being “an expert” in your field. As Josh Kaufman explained in [“The first 20 hours”](https://www.youtube.com/watch?v=5MgBikgcWnY) talk, the main barrier to learning something new is emotional. It's often hard to start and even harder to finish. I hope that my article will help you to overcome those issues when you next time will be investigating a new technical problem. Remember, you are great!

---
Liked this article? Have a question? [Please join discussion on DEV](https://dev.to/kalabro/how-to-investigate-technical-solutions-5gmj) 👩‍💻🧑‍💻
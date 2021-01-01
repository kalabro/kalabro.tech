---
title: "The Tech Lead rule: Management first, coding second"
description: "It took me two years to realise that “How to find time to code?” is the wrong question for a Tech Lead. In this blog post I'm explaining why."
date: "2020-04-05T15:30:34.115Z"
---

I opened my previous post [about 1:1 meetings](https://kalabro.tech/tech-lead-one-on-one/) with the following paragraph: 

> Every new Tech Lead will struggle to find time for coding in their busy day. That's very normal because when you step into Tech Lead shoes you suddenly need to learn all those management tools from planning and prioritisation to decision making to conflict solving. 
> You never know what you will need first, so you will have a fun time learning a bit of everything in parallel (and trying to meet your coding hours quota at the same time). 

I now realised that the idea of that paragraph is not very obvious, especially if you are just about to start as a Tech Lead.

## Tech Lead is a manager

It seems to be clear that we, Tech Leads, are developers, and we should write some code, should stay current and keep our hard skills sharp. 

What is often forgotten or put at lower priority is that a Tech Lead is a manager and our management skills are the key to our success in the role.

It's true that as Tech Leads we don't usually have full-time management responsibilities (and often have no authority), but it doesn't change the priority: management first, coding second. 

Even if you've got a very small team and management bit takes just 20% of your time, that 20% is still the most important part of your job. If you deprioritise it or do it poorly, then your small team is in danger: they may miss the deadline, spend time on the wrong task, get stuck or blocked by another team, overengineer the solution, overpromise to the stakeholders, fail at their performance quotas without understanding what they did wrong. Tech Lead as a manager can prevent or notice such issues sooner. Tech Lead as a developer can only try to write the entire codebase alone (and fail at that).

**Management first, coding second** - once you start to see it in this order, it will become clearer what's next.

## Tech Lead is a developer

Usually, we learn the basics of management by watching how other Tech Leads and managers work. Some of us are good leaders naturally, and it helps too. Still, most of us grow into Tech Leads from Senior Developer role and we don't have a degree in management. Furthermore, you may be affected by a bias that management isn't that important and only creates problems for the dev teams.

It's important to recognise that **you are now supposed to do a new type of work**, that you have never done professionally before. It's time for opening your mind for learning and practising new skills. It's not a good time for full-day coding tasks.

## Management tasks

Now, when we have the priorities cleared, let's review major areas of your management efforts.

**📆 Invest in team planning**

Help each team member to create a plan for their working week. It doesn't mean that you need to assign tasks to everyone (sometimes you need, but it's an edge case). Your goal is to create and maintain an environment where each team member can figure out what they will be doing tomorrow without checking with you/your manager/stakeholders every day. 

You'll need to have a plan for your week, too, and it should reflect the "management first" rule.

One common piece of advice to novice Tech Leads is to get better at time management. I think that **you should first get better at mid-term planning (monthly and weekly)**. Then it will become easier to manage your time within each day.

**📚Invest in knowledge sharing**

Make sure documentation is treated seriously by the team. Lead by example: document things that are often asked by the clients and other team members.

Make yourself available for questions during the day. If you put yourself in DND mode for an entire day, you won't be able to create an environment where people are willing to help each other. In such an environment,  you'll be able to step back from time to time, and nobody will notice.

**🌀Invest in workflows and processes**

Meet your new best friends: company workflows and processes. They are "reusable libraries" of management. They can help many developers stay productive and creative, just like software libraries and frameworks help us build projects quickly and consistently.

To elaborate further on this metaphor, software libraries should be carefully chosen and maintained by the technical team. The same applies to the workflows and processes in the company. No one software library works for all development projects, and no one workflow fits every software engineering team.

As a first step, make sure you understand and follow the existing organisational workflows yourself. As an individual contributor, you could sometimes think that they were an unnecessary bureaucracy. As a new Tech Lead, make sure it's not the case, or initiate the change. Workflows should serve the teams, not the other way around. 

Give extra focus to workflows that put you in a gatekeeper position (for example, pull requests can't be deployed without Tech Lead approval). In rare cases, it may be a reasonable requirement, but usually, it indicates a problem.

**👯‍♀️ Regularly check in with your manager**

So now you keep an eye on the team. Start sharing your observations with your direct manager early, partly to let the problems bubble up. It can be a summary of what went well, what had to be fixed by you, and what requires senior management attention. One of the most important management rules is **"No surprises"**. If you share the team status regularly, then senior management will be prepared to step in when necessary.

Funny enough, they may see your problems from various unexpected angles. Be open to that. Sharing your vision helps to align the priorities in both ways. 

**Example 1**

> *You:* I have to manually perform project deployments and take database backups. It's not a big deal for me, but I think it can be improved to follow best practices.  
> *Manager:* the project is growing fast, and the dev team should be prepared for frequent and safe deployments. Make DevOps initiative the main priority starting from next week.

**Example 2**

> *You:* I have to manually perform project deployments and take database backups. I think it's a major team blocker (and this is just not a fun job for me).  
> *Manager:* there will be no more deployments for that project starting from next month. It will be replaced with the new development project which should be the main priority starting from next week.

You may say that the manager should have shared the details about the future of your current project sooner. Of course, they would share at some point or they might have already shared it but you missed the point. 

From my practice misalignments happen all the time because everything keeps on changing. Sharing your successes and problems with your manager regularly will help both of you to have "no surprises", or at keep them at a minimum.

A final note that you should not be focused on problems only, otherwise your manager will start escaping from you. 

## Developer tasks

So, your team know the priorities, help each other when they have questions, and follow workflows to perform common tasks. You manager is aware of some problems that you faced and helps to fix them. Not everything is going so well, but you have a plan in place to improve things in the long run.

You still feel very busy and unproductive because you spend less time coding and more time planning and communicating.

**🐌 Reduce your expectations**

Some organisations [explicitly set coding expectations](https://github.com/webflow/leadership/blob/master/tech_lead.md#how-much-should-i-expect-to-code) for Tech Lead role. Others don't do that because it may depend on the team and the project at hand.

In either way, you'll have significantly less time for coding because:

1. You are expected to do some management
2. You are not good at management, and you need to learn how to do it well
3. You are performing technical oversight and switching context between several different tasks per day

Accepting this change was very hard for me. It took almost a year for me to understand that investing in my management skills will free up some time for technical tasks in the long term.

**🥎 Pick small, not urgent tasks**

When you include yourself in a sprint as a developer, prefer smaller tasks that don't block other team members. If it's not possible, then prefer pair programming or very close collaboration on a task so that someone else will be able to finish it without you.

**🛩 Block time for coding sessions**

This is a very common recommendation: book a time for coding in DND (Do not disturb / in airplane) mode, and everything will be fine. From my experience, it will indeed, **if you follow all the other recommendations listed above**.

I personally enjoy having 3-4hr focus slots at the beginning of the day, but we have our daily standup meetings in the middle of that slot. They immediately kill my focus as we start to discuss different aspects of the project, some problems and blockers that require my attention, and the new surprises that should be communicated up. 

I accept this distraction because I find our daily standups very valuable from the management perspective. I could also skip, postpone or make them asynchronous. As a Tech Lead, when you make choices like this, you have to keep the organisation and the team as your priorities.

**👏 Take off your Tech Lead hat**

Normal Tech Lead schedule will not allow you to grow as a software developer at the same pace as it used to be. However, your technical expertise is crucial for running a technical team. Yes, you can learn from your teammates while reviewing the code. Yes, you can experiment with the code while you are working on your smaller tech tasks during your focus hours. Yes, you can read some blog posts in your spare time. Yes, you can build a pet project. It's great, but not enough for staying current in the modern IT world. 

Tech Lead role isn't the final career destination for most of us. First of all, it's very challenging because you are a manager and a developer at the same time, and you are kind of okay at both. That's why folks often move on to full management or full development roles from this point. Your Tech Lead experience will help you succeed in either route.

Some companies periodically rotate Tech Leads in their teams. Others try to spread the management burden across the whole team ("🦄 No-Managers teams"). Finally, you can simply ask your manager to put you on another project for a couple of months. It may be enough to get refreshed and upskilled.

## To summarise

It took me two years to realise that “How to find time to code?” is the wrong question for a Tech Lead. You should focus on getting better at management, and ask your boss to give you “management holidays” if you need to invest more time in your hard skills.

Tech Lead is a very challenging role, partially because we put a lot of pressure on ourselves and hesitate to ask our senior colleagues for advice. This experience is "unforgettable" as it changes your understanding of software development process. With this new understanding, you can do more either as a developer or as a manager. 

Good luck!

---
Liked this article? Have a question? [Please join discussion on DEV](https://dev.to/kalabro/the-tech-lead-rule-management-first-coding-second-1k4f) 👩‍💻🧑‍💻
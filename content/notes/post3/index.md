---
title: What do developers mean?
date: "2022-03-02"
description: "Extensibility! Maintability! ImSoSmartility!"
---

“Let me virtue signal real quick. I'm a passionate software craftsman. I'll prove it by shaming you for not paying attention to all these -ilities I've read about!”

 -Some jerk, probably 

Yea, we get it. You hate automation tools like Flow and you don’t feel as special when people build without code on Salesforce. You're doing a great job gatekeeping! <3 


# It's called SOFTware for a reason.

Enough sarcasm. Folks that come from a Software Engineering/Computer Science background love talking about non-functional requirements (the -ilities). I do too honestly. It gives me the vocabulary I need to measure how “GOOD” software is. By good, I mean how soft it is. By how soft, I mean how well it resists change. 


# Stress

Listen, I’m just a guy. I work for a living. I don’t want to be stressed at work. Yet, touching existing code is STRESSFUL and I do a ton of it. Refactoring (especially without existing tests) is one of the scariest parts of the job. 

To make it worse, I might put this burden on someone else one day. Empathy is implicit when building software. My goal with software is to make life easier for the next engineer. In a few weeks, months, or years someone else will read my code and feel a certain way. The more certain they are when changing that code, the more successful I am. 

# Words Matter

I wrote this whole post out of annoyance. I hear these -ility words used in conferences, Twitter, and technical conversations all the time. Coincidentally, people are patting themselves on the back when they say it. They claim to have built an "extensible solution" and go on to show code that’s (barely) reusable. At this point, it’s turning into a buzzword. A blind appeal to authority rather than a sincere measurement of quality. My radar goes off when I hear an -ility word now. 


# Extensibility

Extensible solutions facilitate graceful changes. They minimize (or eliminate) changes to the internal structure of our system. This helps us develop faster! The extra effort today helps save time and prevent stress later. 

Be careful here. You don’t always need an extensible solution. Building with extensibility in mind is not a hall pass for dreaming up crazy “what if” scenarios. By the time you need to extend, the requirements could have changed so drastically that the original functionality would need to change anyway. Some folks will think of “YAGNI”. YAGNI, is an important consideration but I think the silver lining here is having code that’s partitioned well and can be easily maintained. So not a total loss in my eyes.

For extensibility to happen, you need two things. First, you need working code for today’s requirements. Then, you need a mechanism that facilitates the addition of code with minimal impact on existing code. You don’t need magic, you just need to take advantage of abstractions. We need Polymorphism.
---
title: Second Quarter Open Source Funding
date: "2019-07-18T20:08:31.438Z"
author: sabbott
tags:
- free and open source
- OSF
---
It's time for our second ever open source fund giving announcement!  If you don't remember, CarGurus created our [Open Source Fund](/announcing-the-cargurus-open-source-fund/) so that we can give back to the giants upon whose shoulders we stand. Every quarter, we nominate open source projects that we use, know, and love, and then each engineer allocates $100 to them.

## Projects we're funding this quarter (second quarter of 2019)
This month, we have some new projects we're giving to

* Cloud Native Computing Foundation (CNCF) - the home to a bunch of great, modern projects that we know and love: Prometheus, CoreDNS, etcd, and fluentd. We also hope to get to know others, like Kubernetes and Helm, soon!
* GNU - the old g-nu, GNUs Not Unix, grandparent in many ways to F/OSS!  How could we not?
* OpenSSL - The WHOLE INTERNET runs on openSSL, and we as developers have MASSIVELY underfunded these champions for too long. Sure, some of the Big Tech companies are forking from them, but OpenSSL is still super important, and we appreciate them
* Python - This all purpose, fast, efficient, data friendly language is just too key to too much not to give some money!
* Pandas - Piling on, because this library here powers a bunch of our analytics and data science

We didn't take away most of the projects we donated to last quarter, either! Still on the list are
* Apache Software Foundation
* Homebrew
* Babel
* Webpack
* Git
* Linux Kernel
* Open Web Application Security Project
* FreeBSD

### Highlight Project: Cloud Native Computing Foundation
This months highlight goes to CNCF. Sure, they're well backed and arguably well funded already, but we use a bunch of their software and we're getting set to start using more. 

Our heaviest use of a CNCF project is definitely Prometheus. After quite a few fits and starts with different metrics and monitoring solutions, we went big into Prometheus (+ Grafana!) We run a pair of prometheus servers in every environment (and AWS account) that we have, and we use alertmanager to gather, route, and de-dupe alerts based on the metrics this provides. Prometheus has been rock-solid, and it's finally given us a consistent way to observe what's happening on our systems.

Smaller, but arguably even more vital, is our CoreDNS presence. A few years ago, our naming story inside of CarGurus was...well, ok, it was bad. Real Bad. Massive host files distributed by arcane Chef bad. While CoreDNS didn't rescue everything, it did rescue our cloud environments, and that was a really good start. CoreDNS' easy configuration and fast chaining allow us to use IaC to handle names for all of our cloud computing environments seamlessly. So seamlessly, in fact, that we very nearly forget it was running.

Etcd and fluentd have much smaller presences in our ecosystem. The former is used in conjunction with CoreDNS to provide some fast-configurable names, as well as a key/value for the new dev environment we're working on. Fluentd, the unified logging layer, helps us ship our logs consistently into a centralized logging store that helps with a second major leg of our observability platform.

We're super excited about resiliency and flexibility we'll be able to take advantage of with the kubernetes platform. We're just getting started on our re-platforming strategy, and with that will likely come the use of several other major CNCF projects (yet to be decided, but we've got our eyes on Envoy, containerd, CNI, Rook, Helm, Linkerd, and more)

As this quarter's highlighted project, we gave the CNCF an extra $5000 on top of the engineer's votes.  Thanks CNCF!

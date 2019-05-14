---
title: Cutting our webpack build time in half 🕰
date: "2019-05-14T02:10:57.272Z"
author: "tparnell"
---

When I joined CarGurus last July, I didn't really understand the scale at which the UI builds would work. Our company has been around since 2007, and over a decade of continuous development has build out a huge amount of infrastructure. The path to IPO was not entirely kind on the codebase, and the JavaScript community moves at a pace unlike others. On my first few weeks my jaw kinda dropped when I realized we have over 100 JavaScript bundles, and an average compile time of 20 minutes.

> The simple fact is our builds were slow, but so was our user experience

## Measuring

The first thing we did was to start measuring our bundles. We use [honeycomb](https://www.honeycomb.io) to save sample data over time. In this case, we started recording build times, and build sizes with some very simple webpack plugins. This allowed us to track improvements over time, both on bundle size, and on build time.

## Duplicate dependencies

One of our big problems was duplicate dependencies, both inside 1 singular bundle, but also 1 singular page. We used some techniques [I've previously blogged about](https://blog.terrible.dev/Visualizing-your-javascript-bundle/), to understand what is in our bundle. 

We noticed a single bundle contained multiple copies of the same dependency. This is due to how npm resolves dependencies. Essentially if an application depends on react 16.6, but a library has a hard dependency on react 16.8 you could have 2 copies of react in our bundles. In our case, we had created libraries with pinned dependencies. To put it another way, our libraries were not permissive about which versions of react, redux, etc. So our applications would end up with multiple copies. This caused many bundles to be twice the size they should be. Hurting users, and developer productivity alike. We fixed this by making sure our libraries had [carets](https://stackoverflow.com/a/22345808/3671357) in-front of their version numbers. Signaling to npm that any minor, or patch could be used.

## DLL's

We started looking at the pages themselves. Like it or not, we have a few pages with multiple JavaScript bundles on the page. Some of those have dependencies on things like react. On a singular page we found 7 copies of react. This is bad for our builds, because we're compiling and packaging the same dependency so many times. However on-top of that our users had to download that very same dependency 7 times. 

Webpack has a plugin called the [DLL plugin](https://webpack.js.org/plugins/dll-plugin/) this plugin is designed to allow a common dependency to be in a single file. In our case, almost all our bundles had a copy of react, many had jquery, and quite a few had a large library called High Charts. We DLL'd the most common dependencies, which cut our compile time from 20 minutes to 11. We also saw huge reductions in page size. Shaving over 1mb on some of our older pages. This also improves users that come back to our site, as now they get cache hits on react, and other dependencies we don't change often.

![Bundle sizes after we DLL'd dependencies](dll1.png)

## Cheap source maps

## Thread Loader

## Uglify/Terser

## Other

We also got some wins with

* Upgrading to babel 7
* Upgrading to webpack 4
* Setting uglify's parallel flag
* Setting the site up with a standard polyfill set
* Turning off split chunks in development mode






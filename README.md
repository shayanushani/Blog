|Build Status|
|-----|
| [![Netlify Status](https://api.netlify.com/api/v1/badges/3d41d0d9-365a-42de-999d-56a7399f898f/deploy-status)](https://app.netlify.com/sites/cargurusblog/deploys) |

## Getting started

You need:

* `node 10+`
* `yarn 1.13.0`

Posts are written in markdown. You can use any markdown editor you like. [vscode's markdown all in one](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) plugin is very good for rich editing markdown files. 

## Authoring a new post

To author a new post run `yarn new:post "Your Post Name Here"` a directory, and markdown file will be created for you in `content/blog/Your-Post-Name-Here`

Then you can author the post as normal with markdown. To run the server locally, run `yarn start`. Our CI system checks for spelling errors, you can run this yourself with `yarn check:spell`, you will be prompted to either fix your mistakes or add your mistakes to a dictionary.


## Getting your post live

To get your post live, simply make a branch, create a pull request and then get it merged. Netlify will automatically pick up on new commits into master and deploy them. Any new content must be approved by @stodesca github will enforce this automatically with its codeowner system.


## Editing the code

To start the blog locally run `yarn install` and then run `yarn start`. The blog itself supports hot module reloading, so most changes you make should automatically apply in the browser. 

We use [less](http://lesscss.org/) as our css processor, and [css modules](https://github.com/css-modules/css-modules) to import our styles into our components. Each component should have a less file with the name of `component.module.less`. Note the `.module` for gatsby to understand a less file is a css module you have to have the `.module` otherwise your styles won't get imported.

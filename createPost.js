/* eslint-disable no-console */
const { resolve } = require('path');
const { existsSync, mkdirSync, writeFileSync } = require('fs');

if (process.argv.length < 3 || !process.argv[2]) {
  console.error('You must pass a name of a post to create');
  process.exit(1);
}
const postName = process.argv[2].replace(/\s/g, '-');
const resolvedPath = resolve(__dirname, 'content', 'blog', postName);
if (existsSync(resolvedPath)) {
  console.error(`ERROR, post ${postName} already exists at ${resolvedPath}`);
  process.exit(1);
}
mkdirSync(resolvedPath);
const template = `---
title: ${process.argv[2]}
date: "${new Date().toISOString()}"
tags:
- sample
---
`;
writeFileSync(resolve(resolvedPath, 'index.md'), template);

# Worklog

This documents the work I have done for this exercise. This includes the preparations and challenges I encountered.

## First impressions

Among the tools required for this exercise, I am only familiar with React.js, which I last used professionally in 2021 (as my last role focused on backend). I need to update my knowledge about the new React features.

I have limited to zero experience in the other tools (Typescript, Apollo JS Client, Vite).

I will do a bit of reading first before I start writing any code.

## Introduction to Vite

ref: https://vitejs.dev/guide/

Vite looks like a very good tool for starting a JS project. Previously, I have been using https://create-react-app.dev/ as a template to start new React project.

With Vite, I was able to create a React + Typescript project with this single command.

```
yarn create vite resto-menu-ui --template react-ts
```

After doing `yarn install` and `yarn dev`, I have a running frontend project already.

I'm really happy with this tool as I used to setup the servers and a basic view before I could get to this point from 1-2 hours work to **5 minutes**.

## Installing Apollo

The project specs require the use of Apollo to interact with the GraphQL API we used before.

I followed the tutorial in https://www.apollographql.com/docs/react/get-started in setting up Apollo client.

## Rendering bare menu

Now that we can get requests from our GraphQL, the next thing to do is to ensure that we can render the items included in the menu.

As I am most familiar with React, I will get the React components working first.

I will add styling, tests, and ensuring Typescript types are defined later on if there is enough time.

Learning from the mistake from the previous exercise, I will use ChatGPT to help me in creating the React components to accomplish tasks faster. At this point, I already know how React works and there is nothing much to demonstrate by writing all the code from scratch.

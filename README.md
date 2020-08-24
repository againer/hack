# Moxion News

This project is a bare bones version of Hacker News that uses HN's firebase based [API](https://github.com/HackerNews/API). 

The project is more or less just an angular app that was bootstrapped with [Angular CLI](https://github.com/angular/angular-cli) version `10.0.7`. 

## Getting started

This project assumes you are running node `v12.16.2` (`nvm use v12.16.2`) and have `@angular/cli` installed globally (`npm install -g @angular/cli`).

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running tests

Tests are "disabled" right now, in that the `npm run` shortcuts for running them were removed from `package.json`.  You can run them all you want and they *might pass, but I didn't focus at all on TDD-mainly because I didn't feel like installing the chrome driver on my machine or spending time building up a vm (or container) image for running tests.

## Prettier

This code uses [prettier](https://prettier.io/) for code formatting.  Please add the `prettier` command to your pre-commit hook or into your editor's pre-save hook.

## Design decisions and caveats

Given the constraints, there a bunch of decisions that might need some explaining.

### Fetching stories

As mentioned in HN's [API docs](https://github.com/HackerNews/API#new-top-and-best-stories), API users can fetch a list of story ids for a given story type category `(newstories, topstories, beststories)`.  From that list, API users are then expected to snag individual stories using said story ids.

In the code here, the `stories` component loads all story ids for a given story type category via the stories service, "caches" the story ids and then defers individual story loading to the `story-item` component.  This choice has some obvious issues, but seems to be fine in terms of functional requirement-the story list UI doesn't wait for all story excerpts to be loaded before rendering the DOM.

### CSS Styling

I didn't really focus too much energy here, but one thing I wish I had completed was styling on the comment innerhtml.

I ended up using flexbox over HN's table layout because coding with tables makes me sad.

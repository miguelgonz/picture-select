## How to run the tests
Run `npm install`
and `npm test`

## Some comments

It's funny how awful React looks when not using JSX, but it's an interesting exercise to write it without any transformations. It also makes the whole toolchain for testing and building much easier. Less magic in the way, which is a good think if you want to show how things work.

*EDIT: I spent 20 minutes when I found time on Saturday to move the components to JSX... Even though it's interesting to see non-JSX'd React code, it's not very easy to read. The code is the same, just a bit nicer :)*

I could've kept the selected pictures in pictures' state but I like decoupling storage, since it's what usually changes. It also makes things much easier to test.

I spent some time setting the whole thing up, so no time for properly setting up sass compiling.

I've kept `build/bundle.js` in the repo to make it easier to run when checking it out, but this file should obviously not be checked in and it should be in .gitignore, as node_modules.

It's the first time I take this headless testing approach for React, since I usually use Jasmine or a DOM Renderer, but it's also interesting. If I had used Jasmine, which I'm more used to, I could've probably done some interaction testing, but the infrastructure to have Jasmine running is quite a lot, and I thought that I would spend half the time setting it up unless I copied it from somewhere else, which was not fair.


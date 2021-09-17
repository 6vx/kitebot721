# Markdown 

## Goals

The idea of using markdown as a separate, disentangled way of storing content for my websites has apparently panned out. 

I've been using powershell & node to execute scripts that generate javascript files from directories of markdown files, and then place them into the project before building. 

## Quandry

Now that I've gone down this road for a few weeks and feel good about it... I've noticed one problem: linking. 

I have a desire to link between articles, and that has resulted in coupling functionality between my script/site/source. Ideally there should be 0 considerations made while writing with this system. Unfortunately, I'm linking using paths that wouldn't exist if not for my script/project structure. It feels ICKY. 

So I'm left with this question: how do I link between my markdown files without having 'hardcoding' (in a .md, lol) my routes according to the pattern of my site? 

Solution: ??? (I'll add it here when I find it, contact me if you have an idea <3)

## New Line

I've been using [this](https://gist.github.com/shaunlebron/746476e6e7a4d698b373)

      &nbsp;  
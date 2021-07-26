# basic app

## Standard Setup

I generally grab the default svelte template, set up a github repo for it and connect that to an AWS Amplify project.

This setup means that every commit will be registered by Amplify and trigger a build and deploy automatically.

Something special this time, though, will be a script on dev machine that grabs the most recent versions of appropriate static assets and copies them into the project folder **before pushing to github.**

> ### Why push the static files to github
> I want to try this pattern instead of fetching during build because I don't want to have to manage a remote store of files. 
  >  
> I've done that before by keeping an rclone script running on an hourly cron job on an ec2 micro instance, keeping the files in sync with my devices and available to the build server. While technically this is a cool and probably better way for a larger or more complex project, it's hardly minimalist. Also, it's hardly in the spirit of "serverless."


## Time-lapse Logic

There are a few main settings to account for, and I've already written out the math I need to keep track of. 

1. Frame Recording Rate
2. Frame Capture Interval
3. Capture Duration
4. Timelapse Duration

So, if you capture for five minutes with a camera that is capturing 1 frame every 2 seconds, and is recording that as a framerate of 30 frames per second, you get a timelapse duration of 5 seconds. 

    (60s*5m) / ((2 seconds per frame)*(30 frames per second))

    300 / 60 = 5

## App UI

I want a bit of a "classic calculator" look to this, since that is what it is. 

Instead of having all sorts of numbers and buttons, though, I want my input to consist of selectors. 

There should be an obvious row of selections for FPS, and when you select one it remains highlighted. 

When changes have been made but not recalculated, the "ENTER" button or something should light up, to make it clear that you need to enter your selections and get a new result. 

I'd like basic tweening and fading to make changing between options a more tactile, responsive experience. 

## Deployment and Use

I want this to all be contained in a single component for easy use, backup, etc. 

I'll deploy as a standalone app example, and also as a clickable object within my portfolio. Since I expect the file to be exceedingly small, I'll likely back it up in a components folder alongside my other static assets I keep synced to my phone/tablet/PC. 

## Thoughts

I think that something simple like this is more a piece of evidence that I can make UI, than that I can make an app. This isn't terribly complex. 

Therefore the UI must shine. If that's all this represents, make sure that it is representative of YOUR work. It should espouse YOUR sensibilities, not the google material UI spec, not some CSS library spec, none of that. This is me on a page. 

## Building

Just placed all the info I wanted onto the page first thing. It's one component. 

I set some basic CSS fonts (I love monospace) and colours. Removed some old comments and tightened up the algorithm I was using. 

Tested to make sure it's working with some console.log() action, now going to do first commit.

Commit was fine, connected repo to amplify and changed the build script to contain the correct build directory (public). Deployed first try, checked to make sure was looking fine on mobile. Does.


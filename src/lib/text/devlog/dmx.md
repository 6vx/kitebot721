# dmx

This is a hobby/personal-use website rewrite with the goal of fully detaching all the major elements.

I feel like a lot of the websites that I discarded along the way were disposed of so because I made them monolithic. 

Now the goal is to not let that happen again. I've heard the word 'agile' used in tech a lot and, while I don't remember what it means right now, I know that having your data management, data storage, front end, build and content all split apart makes me feel very agile.

When imagined so, and built with this ideal in mind, changing any one piece is no longer a herculean task with many headaches.

Ideally my front end is a composition of a completely separate static front end. It will be fed by a CMS made up of a server (node) running in the cloud (ssl ec2 managed by elastic beanstalk) that interacts with Cloud Firestore (Google's cloud hosted no-SQL database). 

I'm mixing these services because I have credits on AWS and have used it to manage domains/routes/servers/functions for years. The Firestore docs are just so nice, I can't help but use it. I'm trying to really keep the read/write low though by...

Preloading with sveltekit. This is the new way that you get that Sapper-y goodness. If there's a link, at least. I haven't figured out yet how to assign a parameter to be built programmatically yet without actually making an 'a' tag for each one on a hidden component. 

THERE'S GOT TO BE A BETTER WAY! BUT SINCE IT DOESN'T MATTER I'll move on. (update: I found a better way, and it served this very page if you're reading it online ;)

Svelte is meant to just be that last blip on the screen from json to your eyeballs. I don't want to do a lot of magic here. I want a lightweight client that can keep track of a session and maybe pick up a notification, that's it. The rest should be separated into the last component.

The smart build. I realize now that the build step is really where the action is. You can separate your data and make your front end nice and static, but unless you're doing this step right, none of that's gonna matter. 

I've generally used whatever the cheapest t2x ec2 instance with rclone in the past to keep things in sync across providers (ie clone your OneDrive to an S3 bucket, or keep a folder in sync across Google drive and dropbox, etc) but I discovered lambda layers while setting it up this time. I haven't tried to implement it yet but it's an obvious project for a lambda that anyone could benefit from. Putting that on a cron schedule instead of running a microservice seems like a no brainer. 

The separate parts then are:
  - mobility first components and styling
  - minimal lightweight prebuilt static cdn deploy
  - build step with batched cms/db/api calls
  - cloud managed (revisit this to make it a lambda!) storage 

Some stuff I encountered that I hadn't before while setting this up:
  - lambda layers (very exciting) 
  - applying certificates to lambda layers 
  - rclone nodejs
  - svelte kit preload
  - svelte kit prefetch 
  - elastic beanstalk configuration
  - how to have a bad time with service workers
  
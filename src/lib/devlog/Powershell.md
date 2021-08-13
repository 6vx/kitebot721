## summary

- Installing on AWS EC2 
- Piping commands 
- Copying/Backing up between remote and local sources
- Scheduling/privileges troubleshooting in Linux CRON and Windows 
- Checking directories for attributes, copying and creating files/permissions on a schedule

# Daily Script

## Draw every day

I had the revelation that I'd draw every day if I got the Surface GO. I didn't. 

Then I decided surely I'd draw every day if I opened my computer to a brand new canvas every day, ready to be doodled upon in even the most lazy attempt at art. 

Enter: Powershell. I made a set of blank, root files for my "canvas.leo" and a daily "journal.md" and this script, after some wrangling, ended up being executed by the windows scheduler somewhat reliably. 

Enter: RCLONE/EC2/BASH. "Somewhat reliably" wasn't good enough. If I turned my computer on later in the day, sometimes it would take a while to execute. Such troublesome behaviour was getting in the way of my zen art habit. 

Instead, I'd perform this "daily script" in the cloud on a CRONJOB on an EC2 MICRO instance, and then use RCLONE to sync between my ONEDRIVE account and the local files on the EC2. This was better. 

## Draw Sometimes, Conveniently

### And do other things, too!

Of course, in the end, I didn't want to draw every day. And relying on a cloud instance to fuel this unusual behaviour was sort of against my "less is more" philosophy when it comes to tech. 

So now my customized Powershell 7 profile just has a script (synced to the cloud of course) that, when the mood strikes, allows me to type "Draw" into the terminal at any time to open a correctly dated "timestamp.leo" infinite canvas to doodle on. 

Some other common patterns are immortalized as well, such as a script to update a github repo with a timestamped commit message, or to split a projects Terminal window in 3 with a remote TMUX session, a local server and a command line all in one. 

## Feelings

Powershell is fun. I would be happy to have more excuses to fiddle with it. 
# REALLY QUICK AND DIRTY KIWIFARMS BLOCKER
Just clone and install, copy .env.template to .env and fill in your bluesky username and an app password

You can dockerize and run it in a free AWS instance, or on a raspberry pi

Literally just a few lines of javascript on top of [@skyware/bot](https://github.com/skyware-js/bot)
## FEATURES
Edit blockTerms with any additional strings you want to block; I just chose a few that I've seen on kiwifarms accounts

The bot will block the accounts **but not add them to a list** so you will need to periodically go to your moderation settings and check blocked accounts
### DISCLAIMER
I made this in like an hour instead of doing my actual job so yeah it's absolutely awful and really not meant for anything more than a temporary bandaid

Blocks are **not** immediate as this is not using the firehose or jetstream to listen to events!

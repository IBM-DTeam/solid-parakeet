# node-get-post

##nodejs DB2 challenge
We're gonna make a tiny version of twitter, with 2 pages:
tweets.html: this contains tweets from our database
tweet.html: Users can tweet from this page

When a user goes to tweet.html, they get a simple page that lets them input text
for a tweet, and then you will `$.post` it to the server, which will then `insert`
it to a table.

When the user goes to tweets.html, they will get a simple page showing all the
tweets in the database.

Steps to take:
1. create a table on the cloud instance in the twitter database
   put it in a schema that has your name (eg. mahmoud.tweets)
2. complete a server that you can `$.get('/tweets')` and `$.post('/create_tweet')`.
3. When you `$.get('/tweets')`, you should select all the tweets in your table
4. When you `$.post('/create_tweet')`, you should create a new tweet record.
5. Once you get this working, you can try other things with SQL, like adding
   pictures to tweets (and put this in another table so you have to use joins)

## npm packages
```
body-parser
express
ibm_db
```

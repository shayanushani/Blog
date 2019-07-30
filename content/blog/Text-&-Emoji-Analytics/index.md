---
title: Text & Semantic Analytics 📱
date: "2019-07-30T23:25:16.970Z"
author: "sushani" 
tags:
- text
- analytics
- semantic
- emoji
---


'Data-Driven' is a core value of ours here at CarGurus. We have a passion for data democratization and believe in enabling all parts of the business with analytical insights. As part of the Product Analytics team it is nice to see how passionate teams are in using data to gain a competitive edge from engineering to sales. We have plenty of tools at our disposal to champion insights and become integrated thought partners including Snowflake, Looker, Python, and R.

## Text Data

One of our products at CarGurus is text & chat. This product features a button a user can click on when visiting a vehicle listing and message the dealership directly with any questions or  comments that they may have. The text is sent using Twilio's API and then stored in our Snowflake database. Curious about the data, I looked to conduct basic text and semantic analysis with a focus on cars and emojis. Emojis have fundamentally shifted the paradigm of how we communicate with one another, where one simple symbol can convey a range of emotions. 

## Normalization

Text data can be a big mess, especially when it's user inputted. There are generally inconsistencies, strange symbols, spelling mistakes, and more. Thankfully there are tools at our disposal to clean text data. Depending on the nature of your data and the goal you are looking to achieve, there are a number of steps to take during the cleaning process. Let's start with this example sentence:

> “I just bouht the greatest car off of CarGurus!” 

1. Case Sensitivity 
To properly analyze any set of text data the case of all letters need to be the same, otherwise any analysis will see “You” and “you” as two separate words. So it needs to be all lowercase or uppercase. 

> New Sentence: “i just bouht the greatest car off of cargurus!” 

2. Spelling Mistakes 
We all make spelling mistakes, and within our text data we see a lot of these. Thankfully, these can be fixed and something that should be done earlier in the normalization process. There are a variety of tools that can be used but most of the analysis that I do use TextBlob and NLTK. TextBlob's spelling corrector is based on Peter Norvig's Blog Post, ["How to Write a Spelling Corrector."](https://norvig.com/spell-correct.html) 

> New Sentence: “i just bought the greatest car off of cargurus!”

3. Removals - rare words, common words, numbers, punctuation

Within a set of text data, much of it can be discarded since it doesn't hold any real value and may throw models off. These include rare words, common words like “the” or “a”, punctuation, and numbers. 

> New Sentence: “bought greatest car cargurus” 

4. Lemmatization 

Lemmatization is the process of determining the lemma, or root, of a word. This technique can help find the root of a word to help better analyze the data, for example “good” is the lemma of the word “better.” A similar technique is called stemming which identifies the word stems by removing word endings such as “ed”, “ing”, and “ly”. So the lemma of "walking" is "walk." Stemming does not benefit from lemmatization’s ability in dealing with words outside of specific endings. 

> New Sentence: “bought great car cargurus” 

There are a number of other steps that can be taken as well from here, such as tokenization, n-grams, and bag-of-words.

In addition to our normalization process I have run Textblob's sentiment property to the body of text as well as stripping out emojis in a seperate column. This ([emoji list](https://github.com/theraot/emoji) may come in handy if you're looking to conduct your own project. TextBlob's sentiment polarity is a number that ranges from -1 to 1, where 1 is the highest sentiment, 0 is neutral, and -1 is the lowest. TextBlob also has another handy feature as part of the sentiment class that provides a score between 0 and 1 for subjectivity where 0 is the most objective and 1 is the most subjective. 

## Analytics

After the hard part of extracting, cleaning, and pre-processing comes the fun part of actually analyzing! 

# Emoji Analytics

Emojis are generally used alongside bodies of text, so we can see what emojis had the highest sentiment in relation to the text they were sent with. 

The top emojis by sentiment that are statistically significant are: 

1. 👌
2. 👍
3. 😃
4. 😎
5. ☺
6. 😉
7. 🙂
8. 😁
9. 😊
10. 🙏

Overall our texts skewed towards being more positive, however we did have a few emojis denoting negative sentiment. Here are the lowest scoring emojis in terms of sentiment:

1. 😤
2. 😐
3. 😷
4. 💳
5. 😯
6. 😱
7. 🛑
8. 😫
9. 😲
10. 😓

Some other notes that came out of examining our emojis:

* 👍The thumbs up emoji is most often used with some variation of the word "good". 
* 🙏 & 😊 The pray and smiley emojis are most often used with some variation of the word "thanks". 

# Make

CarGurus is the #1 most visited car shopping site in the U.S. which makes our data rich with car phrases. Considering this element, I dived into what makes and models are the most positive. 

The top makes by sentiment that are statistically significant are:

1. Kia 
2. Jeep
3. Mercury 
4. Mazda
5. Volvo
6. Land Rover
7. Pontiac 
8. Hyundai 
9. Volkswagen 
10. Subaru 

# Model

The top models by sentiment that are statistically significant are:

1. Grand Cherokee 
2. Tiguan 
3. CR-V 
4. 3 Series  
5. Wrangler Unlimited 
6. Forester 
7. Compass 
8. Sorento 
9. Passat 
10. RX 350

Clearly, Jeep wins in the models category especially with the Grand Cherokee showing more than twice as positive as the runner up. 

# Time of Day 

There are tons of more elements to look at, but for the sake of this simple exercise I'll slice by date. 

*Day of Week* - Thursday is the most positive day and Sunday the least.

*Hour of Day* - 9AM is the most positive and 4AM is the least, however there was a smaller difference in sentiment by hour than day of week. 

*Holidays* - Thanksgiving is the highest U.S. holiday in terms of sentiment. This in turn made the turkey emoji the most positive although it was filtered out in our above analysis since it was not a large enough sample size.


## Takeaways

People really love their Jeeps! 🚗

👌is associated with the most positive texts!

People send out really positive texts during Thanksgiving! 🦃 


## Tools

* [Python](https://www.python.org/)
* [Snowflake](https://www.snowflake.com/)
* [SQLAlchemy](https://pypi.org/project/SQLAlchemy/)
* [Pandas](https://pandas.pydata.org/)
* [Text Blob](https://textblob.readthedocs.io/en/dev/)
* [NLTK](https://www.nltk.org/)
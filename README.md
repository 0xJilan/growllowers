# Growllowers

### Tool to calculate the number of followers you will have on social networks at end of year, if your account increases each week by a certain percentage.

## How to use

Install it through your favorite package manager:

`yarn add growllowers or npm i growllowers`

Here's a quick example of usage:

`import getFollowersByEndOfYear from 'growllowers'`

After that, put the actual number of followers you have:

`const actualFollowers = 100;`

And, put the percentage increase you are aiming for each week:

`const weeklyPercentGrowth = 10;`

Then, to get the result:

`const numberOfFollowerByTheEndOfYear = getFollowersByEndOfYear(actualFollowers, weeklyPercentGrowth)`

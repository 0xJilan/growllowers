# Growllowers

<br>

### Tool to calculate the number of followers you will have on social networks at end of year, if your account increases each week by a certain percentage.

## How to use

Install it through your favorite package manager:

`yarn add growllowers or npm i growllowers `

Here's a quick example of usage:

`import getFollowersByEndOfYear from 'growllowers';

const actualFollowers = 100; //Put the actual number of followers you have
const weeklyPercentGrowth = 10 //Put the percentage increase you are aiming for each week

const numberOfFollowerByTheEndOfYear = getFollowersByEndOfYear(actualFollowers, weeklyPercentGrowth)
`

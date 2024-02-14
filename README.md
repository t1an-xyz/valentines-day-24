# Happy Valentine's Day 💞
Tomorrow is Valentine's Day, so I made a website to tell you if you should confess to your crush 🥰

## The Math
The website is based off of an equation I made in high school as a joke to calculate if you should confess. The equation works by using a concept from Game Theory known as Expected Value. The Expected Value of confessing is 
$$E_{confess}=ap+b(1-p)$$
where $a$ is how you would feel if you confessed and they said yes, $b$ is how you would feel if you confessed and they said no, and $p$ is the probability that they say yes.

The Expected Value of not confessing is
$$E_{don't\ confess}=c$$
where $c$ is how you would feel if you don't confess. For example, if not confessing makes you feel stressed or anxious, $c$ would be negative indicating a negative emotion.

Ultimately, you should confess if the expected value of confessing is greater than the expected value of not confessing. So essentially solving the equation
$$ap+b(1-p)=c$$
for $p$.
$$p=\frac{c-b}{a-b}$$
The website asks the user for $a,b,$ and $c,$ then calculates $p$ and returns it as a percentage.
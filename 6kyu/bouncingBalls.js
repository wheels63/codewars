// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/javascript

function bouncingBall(h,  bounce,  window) {
    if ((h < 0) || (bounce <= 0 || bounce >= 1) || (window >= h)) {
        return -1
    }

    let ballSighting = 0;

    while (h > window) {
        ballSighting++;
        h *= bounce;
        if (h > window) {
            ballSighting++;
        }
    }
    return ballSighting;
}

console.log(bouncingBall(3, 0.66, 1.5));

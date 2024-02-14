const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

const confess_yes = document.getElementById('tell-yes');
const confess_no = document.getElementById('tell-no');
const dont_tell = document.getElementById('dont-tell');

const out_label = document.getElementById('confidence');

submitBtn.addEventListener('click', () => {
    if (confess_yes.value === '' || confess_no.value === '' || dont_tell.value === '') {
        alert('Please fill in all fields');
        return;
    }

    const a = confess_yes.value;
    const b = confess_no.value;
    const c = dont_tell.value;
    if (a < -10 || a > 10 || b < -10 || b > 10 || c < -10 || c > 10) {
        alert('Please enter a number between -10 and 10');
        return;
    }

    results.style.display = 'block';
    document.getElementById('yes-yes').innerText = a;
    document.getElementById('yes-no').innerText = b;
    document.getElementById('no-yes').innerText = c;
    document.getElementById('no-no').innerText = c;

    let equation = `
    \\begin{aligned}
        E_{confess} &= (${a})p + (${b})(1-p) \\\\
        E_{don't\\ confess} &= (${c}) \\\\
        (${a})p + (${b})(1-p) &= ${c} \\\\
        p &= \\frac{(${c})-(${b})}{(${a})-(${b})}
    \\end{aligned}`;

    document.getElementById('equation').innerText = equation;
    MathJax.typeset();
    
    if (a === b) {
        out_label.innerText = "Umm...You feel the same way whether they say yes or they say no? You're weird."
    }
    else {
        let p = (c - b) / (a - b);
        p = Math.round(p * 100);
        console.log(p);
        if (p <= 0) {
            out_label.innerText = `You should confess if you're more than ${p}% confident that they like you back. You must be really in love...Go for it! 💞`
        }
        else if (p >= 100)
            out_label.innerText = `You should confess if you're more than ${p}% confident that they like you back. Yeah...Maybe don't. 😬`;
        else
            out_label.innerText = `You should confess if you're more than ${p}% confident that they like you back! 💞`;
    }

    out_label.scrollIntoView({ behavior: 'smooth' });
});
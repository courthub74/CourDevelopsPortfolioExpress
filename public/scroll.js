// Time to iterate through the 'centers' class for center class
// query all 'centers'
const centers = document.querySelectorAll('.centers');

// options for centers
const optionscenters = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

// observer for centers
const observercenters = new IntersectionObserver(function(entries, observercenters){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("center");
        // so it doesn't repeat
        observercenters.unobserve(entry.target)
    });
}, optionscenters);

// iterate through the circles and pass it through the observer for circles
centers.forEach(center => {
    observercenters.observe(center);
});


// Time to iterate through the 'tops' class for top class
// query all 'tops'
const tops = document.querySelectorAll('.tops');
console.log(tops);

// options for tops
const optionstops = {
    root: null,
    threshold: 1,
    rootMargin: "100px 0px 100px 0px"
};

// observer for tops
const observertops = new IntersectionObserver(function(entries, observertops){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("top");
        // so it doesn't repeat
        observertops.unobserve(entry.target)
    });
}, optionstops);

// iterate through the circles and pass it through the observer for circles
tops.forEach(top => {
    observertops.observe(top);
});

// Time to iterate through the 'lefts' class for top class
// query all 'lefts'
const lefts = document.querySelectorAll('.lefts');

// options for lefts
const optionlefts = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

// observer for lefts
const observerlefts = new IntersectionObserver(function(entries, observerlefts){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("left");
        // so it doesn't repeat
        observerlefts.unobserve(entry.target)
    });
}, optionlefts);

// iterate through the circles and pass it through the observer for circles
lefts.forEach(left => {
    observerlefts.observe(left);
});


// Time to iterate through the 'rights' class for top class
// query all 'rights'
const rights = document.querySelectorAll('.rights');

// options for rights
const optionrights = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

// SMALL LEFTS (for the work experience description)
// query the 'smalllefts'
const lillefts = document.querySelectorAll('.lillefts');

// options for lil lefts
const optionlillefts = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

// observer for lil lefts 
    // in order to toggle the small lefts
const observerlillefts = new IntersectionObserver(function(entries, observerlillefts){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // now toggle on the smalllefts class
        entry.target.classList.toggle("smallleft");
        // so it doesn't repeat
        observerlillefts.unobserve(entry.target);
    });
}, optionlillefts);

// iterate through the circles and pass it through the observer for circles
lillefts.forEach(lefttwo => {
    observerlillefts.observe(lefttwo);
})

// observer for rights
const observerrights = new IntersectionObserver(function(entries, observerrights){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log(entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("right");
        // so it doesn't repeat
        observerrights.unobserve(entry.target)
    });
}, optionrights);

// iterate through the circles and pass it through the observer for circles
rights.forEach(right => {
    observerrights.observe(right);
});



// SOCIALS AND SKILLS

// Time to iterate through the 'righone' class for leftone class
// query all 'rightone'
const rightones = document.querySelectorAll('.rightones');
console.log('Rightones === ', rightones);

// options for leftones
const optionsrightones = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

// from right one
const observerrightones = new IntersectionObserver(function(entries, observerrightones){
    // The stuff
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log('RIGHTONES ===', entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("rightone")
        // so it doesn't repeat
        observerrightones.unobserve(entry.target);
    });
}, optionsrightones);

// iterate through the leftones and pass it through the observer for leftones
rightones.forEach(rightone => {
    observerrightones.observe(rightone);
});

// RIGHT TWOS
const righttwos = document.querySelectorAll('.righttwos');
console.log('Righttwos === ', righttwos);


const optionsrighttwos = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};


const observerrighttwos = new IntersectionObserver(function(entries, observerrighttwos){
    // The stuff
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log('RIGHTTWO ===', entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("righttwo")
        // so it doesn't repeat
        observerrighttwos.unobserve(entry.target);
    });
}, optionsrighttwos);


righttwos.forEach(righttwo => {
    observerrighttwos.observe(righttwo);
});


// RIGHT THREE
const rightthrees = document.querySelectorAll('.rightthrees');
console.log('Rightthrees === ', rightthrees);


const optionsrightthrees = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};


const observerrightthrees = new IntersectionObserver(function(entries, observerrightthrees){
    // The stuff
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log('RIGHTTHREE ===', entry.target);
        // lets toggle the class on or off
        entry.target.classList.toggle("rightthree");
        // so it doesn't repeat
        observerrightthrees.unobserve(entry.target);
    });
}, optionsrightthrees);


rightthrees.forEach(rightthree => {
    observerrightthrees.observe(rightthree);
});

// RIGHT FOUR
const rightfours = document.querySelectorAll('.rightfours');
console.log('Rightfours === ', rightfours);

const optionsrightfours = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

const observerrightfours = new IntersectionObserver(function(entries, observerrightfours){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log('RIGHTFOUR ===', entry.target);
        entry.target.classList.toggle("rightfour");
        observerrightfours.unobserve(entry.target);
    });
}, optionsrightfours);

rightfours.forEach(rightfour => {
    observerrightfours.observe(rightfour);
});

// RIGHT FIVE
const rightfives = document.querySelectorAll('.rightfives');
console.log('Rightfives === ', rightfives);

const optionsrightfives = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

const observerrightfives = new IntersectionObserver(function(entries, observerrightfives){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log('RIGHTFIVE ===', entry.target);
        entry.target.classList.toggle("rightfive");
        observerrightfives.unobserve(entry.target);
    });
}, optionsrightfives);

rightfives.forEach(rightfive => {
    observerrightfives.observe(rightfive);
});

// RIGHT SIX
const rightsixes = document.querySelectorAll('.rightsixes');
console.log('Rightsixes === ', rightsixes);

const optionsrightsixes = {
    root: null,
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
};

const observerrightsixes = new IntersectionObserver(function(entries, observerrightsixes){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }
        console.log('RIGHTSIX ===', entry.target);
        entry.target.classList.toggle("rightsix");
        observerrightsixes.unobserve(entry.target);
    });
}, optionsrightsixes);

rightsixes.forEach(rightsix => {
    observerrightsixes.observe(rightsix);
});


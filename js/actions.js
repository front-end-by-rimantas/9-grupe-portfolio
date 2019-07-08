"use strict";

// achievments section
document.querySelector('#achievements > .row').innerHTML = generateAchievments( achievments );

// clients section
document.querySelector('#clients > .row').innerHTML = generateClientLogos( clients );

// skills

// latest works

// job history

// service offers

// testimonials

// foteryje sugeneruojame ikonas
document.querySelector('#main_footer .social-icons').innerHTML = generateFooterIcons( footerIcons );

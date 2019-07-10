"use strict";

// achievments section
document.querySelector('#achievements .blocks-list').innerHTML = generateAchievments( achievements );

// clients section
document.querySelector('#clients > .row').innerHTML = generateClientLogos( clients );

// skills
document.querySelector('#skills_list').innerHTML = generateSkills( skills );

// latest works

// job history

// service offers
document.querySelector('#service_offers .blocks-list').innerHTML = generateAchievments( services );

// testimonials

// foteryje sugeneruojame ikonas
document.querySelector('#main_footer .social-icons').innerHTML = generateFooterIcons( footerIcons );

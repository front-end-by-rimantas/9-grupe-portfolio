"use strict";

document.querySelector('#achievements > .row').innerHTML = generateAchievments( achievments );

// foteryje sugeneruojame ikonas
document.querySelector('#main_footer .social-icons').innerHTML = generateFooterIcons( footerIcons );

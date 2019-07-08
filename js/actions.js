"use strict";

document.querySelector('#clients > .row').innerHTML = generateClientLogos( clients );

// foteryje sugeneruojame ikonas
document.querySelector('#main_footer .social-icons').innerHTML = generateFooterIcons( footerIcons );

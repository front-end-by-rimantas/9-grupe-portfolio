"use strict";

// achievments section
document.querySelector('#achievements .blocks-list').innerHTML = generateAchievments( achievements );

// clients section
document.querySelector('#clients > .row').innerHTML = generateClientLogos( clients );

// skills
document.querySelector('#skills_list').innerHTML = generateSkills( skills );

// latest works
document.querySelector('#works_gallery .gallery').innerHTML = generateGallery( works );

document.querySelectorAll('.gallery > .filter > .item').forEach( item => {
    item.addEventListener('click', (event)=>{
        const tag = event.target.innerText;

        if ( tag === 'All' ) {
            document.querySelectorAll('.gallery > .list > .item').forEach( item => {
                item.style.display = 'inline-block';
            });
        } else {
            // // is pradziu viska paslepiame
            // document.querySelectorAll('.gallery > .list > .item').forEach( item => {
            //     item.style.display = 'none';
            // });

            // // atgal parodome tik tuos kurie turi "tag" reiksme
            // document.querySelectorAll('.gallery > .list > .item').forEach( (item, index) => {
            //     if ( works[index].tags.indexOf(tag) !== -1 ) {
            //         item.style.display = 'inline-block';
            //     }
            // });

            // supaprastinimas
            document.querySelectorAll('.gallery > .list > .item').forEach( (item, index) => {
                // jei randa - parodo, jei ne - paslepia
                if ( works[index].tags.indexOf(tag) !== -1 ) {
                    item.style.display = 'inline-block';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
})

// job history

// service offers
document.querySelector('#service_offers .blocks-list').innerHTML = generateAchievments( services );

// testimonials
document.querySelector('#testimonials .col-12').innerHTML = generateTestimonials( testimonials );

document.querySelectorAll('.testimonials .fa').forEach( item => {
    item.addEventListener( 'click', changeTestimonial );
});

// foteryje sugeneruojame ikonas
document.querySelector('#main_footer .social-icons').innerHTML = generateFooterIcons( footerIcons );

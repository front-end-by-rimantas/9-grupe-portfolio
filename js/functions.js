"use strict";

// on scroll
function functionToCallOnScroll() {
    updateHeader();
    updateBackToTopVisibility();
    updateActiveHeaderMenu();
}

// header
function updateHeader() {
    const headerVisibleHeight = Math.floor(window.innerHeight * 0.5);
    const header = document.getElementById('main_header');
    
    if ( window.scrollY >= headerVisibleHeight ) {
        // prideda klase "fixed"
        header.classList.add('fixed');
    } else {
        // pasaliname klase "fixed"
        header.classList.remove('fixed');
    }
    return;
}

function updateMenu() {
    const body = document.querySelector('body');
    const left = document.querySelector('#menu > .left');
    const right = document.querySelector('#menu > .right');
    
    if ( body.classList.contains('show-menu') ) {
        left.classList.remove('in');
        right.classList.remove('in');
        left.classList.add('out');
        right.classList.add('out');

        // laukiame kada isvazuos sonai, tada paslepiam visa menu
        setTimeout(function(){
            body.classList.remove('show-menu');
        }, 1000);
    } else {
        body.classList.add('show-menu');
        left.classList.remove('out');
        right.classList.remove('out');
        left.classList.add('in');
        right.classList.add('in');
    }
        
    return;
}

function generateMenu() {
    let HTML = '<a href="#" class="active">Home</a>';
    const links = document.querySelectorAll('body > *[data-menu]');

    links.forEach( linkElement => {
        const href = linkElement.getAttribute('id');
        const title = linkElement.dataset.menu;
        HTML += `<a href="#${href}">${title}</a>`;
    });

    return HTML;
}

function generateHeaderIcons( data ) {
    let HTML = '';

    data.forEach( item => {
        HTML += `<a href="${item.link}" class="fa fa-${item.icon}"></a>`;
    });

    return HTML;
}

function updateActiveHeaderMenu() {
    const links = document.querySelectorAll('body > *[data-menu]');
    let sectionTitles = [''];
    let sectionTopPositions = [0],
        scrollPosition = window.scrollY + parseInt(getComputedStyle(document.getElementById('main_header')).height);

    links.forEach( link => {
        sectionTitles.push(link.getAttribute('id'));
        sectionTopPositions.push(link.offsetTop);
    });
    
    let i = 0;
    while ( sectionTopPositions[i] < scrollPosition ) {
        i++;
    }
    i--;
    
    document.querySelectorAll('#menu .left a').forEach( link => {
        link.classList.remove('active');
        if ( link.getAttribute('href') === '#'+sectionTitles[i] ) {
            link.classList.add('active');
        }
    });

    return;
}

// generate Achievments
function generateAchievments( data ) {
    let HTML = '',
        countValid = 0;

    for ( let i=0; i<data.length; i++ ) {
        if ( countValid >= 4 ) {
            break;
        }
        if ( !data[i].icon ||
             !data[i].title ) {
            continue;
        }

        if ( data[i].value ) {
            HTML += `<div class="block col-3 col-md-6 col-xs-12">
                        <i class="fa fa-${data[i].icon}"></i>
                        <p>${data[i].value}</p>
                        <h4>${data[i].title}</h4>
                    </div>`;
        }
        if ( data[i].description ) {
            HTML += `<div class="block col-3 col-md-6 col-xs-12">
                        <i class="fa fa-${data[i].icon}"></i>
                        <h4>${data[i].title}</h4>
                        <p>${data[i].description}</p>
                    </div>`;
        }
        countValid++;
    }

    return HTML;
}

// generate ClientLogos
function generateClientLogos( data ) {
    let HTML = '';

    for ( let i=0; i<data.length; i++ ) {
        HTML += `<a class="client" href="${data[i].link}">
                    <img src="img/clients/${data[i].photo}" alt="Client logo">
                </a>`;
    }

    return HTML;
}

// skills

function generateSkills( data ) {
    let HTML = '';

    data.forEach( bar => {
        HTML += `<div class="progress-bar">
                    <div class="texts">
                        <div class="title">${bar.title}</div>
                        <div class="value">${bar.value}%</div>
                    </div>
                    <div class="bar">
                        <div class="bar-value" style="width: ${bar.value}%;">
                            <div class="loading"></div>
                        </div>
                    </div>
                </div>`;
    });

    return HTML;
}

// latest works

function generateGallery( data ) {
    let HTML = '',
        tagsHTML = '',
        workHTML = '';

    // filtras
        // elementai: All + unikalus tag'ai
    uniqueWords(data, 'tags').forEach( tag => {
        tagsHTML += `<div class="item">
                        ${tag}
                    </div>`;
    });
        
    // darbu sarasas
        // max 6 elementai
    for ( let i=0; i<data.length; i++ ) {
        workHTML += `<div class="item" style="background-image: url(img/portfolio/${data[i].img});">
                        <div class="content">
                            <div class="texts">
                                <h4>${data[i].title}</h4>
                                <div class="tags">${data[i].tags.join(', ')}</div>
                            </div>
                        </div>
                    </div>`;
    }
    
    HTML = `<div class="filter">
                <div class="item active">All</div>
                ${tagsHTML}
            </div>
            <div class="list">
                ${workHTML}
            </div>`;

    return HTML;
}

// job history

// service offers

// testimonials

function generateTestimonials( data ) {
    let listHTML = '',
        cloneData = [];

    // klonuojame duomenis
    data.forEach( item => {
        cloneData.push(item);
    } );

    cloneData.push( cloneData[0] );
    cloneData.unshift( cloneData[2] );
                    
    cloneData.forEach( testimonial => {
        listHTML += `<div class="item" style="width: calc(100% / ${cloneData.length});">
                        <div class="qoute">99</div>
                        <div class="author">${testimonial.author}</div>
                        <div class="stars">
                            ${generateStars(testimonial.stars)}
                        </div>
                        <div class="content">${testimonial.content}</div>
                    </div>`;
    });

    return `<div class="testimonials">
                <div class="list" style="width: ${cloneData.length}00%;">${listHTML}</div>
                <div class="navigation">
                    <i class="fa fa-angle-left"></i>
                    <div class="full-bar">
                        <div class="bar" style="width: calc(100% / ${cloneData.length - 2}); margin-left: calc(100% / ${cloneData.length - 2});"></div>
                    </div>
                    <i class="fa fa-angle-right"></i>
                </div>
            </div>`;
}

function generateStars( count=5, limit=5 ) {
    let HTML = '';

    if ( limit < 1 ) {
        limit = 5;
    }
    if ( count < 1 ||
         count > limit ) {
        count = limit;
    }

    for ( let i=0; i<count; i++ ) {
        HTML += '<i class="fa fa-star"></i>';
    }
    
    if ( count < limit ) {
        for ( let i=0; i<limit-count; i++ ) {
            HTML += '<i class="fa fa-star-o"></i>';
        }
    }

    return HTML;
}

function changeTestimonial( event ) {
    let classList = event.target.classList,
        direction = 1,
        list = document.querySelector('#testimonials .list'),
        item = document.querySelector('#testimonials .list .item'),
        bar = document.querySelector('.testimonials > .navigation > .full-bar > .bar'),
        kadrai = 0,
        maxKadru = 25,
        time = 1000,
        zingsnisPx = 0;

    if ( classList.contains('fa-angle-left') ) {
        direction = -1;
    }

    if ( animationInProgress === false ) {
        visibleTestimonial += direction;
        
        if ( visibleTestimonial >= testimonials.length ) {
            visibleTestimonial = 0;
        }
        if ( visibleTestimonial < 0 ) {
            visibleTestimonial = testimonials.length - 1;
        }
        
        animationInProgress = true;
        console.log('pradedu...');
        
        let clock = setInterval( () => {
            kadrai++;
            
            // prasideda logika del testimonial judinimo sonu
            zingsnisPx = parseFloat(getComputedStyle( item ).width) / maxKadru;
            
            list.style.marginLeft = parseFloat( getComputedStyle(list).marginLeft ) - direction * zingsnisPx + 'px';

            
            // o cia logika baigiasi

            if ( kadrai >= maxKadru ) {
                animationInProgress = false;
                
                if( visibleTestimonial === 0 ) {
                    list.style.marginLeft = -parseFloat( getComputedStyle(item).width ) + 'px';
                }
                
                if( visibleTestimonial === testimonials.length - 1 ) {
                    list.style.marginLeft = -parseFloat( getComputedStyle(item).width ) * testimonials.length + 'px';
                }
                
                
                clearInterval( clock );
            }
        }, time / maxKadru );
    }

    console.log( `calc(100% / ${testimonials.length} * ${visibleTestimonial})` );
    
    bar.style.marginLeft = `calc(100% / ${testimonials.length} * ${visibleTestimonial})`;

    return;
}

// footer

function generateFooterIcons( data ) {
    let HTML = '';

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return HTML;
    }
    if ( data.length === 0 ) {
        console.error('Wrong data size. Non-empty array needed.');
        return HTML;
    }

    for ( let i=0; i<data.length; i++ ) {
        if ( typeof( data[i].icon ) !== 'string' ||
             typeof( data[i].link ) !== 'string' ||
             data[i].icon === '' ||
             data[i].link.length === 0 ) {
            continue;
        }
        HTML += `<a href="${data[i].link}">
                    <i class="fa fa-${data[i].icon}"></i>
                </a>`;
    }

    return HTML;
}

// back to top

function updateBackToTopVisibility() {
    const backToTopVisibleHeight = Math.floor(window.innerHeight * 0.5);
    const backToTop = document.getElementById('back_to_top');
    
    if ( window.scrollY >= backToTopVisibleHeight ) {
        // rodau rodykle
        backToTop.style.display = 'inline-block';
    } else {
        // slepiu rodykle
        backToTop.style.display = 'none';
    }
}
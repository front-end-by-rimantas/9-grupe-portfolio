"use strict";

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

// job history

// service offers

// testimonials

function generateTestimonials( data ) {
    let listHTML = '';
                    
    data.forEach( testimonial => {
        listHTML += `<div class="item">
                        <div class="qoute">99</div>
                        <div class="author">${testimonial.author}</div>
                        <div class="stars">
                            ${generateStars(testimonial.stars)}
                        </div>
                        <div class="content">${testimonial.content}</div>
                    </div>`;
    });

    return `<div class="testimonials">
                <div class="list">${listHTML}</div>
                <div class="navigation">
                    <i class="fa fa-angle-left"></i>
                    <div class="full-bar">
                        <div class="bar"></div>
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
        direction = 1;

    if ( classList.contains('fa-angle-left') ) {
        direction = -1;
    }

    visibleTestimonial += direction;
    
    if ( visibleTestimonial >= testimonials.length ) {
        visibleTestimonial = 0;
    }
    if ( visibleTestimonial < 0 ) {
        visibleTestimonial = testimonials.length - 1;
    }

    document.querySelector('.testimonials > .navigation > .full-bar > .bar').style.marginLeft = `calc(100% / ${testimonials.length} * ${visibleTestimonial})`;

    return document.querySelector('#testimonials .list').style.marginLeft = visibleTestimonial * -100 + '%';
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
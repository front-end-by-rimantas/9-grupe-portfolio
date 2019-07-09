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
            HTML += `<div class="block">
                        <i class="fa fa-${data[i].icon}"></i>
                        <p>${data[i].value}</p>
                        <h4>${data[i].title}</h4>
                    </div>`;
        }
        if ( data[i].description ) {
            HTML += `<div class="block">
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
        HTML += `<a href="${data[i].link}">
                    <img src="${data[i].photo}" alt="Client logo">
                </a>`;
    }

    return HTML;
}

// skills

// latest works

// job history

// service offers

// testimonials

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
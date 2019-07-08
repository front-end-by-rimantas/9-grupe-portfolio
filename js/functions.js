"use strict";

function generateFooterIcons( data ) {
    let HTML = '';

    if ( !Array.isArray(data) ) {
        console.error('Wrong data type. Has to be an array.');
        return;
    }

    for ( let i=0; i<data.length; i++ ) {
        HTML += `<a class="asd" href="${data[i].link}">
                    <i class="fa fa-${data[i].icon}"></i>
                </a>`;
    }

    return HTML;
}
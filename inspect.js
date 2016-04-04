var inspect = require ( 'eyes' ).inspector ( { maxLength: 0 } );

module.exports = function ( message ) {
    if ( message === null || typeof message === 'boolean' || typeof message === 'string' || typeof message === 'number' || typeof message === 'undefined' || typeof message === 'NaN' ) {
        return console.log ( message );
    }

    inspect ( message );
};

var inspect = require ( 'eyes' ).inspect ( { maxLength: 0 } );

module.exports = function ( message ) {
    if ( typeof message === 'string' || typeof message === 'number' ) {
        return console.log ( message );
    }

    inspect ( message );
};

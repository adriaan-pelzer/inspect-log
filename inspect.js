var inspect = require ( 'eyes' ).inspector ( { maxLength: 0 } );

module.exports = function ( message ) {
    if ( typeof message === 'string' || typeof message === 'number' ) {
        return console.log ( message );
    }

    inspect ( message );
};

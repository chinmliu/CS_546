const dbConnection = require("./mongoConnection");

const getCollectionFn = function(collection) {
    let _col = undefined;

    return async function() {
        if (!_col) {
            const db = await dbConnection();
            _col = await db.collection(collection);
        }

        return _col;
    };
};

module.exports = {
    animals: getCollectionFn("animals")
};
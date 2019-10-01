const mongoCollections = require("./mongoCollections");
const animals = mongoCollections.animals;

async function create(name, animalType) {
    if (!name) throw "You must provide a animal's name."

    if (!animalType) throw "You must provide a animal type."

    const animalCollection = await animals();

    let newAnimal = {
        name: name,
        animalType: animalType
    };

    const insertInfo = await animalCollection.insertOne(newAnimal);
    if (insertInfo.insertedCount === null) throw "Could create animal.";

    const newId = insertInfo.insertedId;

    const animal = await this.get(newId);
    return animal;
}

async function getAll() {
    const animalCollection = await animals();

    const allAnimals = await animalCollection.find({}).toArray();

    return allAnimals;
};

async function get(id) {
    if (!id) throw "You must provide an id to search for";

    const animalCollection = await animals();
    const animalInfo = await animalCollection.findOne({ _id: id });

    if (animalInfo === null) throw "No animal with that id.";

    return animalInfo;
};

async function remove(id) {
    if (!id) throw "You must provide an id to search for.";

    const animalCollection = await animals();
    const deletionInfo = await animalCollection.removeOne({ _id: id });

    if (deletionInfo === null) throw "Could not delete animal with id of ${id}.";
}

async function rename(id, newName) {
    if (!id) throw "You must provide an id to search for.";

    if (!newName) throw "You must provide a name for the animal.";

    const renamedAnimalInfo = await get(id);
    newAnimalType = renamedAnimalInfo.animalType
    
    const animalCollection = await animals();
    const updatedAnimal = {
        $set: {
        name: newName,
        animalType: newAnimalType
        }
    };

    const updateInfo = await animalCollection.updateOne({ _id: id }, updatedAnimal);
    if (updateInfo.modifiedCount === 0) throw "Could not update animal successfully.";

    return await this.get(id);
}

module.exports = {
    create,
    getAll,
    get,
    remove,
    rename
};
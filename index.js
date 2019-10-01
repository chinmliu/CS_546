const animals = require("./animals");
const connection = require("./mongoConnection");

const main = async function() {
    const sasha = await animals.create("Sasha", "Dog");
    console.log("Sasha the dog has been created.");
    console.log(sasha);

    const lucy = await animals.create("Lucy", "Dog");
    console.log("Lucy the dog has been created.");
    const allAnimal = await animals.getAll();
    console.log(allAnimal);

    const duke = await animals.create("Duke", "Walrus");
    console.log("Duke the walrus has been created.");
    console.log(duke);

    const getAllAnimalInfo = await animals.getAll();     
    const sashita = await animals.rename(sasha._id, "Sashita");
    console.log("Sasha has been renamed to sashita");
    console.log(sashita)

    await animals.remove(lucy._id);
    const remainAnimals = await animals.getAll();
    for (let remainAnimal of remainAnimals) {
        let remainAnimalInfo = await animals.get(remainAnimal._id);
        console.log(remainAnimalInfo);
    }

    const getAllAnimal = await animals.getAll();
    for (let allAnimals of getAllAnimal) {
        await animals.remove(allAnimals._id);
    }
    
    console.log("Database cleaned.")    
    console.log("All done!");
};

main().catch(function (e) {
    console.log(e);
})
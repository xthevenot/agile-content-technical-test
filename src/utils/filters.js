/**
 * Return filtered animals
 * @param {Array} animals original list of animals
 * @param {String} searchInput the filter input
 * @returns a new filtered array
 */
async function filterAnimals(animals, searchInput) {
    // Artificially delay a response for demo purposes.
    await new Promise((resolve) => setTimeout(resolve, 400));

    return animals.filter(function (animal) {
        if (searchInput) {
            return animal.type.search(searchInput) !== -1 || animal.name.search(searchInput) !== -1;
        }
        return true;

    });
}

export default filterAnimals;

import { faker } from "@faker-js/faker";

export function createAnimalsList() {
    const data = [...new Array(100)].map((item, index) => {
        const type = faker.animal.type();
        const animal = faker.animal[type]();
        return (
            {
                id: index + 1,
                type: type,
                url: faker.internet.url(),
                name: animal,
                description: faker.lorem.sentences(),
                image: faker.image.animals(644, 362, true),
            });
    });
    return data;
}


export const getImageUrl = (person: Person) => {
    const { imageId } = person;
    return `https://i.imgur.com/${imageId}s.jpg`;
}

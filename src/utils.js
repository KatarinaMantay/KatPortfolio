export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};

export const getImage = (path) => {
    return `/assets/${path}`;  // directly reference assets from public folder
};

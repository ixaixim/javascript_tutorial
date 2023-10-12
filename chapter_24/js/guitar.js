const playGuitar = () => {
    return 'Playing guitar';
}

const shredding = () => {
    return 'Shredding guitar';
}

const plucking = () => {
    return 'Plucking guitar';
}

export default playGuitar; // export default function
export { shredding, plucking }; // export all functions

// note: the previous code is equivalent to:
// export default playGuitar = () => {
//     return 'Playing guitar';
// }
// export const shredding = () => {
//     return 'Shredding guitar';
// }
// export const plucking = () => {
//     return 'Plucking guitar';
// }
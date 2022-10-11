export const pathJoin = (...args) =>
    args.map((part, i) => i === 0
        ? part.trim().replace(/[\/]*$/g, '')
        : part.trim().replace(/(^[\/]*|[\/]*$)/g, ''))
        .filter(x => x.length).join('/');

export default { pathJoin };
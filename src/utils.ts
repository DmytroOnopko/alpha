export function generateId() {
    return Date.now() * 1000 + Math.floor(Math.random() * 1000);
}

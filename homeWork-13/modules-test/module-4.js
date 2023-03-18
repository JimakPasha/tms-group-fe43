const date = new Date();

export function getTime() {
    return `Сейчас ${date.getHours()}:${date.getMinutes()} минут`;
}
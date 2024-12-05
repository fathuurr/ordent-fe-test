function acronym(name) {
    let parts = name.split(' ');
    let result = '';

    let firstNames = parts[0].split('-');
    for (let firstName of firstNames) {
        result += firstName[0].toUpperCase();
    }

    if (parts.length === 3 && parts[1].toLowerCase() !== 'von') {
        result += parts[1][0].toUpperCase();
    }

    if (parts.includes('von')) {
        result += 'v';
        let vonIndex = parts.findIndex(part => part.toLowerCase() === 'von');
        let lastNames = parts[vonIndex + 1].split('-');
        for (let lastName of lastNames) {
            result += lastName[0].toUpperCase();
        }
    } else {
        let lastNames = parts[parts.length - 1].split('-');
        for (let lastName of lastNames) {
            result += lastName[0].toUpperCase();
        }
    }

    return result;
}

console.log(acronym("Thomas Meyer"));
console.log(acronym("martin schmidt"));
console.log(acronym("Jan-Erich Schmidt"));
console.log(acronym("Jan Erich Mueller"));
console.log(acronym("Paul Meyer-Schmidt"));
console.log(acronym("Paul von Lahnstein"));
console.log(acronym("Martin von Lahnstein-Meyer"));
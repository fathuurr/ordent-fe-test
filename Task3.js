function stringCombine(one, two, three) {
    return [...one].map((letter, i) => letter + two[i] + three[i]).join('');
}

console.log(stringCombine("aa", "bb", "cc"));
console.log(stringCombine("at", "ot", "gt"));
console.log(stringCombine("Bm", "aa", "tn"));
function inverterString(str) {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str.charAt(i);
    }
    return reversedString;
}

// Exemplo de uso:
const stringOriginal = "Bom estagiário";
const stringInvertida = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
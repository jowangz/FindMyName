
function getLetterList(n) {
    const pool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let output = []
    if (n === 1) {
        return pool
    }
    if (n <= 0) {
        return []
    }
    for (let i = 0; i < pool.length; i++) {
        let next = getLetterList(n - 1)
        for (let j = 0; j < next.length; j += 1) {
            output.push(pool[i] + next[j])
        }
    }
    return output
}

export function getNameList(name, numOfCharacters, suffix) {
    let array = getLetterList(numOfCharacters)
    if (suffix == true) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] +name
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            array[i] = name + array[i]
        }
    }
    return array
}


export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const mat = document.querySelector(".mat");

const mo = document.querySelector(".mo");

const changeContent = document.getElementById("element");

const changeColor = document.querySelectorAll(".title");

setTimeout (() => {
    mat.style.display = "none";
    mo.style.opacity = "0";
    changeContent.textContent = "Nội dung mới";
    changeColor.forEach(change => change.style.color = "blue");
    document.body.style.backgroundColor = "rgba(228, 228, 228, 1)";
},2000);

const changeButton = document.querySelector(".btn");

setTimeout (() => {
    changeButton.style.backgroundColor = "#5db875";
    changeButton.style.width = "300px";
    changeButton.style.height = "100px";
},5000);

function sevenBoom(arr) {
    for (let num of arr) {
        if (num.toString().includes("7")) {
            return "Boom!";
        }
    }
    return "Không có số 7 trong mảng";
}

console.log(sevenBoom([2, 55, 60, 90, 86]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

function getFrequencies(arr) {
    const kq = {};
    for (let num of arr) {
        if (kq[num] === undefined) {
            kq[num] = 1;
        } else {
            kq[num]++;
        }
    }
    return kq;
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]));
console.log(getFrequencies([]));

function isDisarium(num) {
    const str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        const so = Number(str[i]);
        const mu = i + 1; 
        sum += Math.pow(so, mu);
    }
    return sum === num;
}

console.log(isDisarium(75));
console.log(isDisarium(135));

function doubleSwap(str, c1, c2) {
    let kq = "";
    for (let ch of str) {
        if (ch === c1) {
            kq += c2;
        } 
        else if (ch === c2) {
            kq += c1;
        } 
        else {
            kq += ch;
        }
    }
    return kq;
}

console.log(doubleSwap( "aabbccc", "a", "b"));
console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"));
console.log(doubleSwap("128 895 556 788 999", "8", "9"));

function isHeteromecic(x) {
    if (x < 0) return false;
    for (let n = 0; n * (n + 1) <= x; n++) {
        if (n * (n + 1) === x) {
            return true;
        }
    }
    return false;
}

console.log(isHeteromecic(2));
console.log(isHeteromecic(7));
console.log(isHeteromecic(110));

function camelCasing(str) {
    let words = str.toLowerCase().split(/[\s_]+/);
    let kq = words[0];
    for (let i = 1; i < words.length; i++) {
        kq += words[i][0].toUpperCase() + words[i].slice(1);
    }
    return kq;
}

console.log(camelCasing("Hello World"));
console.log(camelCasing("snake_case"));
console.log(camelCasing("low high_HIGH"));

function firstRepeat(str) {
    let seen = new Set();
    for (let ch of str) {
        if (seen.has(ch)) {
            return ch;
        }
        seen.add(ch);
    }
    return "-1";
}

console.log(firstRepeat("legolas"));
console.log(firstRepeat("Balrog"));
console.log(firstRepeat("Isildur"));

function pluralize(words) {
    let count = {};
    for (let word of words) {
        if (count[word]) {
            count[word]++;
        } else {
            count[word] = 1;
        }
    }
    let kq = [];
    for (let word in count) {
        if (count[word] > 1) {
            kq.push(word + "s");
        } else {
            kq.push(word);
        }
    }
    return kq;
}

console.log(pluralize(["cow", "pig", "cow", "cow"]));
console.log(pluralize(["table", "table", "table"]));
console.log(pluralize(["chair", "pencil", "arm"]));

function mapLetters(str) {
    let kq = {};
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (kq[ch] === undefined) {
            kq[ch] = [];
        }
        kq[ch].push(i);
    }
    return kq;
}

console.log(mapLetters("dodo"));
console.log(mapLetters("froggy"));
console.log(mapLetters("grapes"));
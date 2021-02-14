var answer = +prompt('Сколько гласных букв в этой строке? (Бопре в отечестве своем был парикмахером)')
var vow = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
var str = 'Бопре в отечестве своем был парикмахером';
var result = 0;
for (const key in vow) {
    for (const keys in str) {
        if (vow[key] == str[keys]) {
            result++;
        } 
    }
}
if (result == answer) {
    console.log('Правильно!')
}else {
    console.log(`Неправильно! (Здесь ${result} гласных)`);    
}

let first = ['Love', 'Happiness', 'Success', 'Faith', 'Joy', 'Health', 'Financial Freedom'];
let second = ['passion', 'actions', 'dreams', 'choices', 'desires', 'achievements', 'motivation'];
let third = ['strong', 'kind', 'wise', 'faithful', 'generous', 'passionate', 'a dreamer'];
let word1, word2, word3, motivationalMessage;


function generateRandomWords(arr){
    return arr[Math.floor(Math.random() * arr.length)];
    
}


word1 = generateRandomWords(first);
word2 = generateRandomWords(second);
word3 = generateRandomWords(third);
motivationalMessage = `${word1} is not something ready made, it comes from your own ${word2}.  Be ${word3}`;
console.log(motivationalMessage);
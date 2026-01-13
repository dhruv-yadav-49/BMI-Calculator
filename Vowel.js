const textarea = document.querySelector('#textarea');
const count = document.querySelector('#count');
const output = document.querySelector('#output');

count.addEventListener('click', () => {
    let text = textarea.value;

    if(textarea.value==''){
        alert('Please enter some text');
    }
    else{
        let count = 0;
        for(let i =0; i<text.length; i++){
            if(text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u'){
                count++;
            }
        }
        output.innerHTML = 'Number of vowels: ' + count;
    }
})


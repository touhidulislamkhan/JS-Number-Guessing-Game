let btn = document.querySelector('#btn');
let h3 = document.querySelector('h3');

let low = 1;
let high = 10;

let correct_ans = Math.floor(Math.random() * high + low);

btn.addEventListener('click', () => {
    for (let i = 3; i >= 0; i--) {
        if (i === 0) {
            h3.innerHTML = 'You Lose!';
            btn.innerHTML = 'Try Again';
        } else {
            let input = parseInt(prompt('Choose A Number Between 0 and 10'));
            if (isNaN(input)) {
                break;
            }
            else if (input === correct_ans) {
                h3.innerHTML = `Congratulaions! You Won`;
                btn.remove();
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
                break;
            }
             else if (input > correct_ans) {
                alert('Correct Answer Is Smaller');
            }
             else {
                alert('Correct Answer Is Greater');
            }
        }
    }
});

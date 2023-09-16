const text1=document.getElementById('text1');
const text2=document.getElementById('text2');
const text3=document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function сhangesСolor() {
    for (let i = 0; i <= colors.length; ) {
        return function (event) {
            event.target.style.color = colors[i];
            i++;
            if (i >= colors.length) {
                i = 0;
            }
        };
    }
};


text1.addEventListener('click',сhangesСolor());
text2.addEventListener('click',сhangesСolor());
text3.addEventListener('click',сhangesСolor());
            



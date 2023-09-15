const text1=document.getElementById('text1');
const text2=document.getElementById('text2');
const text3=document.getElementById('text3');
export const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

text1.addEventListener(
    'click',
    (function col () {
        for (let i = 0; i <= colors.length; ) {
            return function (event) {
                event.target.style.color = colors[i];
                i++;
                if (i >= colors.length) {
                    i = 0;
                }
            };
        }
    })());


text2.addEventListener(
    'click',
    (function () {
        for (let i = 0; i <= colors.length; ) {
            return function (event) {
                event.target.style.color = colors[i];
                i++;
                if (i >= colors.length) {
                    i = 0;
                }
            };
        }
    })());

text3.addEventListener(
    'click',
    (function () {
        for (let i = 0; i <= colors.length; ) {
            return function (event) {
                event.target.style.color = colors[i];
                i++;
                if (i >= colors.length) {
                    i = 0;
                }
            };
        }
    })());


    export function sum(a, b) {
        return a + b;
      };
      export default sum;
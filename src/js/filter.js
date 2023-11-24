
const button =document.querySelector('.form__people1');
button.addEventListener("click", function(){
  document.getElementById("people__info").style.display = "block";
})


const counters = document.querySelectorAll('.counter');
if(counters){
    counters.forEach(counter=>{
        counter.addEventListener('click',e=>{
          const target = e.target;
            if(target.closest('.conter_button')){
                let value = parseInt(target.closest('.counter').querySelector('input').value);
                let roomSpan = document.querySelectorAll('.roomsSpan');
                let disabledChild =document.querySelector('.disabledChild');
                let childAge =document.querySelector('.childAge');
                const select = document.createElement('select');                
                if(target.classList.contains('conter__betton_plus')){
                    value++
                    if(counter==counters[1] && value<=10){
                      for (let i = 0; i <= 17; i++) {
                        const option = document.createElement('option');
                        option.innerText = i + ' years old';
                        select.appendChild(option);
                        childAge.append(select);
                      }
                    }
                  }
                else{
                    --value
                    if(counter==counters[1] && value>=0){
                      childAge.removeChild(childAge.lastElementChild);
                    }
                }
            if(counter==counters[1]){
              if(value<=0){
                value = 0;
                target.closest('.counter').querySelector('.conter__betton_minus').classList.add('disabled');
                disabledChild.style.display = "none";          
              }
              else if(value >=10){
                value = 10;
                target.closest('.counter').querySelector('.conter__betton_plus').classList.add('disabled');
              }
              else{
                target.closest('.counter').querySelector('.conter__betton_minus').classList.remove('disabled');
                target.closest('.counter').querySelector('.conter__betton_plus').classList.remove('disabled');
                disabledChild.style.display = "block";  
              }
            } 
            else{
              if(value<=1){
                value =1;
                target.closest('.counter').querySelector('.conter__betton_minus').classList.add('disabled');
              }
              else if(value>=30){
                value=30;
                target.closest('.counter').querySelector('.conter__betton_plus').classList.add('disabled')
              }
              else{
                target.closest('.counter').querySelector('.conter__betton_minus').classList.remove('disabled');
                target.closest('.counter').querySelector('.conter__betton_plus').classList.remove('disabled');
              }
            }   
            target.closest('.counter').querySelector('input').value=value;
            if(counter==counters[0]){
              roomSpan[0].textContent = value;
            }
            else if(counter==counters[1]){
              roomSpan[1].textContent = value;
            }
            else{
              roomSpan[2].textContent = value;
            }
          }
        }
        )
    })
}


  const homesItems = fetch(
    'https://if-student-api.onrender.com/api/hotels/popular',
  ).then((response) => response.json()
  ).then((arr)=>{
    const newList = document.querySelector('.homes__list');
    for(let i = 0; i<=arr.length;i++){
      const newElList= document.createElement('li');
      newElList.setAttribute("class", 'homes__item');
      newList.appendChild(newElList);
    
      const newImg = document.createElement('img');
      newImg.setAttribute("src", arr[i].imageUrl);
      newImg.setAttribute("class", 'homes__images');
      newElList.appendChild(newImg);
      
      const newTitle= document.createElement('h3');
      newTitle.textContent=arr[i].name;
      newTitle.setAttribute("class", 'homes__hotel');
      newElList.appendChild(newTitle);
    
      const newText = document.createElement('p')
      newText.textContent=`${arr[i].city}, ${arr[i].country}`;
      newText.setAttribute("class", 'homes__city');
      newElList.appendChild(newText);
    }
  }).catch((err) => {
    console.log('Fetch Error :-S', err);
  });

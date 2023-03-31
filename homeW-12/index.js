const userFirstName = document.querySelector('.userFirstname');
 const userLastName = document.querySelector('.userLastname');
 const userAge = document.querySelector('.userAge');
 const buttonCreate = document.querySelector('.button_create');
 const buttonClear = document.querySelector('.button_clear');
 const user = document.querySelector('.user');


userAge.addEventListener('input', () => {
   buttonCreate.disabled = userAge.value < 18;
})
   
 let listArr = []; 
  buttonCreate.addEventListener ('click', () => {
    const userObj = {};
    userObj.name = userFirstName.value; 
    userObj.lastName = userLastName.value; 
    userObj.age = userAge.value; 
    listArr.push(userObj);

    localStorage.setItem('user', JSON.stringify(listArr));
      const item = document.createElement('li');
      item.innerText = `Список пользователей:  ${userFirstName.value} ${userLastName.value},${userAge.value} лет`;
      user.append(item);
 });



 if (localStorage.getItem('user')) {
    listArr = JSON.parse(localStorage.getItem('user'));
    console.log(listArr);
    listArr.forEach((item ) => {
        const el = document.createElement('li');
        el.innerText = `Список пользователей:  ${userFirstName.value} ${userLastName.value},${userAge.value}лет`;
        user.append(el);
        
    });
 }



 buttonClear.addEventListener('click' , ()=>{
    userFirstName.value =''; 
    userLastName.value =''; 
    userAge.value =''; 
    localStorage.clear();
    user.remove();
 }
 );
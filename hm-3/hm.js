 const userFirstName =document.querySelector('.userFirstname');
 const userLastName =document.querySelector('.userLastname');
 const userAge =document.querySelector('.userAge');
 const buttonCreate =document.querySelector('.button_create');
 const buttonClear =document.querySelector('.button_clear');
 const user =document.querySelector('.user');


 let userArr =[];

 if (localStorage.getItem('user')){
    userArr = JSON.parse(localStorage.getItem('user'));
    userArr.forEach((item) => {
        const el = document.createElement('li');
        el.innerText = item.value;
        user.append(el);
        
    });
 }

 buttonCreate.addEventListener('click', () => {
    const userObj = {};

    userObj.name= userFirstName.value; 
    userObj.lastName= userLastName.value; 
    userObj.age= userAge.value; 
    userArr.push(userObj);
    
    localStorage.setItem('user',JSON.stringify(userArr));
    const item = document.createElement('li');
    item.innerText = userAge.value;
   user.append(item);
 });

 buttonClear.addEventListener('click' , ()=>{
    userFirstName.value =''; 
    userLastName.value =''; 
    userAge.value =''; 
    localStorage.clear();
    user.remove();
   
 }
 );

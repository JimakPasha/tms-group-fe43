"use strict"


// // кнопка delete all
const deleteAll = document.createElement('button') // // ----------------- создание нового элемента <button>
const deleteAllText = document.createTextNode('Delete All') // // -------- создание текста
deleteAll.appendChild(deleteAllText) // // ------------------------------- добавление текста для <button>  
root.appendChild(deleteAll) // // ---------------------------------------- добавление кнопки в <div> root
deleteAll.classList.add('deleteAllButton') // // ------------------------- создание класса 


// // input
const enterToDo = document.createElement('input') // // ------------------ создание новый элемент <input>
enterToDo.placeholder = 'Enter todo ...'// // ---------------------------- добавление текста в <input>
root.appendChild(enterToDo) // // ---------------------------------------- добавление  в <div> root
enterToDo.classList.add('inputToDo') // // ------------------------------- создание класса 


// //  кнопка add
const add = document.createElement('button') // // ----------------------- создание нового элемента <button>
const addText = document.createTextNode('Add') // // --------------------- создание текста
add.appendChild(addText) // // ------------------------------------------- добавление текста для <button>  
root.appendChild(add) // // ---------------------------------------------- добавление кнопки в <div> root
add.classList.add('addButton') // // ------------------------------------- создание класса 


// // wrapper (div в котором ✓, inputToDoText, x, Date) 
const divWrap = document.createElement('div'); // // --------------------- создание нового элемента <div>
root.appendChild(divWrap); // // ----------------------------------------- добавление <div> в root
divWrap.classList.add('wrapper') // // ----------------------------------- создание класса 


// // wrapper (div в котором ✓, inputToDoText) 
const divWrapFirst = document.createElement('div'); // // ---------------- создание нового элемента <div>
divWrap.appendChild(divWrapFirst); // // --------------------------------- добавление <div> в root
divWrapFirst.classList.add('wrapperFirst') // // ------------------------- создание класса 


// // wrapper (div в котором x, Date) 
const divWrapSecond = document.createElement('div'); // // --------------- создание нового элемента <div>
divWrap.appendChild(divWrapSecond); // // -------------------------------- добавление <div> в divWrap
divWrapSecond.classList.add('wrapperSecond') // // ----------------------- создание класса 


// // кнопка ✓
const enter = document.createElement(`button`) // // --------------------- создание нового элемента <button>
const textButtonEnter = document.createTextNode('✓') // // --------------- создание текста
enter.appendChild(textButtonEnter) // // --------------------------------- добавление текста для <button> 
divWrapFirst.appendChild(enter) // // ------------------------------------ добавление кнопки в <div> divWrapFirst
enter.classList.add('enterButton') // // --------------------------------- создание класса 


// // input
const toDoText = document.createElement('input') // // ------------------- создание новый элемент <input>
toDoText.placeholder = 'To do text'// // --------------------------------- добавление текста в <input>
divWrapFirst.appendChild(toDoText) // // --------------------------------- добавление  в <div> root
toDoText.classList.add('inputToDoText') // // ---------------------------- создание класса 


// // кнопка x
const closeButton = document.createElement(`button`) // // --------------- создание нового элемента <button>
const textButtonClose = document.createTextNode('X') // // --------------- создание текста
closeButton.appendChild(textButtonClose) // // --------------------------- добавление текста для <button> 
divWrapSecond.appendChild(closeButton) // // ----------------------------- добавление кнопки в <div> divWrapSecond
closeButton.classList.add('closeButton') // // --------------------------- создание класса 


// // input
const inputDate = document.createElement('input') // // ------------------ создание новый элемент <input>
inputDate.placeholder = 'Date'// // -------------------------------------- добавление текста в <input>
divWrapSecond.appendChild(inputDate) // // ------------------------------- добавление в <div> divWrapSecond
inputDate.classList.add('inputDate') // // ------------------------------- создание класса 


// //repeat

// // wrapper (div в котором ✓, inputToDoText, x, Date) 
const divWrap2 = document.createElement('div'); // // --------------------- создание нового элемента <div>
root.appendChild(divWrap2); // // ----------------------------------------- добавление <div> в root
divWrap2.classList.add('wrapper2') // // ----------------------------------- создание класса 

// // wrapper (div в котором ✓, inputToDoText) 
const divWrapFirst2 = document.createElement('div'); // // ---------------- создание нового элемента <div>
divWrap2.appendChild(divWrapFirst2); // // --------------------------------- добавление <div> в root
divWrapFirst2.classList.add('wrapperFirst2') // // ------------------------- создание класса 


// // wrapper (div в котором x, Date) 
const divWrapSecond2 = document.createElement('div'); // // --------------- создание нового элемента <div>
divWrap2.appendChild(divWrapSecond2); // // -------------------------------- добавление <div> в divWrap
divWrapSecond2.classList.add('wrapperSecond2') // // ----------------------- создание класса 

// // кнопка ✓
const enter2 = document.createElement(`button`) // // --------------------- создание нового элемента <button>
const textButtonEnter2 = document.createTextNode('✓') // // --------------- создание текста
enter2.appendChild(textButtonEnter2) // // --------------------------------- добавление текста для <button> 
divWrapFirst2.appendChild(enter2) // // ------------------------------------ добавление кнопки в <div> divWrapFirst
enter2.classList.add('enterButton2') // // --------------------------------- создание класса 

// // input
const toDoText2 = document.createElement('input') // // ------------------- создание новый элемент <input>
toDoText2.placeholder = 'To do text'// // --------------------------------- добавление текста в <input>
divWrapFirst2.appendChild(toDoText2) // // --------------------------------- добавление  в <div> root
toDoText2.classList.add('inputToDoText2') // // ---------------------------- создание класса 

// // кнопка x
const closeButton2 = document.createElement(`button`) // // --------------- создание нового элемента <button>
const textButtonClose2 = document.createTextNode('X') // // --------------- создание текста
closeButton2.appendChild(textButtonClose2) // // --------------------------- добавление текста для <button> 
divWrapSecond2.appendChild(closeButton2) // // ----------------------------- добавление кнопки в <div> divWrapSecond
closeButton2.classList.add('closeButton2') // // --------------------------- создание класса 

// // input
const inputDate2 = document.createElement('input') // // ------------------ создание новый элемент <input>
inputDate2.placeholder = 'Date'// // -------------------------------------- добавление текста в <input>
divWrapSecond2.appendChild(inputDate2) // // ------------------------------- добавление в <div> divWrapSecond
inputDate2.classList.add('inputDate2') // // ------------------------------- создание класса 



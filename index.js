const loader = document.getElementById('loader');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

const watch = document.querySelector('.watch');
const restart = document.querySelector('.replay');
const option = document.querySelectorAll('.option');
const rightAns =document.querySelectorAll('.rightAns');
const wrongAns =document.querySelectorAll('.wrongAns');
const rightMark =document.querySelectorAll('.rightMark');

const optContainer = document.querySelector('.optionContainer');
const question = document.querySelectorAll('.question');
const qContainer  = document.querySelector('.questionContainer');

const scissors = document.getElementById('question_1');   //wrong
const eraser = document.getElementById('question_2');
const ruler = document.getElementById('question_3');
const bag = document.getElementById('question_4');         //wrong
const pencil_case = document.getElementById('question_5');     //wrong
const pencil = document.getElementById('question_6');
const book = document.getElementById('question_7');
const pen = document.getElementById('question_8');

const ans1 = document.querySelector('.option_1');
const ans2 = document.querySelector('.option_2');
const ans3 = document.querySelector('.option_3');
const ans4 = document.querySelector('.option_4');
const ans5 = document.querySelector('.option_5');

const right = document.querySelectorAll('.right');
const right1 = document.getElementById('right1');
const right2 = document.getElementById('right2');
const right3 = document.getElementById('right3');
const right4 = document.getElementById('right4');
const right5 = document.getElementById('right5');

const wrong1 = document.getElementById('wrong1');
const wrong2 = document.getElementById('wrong2');
const wrong3 = document.getElementById('wrong3');
const wrong4 = document.getElementById('wrong4');
const wrong5 = document.getElementById('wrong5');

const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');

const rightAnswers = ["eraser", "ruler", "pencil", "book", "pen"];
const wrongAnswers =['scissors','bag','pencil_case'];

//////////////////////////////////////////////////////////////////////////////////

// LOADER FUNCTIONALITY


function loadPage(){
  setTimeout(showContent, 1000);
}

function showContent() {
  loader.style.display = "none";
}

loadPage();

//////////////////////////////////////////////////////////////////////////////////

// Quesion Background change


qContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.question');
  
    // Guard clause
    if (!clicked) return;
  
    // Remove active classes
    question.forEach(t => {t.style.backgroundColor = ""
   t.style.color = "";
});
  
    // Activate tab
    clicked.style.backgroundColor = "rgb(15, 160, 197)";
    clicked.style.color = "rgb(255, 255, 255)";
    for(let opt of option){
        opt.style.cursor = "pointer"
      }
});

//////////////////////////////////////////////////////////////////////////////////

// SHOW ANSWER IN PLACE HOLDERS
ans1.addEventListener('click', putAnswer1);
ans2.addEventListener('click', putAnswer2);
ans3.addEventListener('click', putAnswer3);
ans4.addEventListener('click', putAnswer4);
ans5.addEventListener('click', putAnswer5);

// FIRST PLACE HOLDER
function putAnswer1(e){
   console.log("HII");

   const clicked = e.target.closest('.option');
   const clicked1 = e.target.closest('.rightMark');
   const filled = clicked.classList.contains('filled');
   // Guard clause
   if (!clicked) return;

   question.forEach(t => {if( t.style.backgroundColor === "rgb(15, 160, 197)" ){
    clicked.innerHTML = t.innerHTML;
    if ( rightAnswers.includes(t.innerHTML) ){
      audio1.play();
      t.style.visibility='hidden';
        right1.style.visibility = "visible"; 
        ans1.classList.add("filled");
        ans1.removeEventListener('click', putAnswer1); 
       
      }
   else if (wrongAnswers.includes(t.innerHTML)){
   
    wrong1.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans1.innerHTML = "&nbsp;"
    wrong1.style.visibility = "hidden"
     }, 1000 );

     t.style.backgroundColor = "" ;
     t.style.color = "" ;
   }
   else{
    wrong1.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans1.innerHTML = "&nbsp;"
    wrong1.style.visibility = "hidden"
     }, 1000 );
     t.style.backgroundColor = "" ;
     t.style.color = "" ;
   }
 

    } 
    
    });

    turnOffWatch ();
}
// SECOND PLACE HOLDER

function putAnswer2(e){
  console.log("HII");

  const clicked = e.target.closest('.option');
  const clicked1 = e.target.closest('.rightMark');
  const filled = clicked.classList.contains('filled');
  // Guard clause
  if (!clicked) return;
  question.forEach(t => {if( t.style.backgroundColor === "rgb(15, 160, 197)" ){
    clicked.innerHTML = t.innerHTML;
    if ( rightAnswers.includes(t.innerHTML) ){
      audio1.play();
      t.style.visibility='hidden';
        right2.style.visibility = "visible"; 
        ans2.classList.add("filled");
        ans2.removeEventListener('click', putAnswer2); 
      }
   else if (wrongAnswers.includes(ans1.innerHTML)){
    wrong2.style.visibility = "visible";
       audio2.play();
       setTimeout(() => {
        ans2.innerHTML = "&nbsp;"
           wrong2.style.visibility = "hidden"
               }, 1000 ); }
               else{
                wrong2.style.visibility = "visible";
                audio2.play();
                setTimeout(() => {
                ans2.innerHTML = "&nbsp;"
                wrong2.style.visibility = "hidden"
                 }, 1000 );
                 t.style.backgroundColor = "" ;
                  t.style.color = "" ;
               }    
              } 
});
    

     turnOffWatch ();
}

//// THIRD PLACE HOLDER

function putAnswer3(e){
  console.log("HII");

  const clicked = e.target.closest('.option');
  const clicked1 = e.target.closest('.rightMark');
  const filled = clicked.classList.contains('filled');
  // Guard clause
  if (!clicked) return;
  question.forEach(t => {if( t.style.backgroundColor === "rgb(15, 160, 197)" ){
    clicked.innerHTML = t.innerHTML;
    if ( rightAnswers.includes(t.innerHTML) ){
      audio1.play();
      t.style.visibility='hidden';
        right3.style.visibility = "visible"; 
        ans3.classList.add("filled");
        ans3.removeEventListener('click', putAnswer3); 
      }
   else if (wrongAnswers.includes(ans1.innerHTML)){
    wrong3.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans3.innerHTML = "&nbsp;"
    wrong3.style.visibility = "hidden"
     }, 1000 );  
     t.style.backgroundColor = "" ;
    t.style.color = "" ;
} 
else{
wrong3.style.visibility = "visible";
audio2.play();
setTimeout(() => {
ans3.innerHTML = "&nbsp;"
wrong3.style.visibility = "hidden"
 }, 1000 );
 t.style.backgroundColor = "" ;
  t.style.color = "" ;
} } 
});
  
turnOffWatch ();
}

////// FOURTH PLACE HOLDER

function putAnswer4(e){
  console.log("HII");

  const clicked = e.target.closest('.option');
  const clicked1 = e.target.closest('.rightMark');
  const filled = clicked.classList.contains('filled');
  // Guard clause
  if (!clicked) return;
  question.forEach(t => {if( t.style.backgroundColor === "rgb(15, 160, 197)" ){
    clicked.innerHTML = t.innerHTML;
    if ( rightAnswers.includes(t.innerHTML) ){
      audio1.play();
      t.style.visibility='hidden';
        right4.style.visibility = "visible"; 
        ans4.classList.add("filled");
        ans4.removeEventListener('click', putAnswer4); 
    }
   else if (wrongAnswers.includes(ans1.innerHTML)){
    wrong4.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans4.innerHTML = "&nbsp;"
    wrong4.style.visibility = "hidden"
     }, 1000 );

     t.style.backgroundColor = "" ;
     t.style.color = "" ;
   }
   else{
    wrong4.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans4.innerHTML = "&nbsp;"
    wrong4.style.visibility = "hidden"
     }, 1000 );
     t.style.backgroundColor = "" ;
     t.style.color = "" ;
   }} 
  });

    
  turnOffWatch ();
}


////// FIFTH PLACE HOLDER

function putAnswer5(e){
  console.log("HII");

  const clicked = e.target.closest('.option');
  const clicked1 = e.target.closest('.rightMark');
  const filled = clicked.classList.contains('filled');
  // Guard clause
  if (!clicked) return;
  question.forEach(t => {if( t.style.backgroundColor === "rgb(15, 160, 197)" ){
    clicked.innerHTML = t.innerHTML;
    if ( rightAnswers.includes(t.innerHTML) ){
      audio1.play();
      t.style.visibility='hidden';
        right5.style.visibility = "visible"; 
        ans5.classList.add("filled");
        ans5.removeEventListener('click', putAnswer5); 
      }
   else if (wrongAnswers.includes(ans1.innerHTML)){
    wrong1.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans5.innerHTML = "&nbsp;"
    wrong5.style.visibility = "hidden"
     }, 1000 );
     t.style.backgroundColor = "" ;
     t.style.color = "" ;
   
   }  else{
    wrong5.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
    ans5.innerHTML = "&nbsp;"
    wrong5.style.visibility = "hidden"
     }, 1000 );
     t.style.backgroundColor = "" ;
  
     t.style.color = "" ;
   } } 
  });
  
  turnOffWatch ();
}


function turnOffWatch (){
  if ( ans1.classList.contains("filled") && ans2.classList.contains("filled")  && ans3.classList.contains("filled") &&
  ans4.classList.contains("filled") && ans5.classList.contains("filled") ){
    watch.classList.add('opacity');
    watch.removeEventListener( ); 
   }
};

turnOffWatch ();

//////////////////////////////////////////////////////////////////////////////////


    
  // POP_UP FUNCTIONALITY


  const openModal = function () {
    modal.classList.remove('hidden');
   
  };
  
  const closeModal = function () {
    modal.classList.add('hidden');
   
  };


for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

//////////////////////////////////////////////////////////////////////////////////

//  WATCH ANSWERS


  watch.addEventListener('click',()=>  {
    for (let k = 0; k < option.length; k++){
      ans1.innerHTML = "eraser";
      ans2.innerHTML = "ruler";
      ans3.innerHTML = "pencil";
      ans4.innerHTML = "book";
      ans5.innerHTML = "pen";


    watch.classList.add('opacity');
    audio1.play();
  // Adding Event Listener Again
  ans1.addEventListener('click', putAnswer1);
  ans2.addEventListener('click', putAnswer2);
  ans3.addEventListener('click', putAnswer3);
  ans4.addEventListener('click', putAnswer4);
  ans5.addEventListener('click', putAnswer5);

 /// Adding Right Mark

 for (let k = 0; k < right.length; k++){
  right[k].style.visibility='visible';}

  //// Adding opacity to wrong answers
    for (let k = 0; k < wrongAns.length; k++){
    wrongAns[k].classList.add('opacity');}

  
  ////// Removing Right Ans
    for (let k = 0; k < rightAns.length; k++){
      rightAns[k].style.visibility='hidden';}
    
}}  );


//////////////////////////////////////////////////////////////////////////////////

// RESTART GAME

restart.addEventListener('click',()=>  {
    for (let k = 0; k < option.length; k++){
      ans1.innerHTML = "&nbsp;";
      ans2.innerHTML = "&nbsp;";
      ans3.innerHTML = "&nbsp;";
      ans4.innerHTML = "&nbsp;";
      ans5.innerHTML = "&nbsp;";


   question.forEach(t => { t.style.backgroundColor = "" ;
   t.style.color = "" ;
   t.style.visibility='visible';
    });

    watch.classList.remove('opacity');
    
   
    // Adding Event Listener Again
    ans1.addEventListener('click', putAnswer1);
    ans2.addEventListener('click', putAnswer2);
    ans3.addEventListener('click', putAnswer3);
    ans4.addEventListener('click', putAnswer4);
    ans5.addEventListener('click', putAnswer5);

    /// Removing Right Mark
   
    for (let k = 0; k < right.length; k++){
      right[k].style.visibility='hidden';}

     // Remove WRONG ANSWERS
    for (let k = 0; k < wrongAns.length; k++){
      wrongAns[k].classList.remove('opacity');}
  
  
     // WRITE ANSWERS
      for (let k = 0; k < rightAns.length; k++){
       rightAns[k].classList.remove('hidden');}

    
}}  );

////////////////////////////////////////////////////////////////////////


const container = document.getElementById('container');
const wrapper = document.getElementById('wrapper');
const contentWidth  = wrapper.clientWidth;
const contentHeight = wrapper.clientHeight;

window.addEventListener("resize", resize);

function resize(){   
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let max = windowWidth >= contentWidth && windowHeight >= contentHeight;

    let scale = Math.min(
        windowWidth / contentWidth, 
        windowHeight / contentHeight 
    );

    container.style.transform = max ? "" :  "scale(" + scale + ")"; 
}

resize();
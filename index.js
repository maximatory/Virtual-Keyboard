// создание документа
const container = document.createElement('div');
container.classList.add('container');
document.body.prepend(container);
// textarea
const textareaBlock = document.createElement('textarea');
textareaBlock.classList.add('textarea');
textareaBlock.disabled = true;
// keyboard__wrap
const keyboardWrap = document.createElement('div');
keyboardWrap.classList.add('keyboard__wrap');
// description
const description = document.createElement('p');
description.classList.add('subtitle');
description.innerHTML = 'Клавиатура создана в операционной системе MacOs <br/> Для переключения языка комбинация: левыe ctrl + alt';
container.append(textareaBlock);
container.append(keyboardWrap);
container.append(description);
keyboardWrap.innerHTML = `
<div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="IntlBackslash">\`</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit1">1</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit2">2</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit3">3</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit4">4</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit5">5</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit6">6</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit7">7</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit8">8</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit9">9</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Digit0">0</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Minus">-</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Equal">=</div>
            <div class="key key__gray_dark key__backspace" id="Backspace">Backspace</div>
            <div class="key key__gray_dark key__tab" id="Tab">Tab</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyQ">q</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyW">w</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyE">e</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyR">r</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyT">t</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyY">y</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyU">u</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyI">i</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyO">o</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyP">p</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="BracketLeft">[</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="BracketRight">]</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' id="Backslash">\\</div>
            <div class="key key__gray_dark key__caps" id="CapsLock">CapsLock</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyA">a</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyS">s</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyD">d</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyF">f</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyG">g</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyH">h</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyJ">j</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyK">k</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyL">l</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="Semicolon">;</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="Quote">'</div>
            <div class="key key__gray_dark key__enter" id="Enter">Enter</div>
            <div class="key key__gray_dark key__shift_left" id="ShiftLeft">Shift</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyZ">z</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyX">x</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyC">c</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyV">v</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyB">b</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyN">n</div>
            <div class="symbol key key__small key__gray" data-name = 'letter' data-lang="language" id="KeyM">m</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="Slash">/</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="Comma">,</div>
            <div class="symbol key key__small key__gray" data-name = 'symbol' data-lang="language" id="Period">.</div>
            <div class="symbol key key__small key__gray_dark key__up key__arrow" id="ArrowUp">▲</div>
            <div class="key key__gray_dark key__shift_right" id="ShiftRight">Shift</div>
            <div class="key key__gray_dark key__ctrl_left" id="ControlLeft">Ctrl</div>
            <div class="key key__small key__gray_dark key__win" id="MetaLeft">Win</div>
            <div class="key key__small key__gray_dark key__alt_left" id="AltLeft">Alt</div>
            <div class="key key__gray key__space" id="Space"></div>
            <div class="symbol key key__small key__gray_dark key__left key__arrow" id="ArrowLeft">◀</div>
            <div class="symbol key key__small key__gray_dark key__down key__arrow" id="ArrowDown">▼</div>
            <div class="symbol key key__small key__gray_dark key__right key__arrow" id="ArrowRight">▶</div>
            <div class="key key__small key__gray_dark key__alt_right" id="AltRight">Alt</div>
`;
const keys = document.querySelectorAll('.key');
const textArea = document.querySelector('.textarea');
let capsLock = 0;
const symbolsArrShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];
const symbolsArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', '\'', '/', ',', '.'];
const symbolsEng = ['`', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '/', ',', '.'];
const symbolsRus = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.'];
const dontTouchSymbols = ['`', '[', ']', ';', '\'', ',', '/', 'ё', 'х', 'ъ', 'ж', 'э', 'б', 'ю'];
const allKeyEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '/', ',', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', '◀', '▼', '▶', 'Alt'];
const allKeyRus = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift', 'Ctrl', 'Win', 'Alt', '', '◀', '▼', '▶', 'Alt'];
const symbols = document.querySelectorAll('.key[data-name = "symbol"]');
const langSymbols = document.querySelectorAll('.key[data-lang = "language"]');
const letters = document.querySelectorAll('.key[data-name="letter"]');
const toushSymbols = document.querySelectorAll('.symbol');
localStorage.getItem('lang');
//? =======================================start page==========================================
const getStartedPage = () => {
   if (localStorage.lang === 'undeiend' || localStorage.lang === 'en') {
      localStorage.lang = 'en'
     for (let i = 0; i < keys.length; i++){
       keys[i].innerHTML = allKeyEn[i]
      }
   } else {
      for (let i = 0; i < keys.length; i++){
         keys[i].innerHTML = allKeyRus[i]
      }
   }
}
getStartedPage()
//? =======================================active keys==========================================
document.addEventListener('keydown', (event) => {
   keys.forEach(el => {
      if (el.id == event.code) {
         el.classList.add('active')
      }
   })
});
document.addEventListener('keyup', (event) => {
   keys.forEach(el => {
      if (el.id == event.code) {
         el.classList.remove('active')
      } 
   })
})
//? =======================================переключение языка==========================================
let ctrlAcrive = 0;
let alrActive = 0;
document.addEventListener('keydown', (event) => {
   if (event.key == 'Control') {
      ctrlAcrive = 1
      getLangTumbler()
      getLangKeys()
   }
})
document.addEventListener('keyup', (event) => {
   if (event.key == 'Control') {
      ctrlAcrive = 0
      getLangTumbler()
   }
})
document.addEventListener('keydown', (event) => {
   if (event.key === 'Alt') {
      alrActive = 1;
      getLangTumbler()
      getLangKeys()
   }
})
document.addEventListener('keyup', (event) => {
   if (event.key === 'Alt') {
      alrActive = 0;
      getLangTumbler()
   }
})

function getLangTumbler() {
   if (alrActive === 1 && ctrlAcrive === 1) {
      if (localStorage.lang === 'en') {
         localStorage.lang = 'rus'
      } else {
         localStorage.lang = 'en'
      }
   }
}
function getLangKeys() {
   if (localStorage.lang === 'rus') {
      for (let i = 0; i < langSymbols.length; i++){
         langSymbols[i].innerHTML = symbolsRus[i]
      }
   }
   if (localStorage.lang === 'en') {
      for (let i = 0; i < langSymbols.length; i++){
         langSymbols[i].innerHTML = symbolsEng[i]
      }
   }
}
//? =======================================   shift   ==========================================
document.addEventListener('keydown', (event) => {
   if (event.key == 'Shift') {

      if (capsLock === 0) {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toUpperCase()
            
         })  
      } else {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toLowerCase();
         })
      }
      if (localStorage.lang === 'rus') {
         for (let i = 0; i < symbols.length; i++){
            if (!dontTouchSymbols.includes(symbolsArr[i])) {
               symbols[i].innerHTML = symbolsArrShift[i]  
            } 
         }
      } else {
         for (let i = 0; i < symbols.length; i++){
               symbols[i].innerHTML = symbolsArrShift[i]  
         }
      }
   }
})
document.addEventListener('keyup', (event) => {
   if (event.key == 'Shift') {
      if (capsLock === 1) {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toUpperCase()
            
         })  
      } else {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toLowerCase();
           
         })
      }
      if (localStorage.lang === 'rus') {
         for (let i = 0; i < symbols.length; i++){
            if (!dontTouchSymbols.includes(symbolsArr[i])) {
               symbols[i].innerHTML = symbolsArr[i] 
            }
         }
      } else {
         for (let i = 0; i < symbols.length; i++){
            symbols[i].innerHTML = symbolsArr[i]
         }
      }
   }
})
document.addEventListener('mousedown', (event) => {
   if (event.target.id == 'ShiftRight' || event.target.id == 'ShiftLeft') {

      if (capsLock === 0) {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toUpperCase()
            
         })  
      } else {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toLowerCase();
         })
      }
      if (localStorage.lang === 'rus') {
         for (let i = 0; i < symbols.length; i++){
            if (!dontTouchSymbols.includes(symbolsArr[i])) {
               symbols[i].innerHTML = symbolsArrShift[i]  
            } 
         }
      } else {
         for (let i = 0; i < symbols.length; i++){
               symbols[i].innerHTML = symbolsArrShift[i]  
         }
      }
   }
})
document.addEventListener('mouseup', (event) => {
   if (event.target.id == 'ShiftRight' || event.target.id == 'ShiftLeft') {
      if (capsLock === 1) {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toUpperCase()
            
         })  
      } else {
         letters.forEach(el => {
            el.innerHTML = el.innerHTML.toLowerCase();
           
         })
      }
      if (localStorage.lang === 'rus') {
         for (let i = 0; i < symbols.length; i++){
            if (!dontTouchSymbols.includes(symbolsArr[i])) {
               symbols[i].innerHTML = symbolsArr[i] 
            }
         }
      } else {
         for (let i = 0; i < symbols.length; i++){
            symbols[i].innerHTML = symbolsArr[i]
         }
      }
   }
})
//? =======================================CapsLock==========================================
document.addEventListener('keydown', (event) => {
   if (event.key == 'CapsLock') {
      capsLock = 1;
      letters.forEach(el => {
         el.innerHTML = el.innerHTML.toUpperCase()
      })
   }
})
document.addEventListener('keyup', (event) => {
   if (event.key == 'CapsLock') {
      capsLock = 0;
      letters.forEach(el => {
         el.innerHTML = el.innerHTML.toLowerCase();
      })
   }
})
let kapsLockMouse = 0
document.addEventListener('click', (event) => {
   if (event.target.id == 'CapsLock' && kapsLockMouse === 0) {
      capsLock = 1;
      letters.forEach(el => {
         el.innerHTML = el.innerHTML.toUpperCase()
      })
      event.target.classList.add('active')
   }
   if(event.target.id == 'CapsLock' && kapsLockMouse === 1){
      capsLock = 0;
      letters.forEach(el => {
         el.innerHTML = el.innerHTML.toLowerCase()
      })
      event.target.classList.remove('active')
   }
})
document.addEventListener('click', (event) => {
   if (event.target.id == 'CapsLock') {
      kapsLockMouse === 0 ? kapsLockMouse = 1 : kapsLockMouse = 0;
   }
})
//? =======================================для особых символов==========================================
document.addEventListener('keydown', (event) => {
   if (event.key == 'Shift' && localStorage.lang == 'rus' && capsLock == 0) { 
      symbols[0].innerHTML = symbols[0].innerHTML.toUpperCase()
      symbols[13].innerHTML = symbols[13].innerHTML.toUpperCase()
      symbols[14].innerHTML = symbols[14].innerHTML.toUpperCase()
      symbols[16].innerHTML = symbols[16].innerHTML.toUpperCase()
      symbols[17].innerHTML = symbols[17].innerHTML.toUpperCase()
      symbols[18].innerHTML = symbols[18].innerHTML.toUpperCase()
      symbols[19].innerHTML = symbols[19].innerHTML.toUpperCase()
   }
   if (event.key == 'Shift' && localStorage.lang == 'rus' && capsLock == 1) { 
      symbols[0].innerHTML = symbols[0].innerHTML.toLowerCase()
      symbols[13].innerHTML = symbols[13].innerHTML.toLowerCase()
      symbols[14].innerHTML = symbols[14].innerHTML.toLowerCase()
      symbols[16].innerHTML = symbols[16].innerHTML.toLowerCase()
      symbols[17].innerHTML = symbols[17].innerHTML.toLowerCase()
      symbols[18].innerHTML = symbols[18].innerHTML.toLowerCase()
      symbols[19].innerHTML = symbols[19].innerHTML.toLowerCase()
   }
})
document.addEventListener('keyup', (event) => {
   if (event.key == 'Shift' && localStorage.lang == 'rus' && capsLock == 0) { 
      symbols[0].innerHTML = symbols[0].innerHTML.toLowerCase()
      symbols[13].innerHTML = symbols[13].innerHTML.toLowerCase()
      symbols[14].innerHTML = symbols[14].innerHTML.toLowerCase()
      symbols[16].innerHTML = symbols[16].innerHTML.toLowerCase()
      symbols[17].innerHTML = symbols[17].innerHTML.toLowerCase()
      symbols[18].innerHTML = symbols[18].innerHTML.toLowerCase()
      symbols[19].innerHTML = symbols[19].innerHTML.toLowerCase()
   }
   if (event.key == 'Shift' && localStorage.lang == 'rus' && capsLock == 1) { 
      symbols[0].innerHTML = symbols[0].innerHTML.toUpperCase()
      symbols[13].innerHTML = symbols[13].innerHTML.toUpperCase()
      symbols[14].innerHTML = symbols[14].innerHTML.toUpperCase()
      symbols[16].innerHTML = symbols[16].innerHTML.toUpperCase()
      symbols[17].innerHTML = symbols[17].innerHTML.toUpperCase()
      symbols[18].innerHTML = symbols[18].innerHTML.toUpperCase()
      symbols[19].innerHTML = symbols[19].innerHTML.toUpperCase()
   }
})
document.addEventListener('keydown', (event) => {
   if (event.key == 'CapsLock' && localStorage.lang == 'rus') {
      symbols[0].innerHTML = symbols[0].innerHTML.toUpperCase()
      symbols[13].innerHTML = symbols[13].innerHTML.toUpperCase()
      symbols[14].innerHTML = symbols[14].innerHTML.toUpperCase()
      symbols[16].innerHTML = symbols[16].innerHTML.toUpperCase()
      symbols[17].innerHTML = symbols[17].innerHTML.toUpperCase()
      symbols[18].innerHTML = symbols[18].innerHTML.toUpperCase()
      symbols[19].innerHTML = symbols[19].innerHTML.toUpperCase()
   }
})
document.addEventListener('keyup', (event) => {
   if (event.key == 'CapsLock' && localStorage.lang == 'rus') {
      symbols[0].innerHTML = symbols[0].innerHTML.toLowerCase()
      symbols[13].innerHTML = symbols[13].innerHTML.toLowerCase()
      symbols[14].innerHTML = symbols[14].innerHTML.toLowerCase()
      symbols[16].innerHTML = symbols[16].innerHTML.toLowerCase()
      symbols[17].innerHTML = symbols[17].innerHTML.toLowerCase()
      symbols[18].innerHTML = symbols[18].innerHTML.toLowerCase()
      symbols[19].innerHTML = symbols[19].innerHTML.toLowerCase()
   }
})
//? =======================================textarea==========================================
// !===========toushSymbols
document.addEventListener('keydown', (event) => {
   toushSymbols.forEach(el => {
      if (el.id == event.code) {
         textArea.innerHTML += el.innerHTML
      }
   })
   if (event.code === 'Enter') {
      textArea.innerHTML = textArea.value + "\n";
   }
   if (event.code === 'Space') {
      textArea.innerHTML += " ";
      event.preventDefault();
   }
   if (event.code === 'Backspace') {
         textArea.innerHTML = textArea.innerHTML.slice(0, -1)
   }
   if (event.code === 'Tab') {
      textArea.innerHTML = textArea.value + "\t";
      event.preventDefault();
   }
})
// !===========clickSymbols
document.addEventListener('click', (event) => {
   keys.forEach(elem => {
      if (event.target == elem) {
         toushSymbols.forEach(el => {
            if (el.id == elem.id) {
               textArea.innerHTML += el.innerHTML
            }
         })
         if (elem.id === 'Enter') {
            textArea.innerHTML = textArea.value + "\n";
         }
         if (elem.id === 'Space') {
            textArea.innerHTML += " ";
            event.preventDefault();
         }
         if (elem.id === 'Backspace') {
               textArea.innerHTML = textArea.innerHTML.slice(0, -1)
         }
         if (elem.id === 'Tab') {
            textArea.innerHTML += "    "
            event.preventDefault();
         }
      }
   })
})
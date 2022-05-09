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
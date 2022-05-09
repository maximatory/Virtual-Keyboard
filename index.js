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
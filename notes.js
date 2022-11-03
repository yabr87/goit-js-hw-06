const el = document.querySelector('.hero__title');
el.document.querySelector; // якщо нічого не знаходить повертає  null
document.querySelectorAll; // якщо нічого не знаходить повертає []

el.textContent = 'text'; // змінює текст в середині єлементу
el.getAtribute('src');

/* Тоже что и */ el.src;

el.setAtribute('src'); //Встановлює значення атрибута для зазначеного елемента. Якщо атрибут уже існує, значення оновлюється; інакше додається новий атрибут із зазначеним іменем і значенням.

el.removeAttribute('src'); // видаляє атрибут
el.hasAttribute('src'); // повертає true или false

// https://www.youtube.com/watch?v=Haq2JIuE6Rg
// 30:50  data атрибуты
// _.debounse -бібліотека lodash. слухач "input" спрацовує після завершення вписування тексту через вказаний час
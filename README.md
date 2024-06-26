#rent-a-campervan app

Цей проект був створений за допомогою
[Create React App](https://github.com/facebook/create-react-app). Для знайомства
і налаштування додаткових можливостей
[звернися до документації](https://facebook.github.io/create-react-app/docs/getting-started).

1. За макетом
   https://www.figma.com/design/fnMWH0eBB7NnoqdAiiKWsQ/Test?node-id=0-1
   реалізовано додаток, що повідомляє про оренду кемпера.
2. На першій сторінці каталогу відображаються 4 оголошення, а решта – після
   натискання кнопки Завантажити більше.
3. Після натискання кнопки у вигляді «серця» на рекламній карті вона додається
   до списку обраного, а колір кнопки відповідно змінюється (фон: #D84343).
4. При оновленні сторінки фіксується кінцевий результат дій користувача. Якщо ви
   додаєте карту до вибраного та оновлюєте сторінку, кнопка залишається в стані
   «обране оголошення» з відповідним кольором.
5. Якщо ви знову натиснете кнопку серця, карту буде видалено зі списку
   вибраного, а колір кнопки зміниться на вихідний.
6. Якщо натиснути кнопку "Показати більше", відкриється модальне вікно з
   детальною інформацією про кемпеї.
7. Модальне вікно закривається клацанням по кнопці у вигляді «хрестика»,
   клацанням по тлі та натисканням клавіші Esc.
8. Модальне вікно містить інформацію про характеристики кемпера та відгуки про
   нього. Інформація про малюнок залежить від стану активної вкладки.
9. Модальне вікно також містить форму для бронювання кемпера, яка складається з
   полів ім'я, адреса електронної пошти, дата бронювання та коментар. Поля Ім'я,
   E-mail та Дата бронювання є обов'язковими для заповнення та перевіряють
   дійсність введених значень.

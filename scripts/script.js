
//Создать в html форму с тремя инпутами (имя, фамилия, возраст). 
//Написать скрипт, который при отправке формы выводит собранные данные в консоль.

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Получаем значения инпутов
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    // Выводим значения в консоль
    console.log('Имя:', firstName);
    console.log('Фамилия:', lastName);
    console.log('Возраст:', age);
});

//Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// Создаём массив для хранения пользователей
const users = [];

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Получаем значения инпутов
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    // Создаём объект пользователя
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    // Добавляем объект пользователя в массив
    users.push(user);

    // Выводим массив пользователей в консоль
    console.log(users);

    // Сбрасываем форму
    event.target.reset();
});
//Реализовать функцию rerender. 
//Эта функция очищает контейнер с карточками и создает множество карточек с пользователями из массива. 
//Настроить rerender при добавлении нового пользователя.

// Создаём массив для хранения пользователей
const users1 = [];

// Функция для обновления отображения карточек пользователей
function rerender() {
    const container = document.getElementById('userCardsContainer');
    container.innerHTML = ''; // Очищаем контейнер

    // Создаём карточки для каждого пользователя
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';

        userCard.innerHTML = `
            <p><strong>Имя:</strong> ${user.firstName}</p>
            <p><strong>Фамилия:</strong> ${user.lastName}</p>
            <p><strong>Возраст:</strong> ${user.age}</p>
        `;

        container.appendChild(userCard);
    });
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Получаем значения инпутов
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    // Создаём объект пользователя
    const user = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    // Добавляем объект пользователя в массив
    users.push(user);

    // Обновляем отображение карточек пользователей
    rerender();

    // Выводим массив пользователей в консоль
    console.log(users);

    // Сбрасываем форму
    event.target.reset();
});

//Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся пользователь по id и вызывался rerender.


// Создаём массив для хранения пользователей
const users2 = [];
let userId = 0; // Переменная для хранения уникального идентификатора пользователя

// Функция для обновления отображения карточек пользователей
function rerender() {
    const container = document.getElementById('userCardsContainer');
    container.innerHTML = ''; // Очищаем контейнер

    // Создаём карточки для каждого пользователя
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        userCard.setAttribute('data-id', user.id);

        userCard.innerHTML = `
            <p><strong>Имя:</strong> ${user.firstName}</p>
            <p><strong>Фамилия:</strong> ${user.lastName}</p>
            <p><strong>Возраст:</strong> ${user.age}</p>
        `;

        // Добавляем обработчик для двойного клика
        userCard.addEventListener('dblclick', function() {
            const userId = parseInt(this.getAttribute('data-id'));
            deleteUser(userId);
        });

        container.appendChild(userCard);
    });
}

// Функция для удаления пользователя из массива по id
function deleteUser(id) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        rerender();
    }
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартное поведение формы

    // Получаем значения инпутов
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;

    // Создаём объект пользователя
    const user = {
        id: userId++, // Уникальный идентификатор
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    // Добавляем объект пользователя в массив
    users.push(user);

    // Обновляем отображение карточек пользователей
    rerender();

    // Выводим массив пользователей в консоль
    console.log(users);

    // Сбрасываем форму
    event.target.reset();
});
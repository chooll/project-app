function getStructDay(day, s1, s2, s3, s4, s5) {
    // Parse schedule; 
    return {
        "name-day": day,
        "list-subject": [s1, s2, s3, s4, s5]
    };
}

function generateSchedule() {
    const schedule = document.getElementById("schedule-list");

    const dayList = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    const getDate = ((day, date) => {
        return `<article class="day-with-subject">
        <div class="date">
            <h3 class="day">` + day + `</h3>
            <p class="month">` + date + `</p>
        </div>`;
    });

    const daySubjectList = ((subject, time) => {
        return `            
        <article class="block-subject">
        <p class="time">` + time + `</p>
        <p class="text">` + subject + `</p>
        </article>`
    });

    for (let i = 0; i != 5; i++) {
        schedule.innerHTML += getDate(dayList[i], "12 Февраля");
        for (let j = 0; j != 4; j++) {
            schedule.innerHTML += daySubjectList("Программирование в Excel", "10:20 12:00");
        }
        schedule.innerHTML += "</article>";
    }
}

function getSubjectOnDay(day) {
    const block = document.getElementById("container-schedule");

    block.innerHTML += `   
    <div class="date">
    <h3 class="day">` + day["name-day"] + `</h3>
    <p class="month">12 февраля</p>
    </div>`

    for (let i = 0; i != day["list-subject"].length - 1; i++) {
        block.innerHTML += `
        <article class="block-subject">
        <p class="time">10:00 12:00</p>
        <p class="text">` + day["list-subject"][i] + `</p>
        </article>`
    }

    block.innerHTML += `<button onclick="window.location.href = 'schedule.html'" class="full-order">
    Посмотреть расписание
    </button>`;

}


function generateNews(amountNews = 0) {
    const newsBlock = document.getElementById("news-block");
    const getNews = ((textNews) => {
        return `
        <article class="news-block">
        <div class="image"></div>
        <p class="text-news">` + textNews + `</p>
        </article>`
    });

    for (let i = 0; i != 5; i++) {
        newsBlock.innerHTML += getNews("В НовГУ прошел парад технологий студентов, который собрал больше 1 000 школьноков");
    }
}

getSubjectOnDay(getStructDay("Понедельник", "Программное решение для бизнеса", "Технология разработки и защиты базы данных", "Теория вероятности", "Теория вероятности"));
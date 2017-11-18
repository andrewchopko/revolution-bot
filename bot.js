const express = require('express');
const Telegraf = require("telegraf");
const app = new Telegraf("430018492:AAHiWOE74uDCBFQyqqnruUTSxeBs16qE0Zw");
const exp = express();

var counter = {
	bot_pidor: 0,
	task_web: 0,
	task_mobile_app: 0,
	task_mobile_game: 0,
	time: 0,
	call_org: 0,
	games: 0
}

let resps = [ "Яна (HR) t.me/yanahata",  
			  "Ендрю (Task Responsible) t.me/Andrewchopko",
			  "Денис (Main Organizer) t.me/den_honcharuk",
			  "Олена (Organizer) t.me/goodfiddler",
			  "Оксана (Organizer) t.me/coffee_drinker",
			  "Дем'ян (Organizer) t.me/sdsvin" ];


var game_responses = ["можливо варто покодити?", "краще випий кави.", "з'їж печивко!", "подумай краще, чи потрібні тобі ігри зараз?", "для чого тобі це, скажи організаторам чи подобається тобі хакатон :)"];


app.hears('hi', ctx => {
	return ctx.reply("Hey!");
	counter.hi++;
	console.log(counter.hi);
});

app.command('bot_pidor@it_revolution17_bot', ctx => {
	counter.bot_pidor++;
	return ctx.replyWithMarkdown(ctx.message.from.username + " pidor!");
});

app.command('task_web@it_revolution17_bot', ctx => {
	counter.task_web++;
	return ctx.replyWithMarkdown("У сучасному світі нас оточує величезна кількість інформації. Кожен день, коли ми намагаємося знайти щось цікаве і актуальне, нам доводиться витрачати багато часу на перегляд контенту для вибірки того, що цікавить нас. У багатьох сферах (кіно, музика, спорт ...) цю проблему можна вирішити використовуючи систему рейтингів. Таким чином Ваше завдання полягає в побудові додатку з детальною інформацією обраної предметної області, в якому є система рейтингу (рейтинг може складатися всіма користувачами вашого ресурсу або ж спеціальною інформацією, яка формується адміном). Основна мета - користувач повинен якомога швидше знайти релевантну інформацію.");
});

app.command('task_mobile_app@it_revolution17_bot', ctx => {
	counter.task_mobile_app++;
	return ctx.replyWithMarkdown("У сучасному світі нас оточує величезна кількість інформації. Кожен день, коли ми намагаємося знайти щось цікаве і актуальне, нам доводиться витрачати багато часу на перегляд контенту для вибірки того, що цікавить нас. У багатьох сферах (кіно, музика, спорт ...) цю проблему можна вирішити використовуючи систему рейтингів. Таким чином Ваше завдання полягає в побудові додатку з детальною інформацією обраної предметної області, в якому є система рейтингу (рейтинг може складатися всіма користувачами вашого ресурсу або ж спеціальною інформацією, яка формується адміном). Основна мета - користувач повинен якомога швидше знайти релевантну інформацію.");
});

app.command('task_mobile_game@it_revolution17_bot', ctx => {
	counter.task_mobile_game++;
	return ctx.replyWithMarkdown("Останніми роками все більшої популярності набуває AR/VR. Підтвердженням тому є підтримка та створення свого ARKit компанією Apple в одному із недавніх оновлення їх операційних систем. Але всі звикли, що при використанні цих технологій AR/VR займає ключову позицію в додатку (чи грі). Отож, ваше завдання розробити гру, в якій використовується технологія AR в нетривіальному для себе позиціонуванні. Проявляйте креативність та фантазію. Пробуйте реалізувати свої самі божевільні ідеї.");
});

app.command('games@it_revolution17_bot', ctx => {
	counter.games++;
	var response = game_responses[Math.floor(Math.random()*game_responses.length)];
	return ctx.reply(ctx.message.from.username + " " + response);
});

app.command('tic_tic_tic', ctx => {
	return ctx.reply(counter);
});

app.command('time@it_revolution17_bot', ctx => {

	let time = Date.now();
	let target_time = new Date(2017, 10, 19, 12, 0);
	counter.time++;

	if (time > target_time){
		return ctx.replyWithMarkdown("Час вичерпано, готуйтесь до презентації :)");	
	} else {
		let time_in_mils = target_time - time;

		return ctx.replyWithMarkdown(msToTime(time_in_mils));
	}
	
});

app.command('call_org@it_revolution17_bot', ctx => {
	counter.call_org++;
	resps.forEach(function(element){
		return ctx.reply(element);
	});
});

app.on('sticker', (ctx) => ctx.reply('👍'))

function msToTime(duration) {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24)
            , days = parseInt((duration/(1000*60*60*24)));

        days = (days < 10) ? "0" + days : days;
        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return days + " днів " + hours + " годин " + minutes + " хвилин " + seconds + " секунд до кінця хакатону";
}

exp.get('/', (req, res) => res.send('Hello World!'));

app.startPolling();
exp.listen(process.env.PORT || 5000, () => console.log("Server on 3000!"));
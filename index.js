const Telegraf = require("telegraf");
const app = new Telegraf("430018492:AAHiWOE74uDCBFQyqqnruUTSxeBs16qE0Zw");

var counter = {
	bot_pidor: 0,
	task_web: 0,
	task_mobile_app: 0,
	task_mobile_game: 0,
	time: 0,
	call_org: 0,
	games: 0
}

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
	return ctx.replyWithMarkdown(ctx.message.from.username + ", скоро буде завдання!");
});

app.command('task_mobile_app@it_revolution17_bot', ctx => {
	counter.task_mobile_app++;
	return ctx.replyWithMarkdown(ctx.message.from.username + ", скоро буде завдання!");
});

app.command('task_mobile_game@it_revolution17_bot', ctx => {
	counter.task_mobile_game++;
	return ctx.replyWithMarkdown(ctx.message.from.username + ", скоро буде завдання!");
});

app.command('games@it_revolution17_bot', ctx => {
	counter.games++;
	return ctx.reply("Список ігор тут...");
});

app.command('tic_tic_tic', ctx => {
	return ctx.reply(counter);
});

app.command('time@it_revolution17_bot', ctx => {

	let time = Date.now();
	let target_time = new Date(2017, 10, 19, 12, 0);
	let time_in_mils = target_time - time;

	counter.time++;

	return ctx.replyWithMarkdown(msToTime(time_in_mils));
});

let resps = [ "Яночка (Головний HR всьої цьої вакханалії) t.me/yanahata",  
			  "Ендрю (Відповідальний за завдання) t.me/Andrewchopko",
			  "Дениско (Головний Організатор) t.me/den_honcharuk",
			  "Оленка (Головний челавек) t.me/goodfiddler",
			  "Оксана (Головний челавек) t.me/coffee_drinker",
			  "Дем'ян (Головний логіст) t.me/sdsvin" ];

app.command('call_org@it_revolution17_bot', ctx => {
	counter.call_org++;
	resps.forEach(function(element){
		return ctx.reply(element);
	});
});

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

app.startPolling();
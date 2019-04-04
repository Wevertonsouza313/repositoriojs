const schedule = require('node-schedule')
 
const tarefa1 = schedule.scheduleJob('*/1 * 3 * * 2', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function (){
    tarefa1.cancel()
    console.log('cancelamento tarefa 1')
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 2
regra.second = 55

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('executando tarefa 2', new date().getSeconds())
})
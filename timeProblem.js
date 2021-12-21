// const inputTime='11:30:45PM';
// const inputTime='12:01:00PM';
const inputTime='12:01:15AM';
// const inputTime='12:30:30AM';
// const inputTime='12:30:00PM';
// const inputTime='01:40:00PM';
// const inputTime='01:40:00AM';
// const inputTime='11:00:00PM';
// const inputTime='11:14:00AM';
// const inputTime='11:15:00AM';
// const inputTime='11:16:00AM';
// const inputTime='12:01:00AM';

console.log('-----------------------------------')
console.log(`--------initial ${inputTime}----------`)
console.log('-----------------------------------')

let [hour,minute,second] = inputTime.slice(0,8).split(':')
let day= inputTime.slice(8,inputTime.length)
console.log(day);
let newHour;
let newMinute;
let newSecond;

console.log(typeof(parseInt(hour)),minute,second)

// adding 45 minute and 45 second with the time
if(parseInt(second)>=15){
    console.log('inside second')
    second=(parseInt(second)+45)-60;
    minute=parseInt(minute)+1;
    if(minute>=15){
        console.log('inside minute')
        minute=(parseInt(minute)+45)-60;
        hour=parseInt(hour)+1
        if(hour>12){
            hour=hour-12;
            if(day=='AM'){
                day='PM';
            }
            else{
                day='AM';
            }
        }
        if(hour>=11){
            hour=parseInt(hour)
            if(day=='AM'){
                day='PM'
            }
            else{
                day='AM'
            }
        }
    }
}
else if(parseInt(minute)>=15){
    console.log('inside outer minute')
    minute=(parseInt(minute)+45)-60;
    hour=parseInt(hour)+1
    if(hour>12){
        hour=hour-12;
        if(day=='AM'){
            day='PM';
        }
        else{
            day='AM';
        }
    }
    if(hour>=11){
        hour=parseInt(hour)
        if(day=='AM'){
            day='PM'
        }
        else{
            day='AM'
        }
    }
}
else if(minute<15 && second<15){
    minute=parseInt(minute)+45;
    second=parseInt(second)+45;
}

console.log('-----------------------------------')
console.log(`--------changed ${hour}:${minute}:${second}${day}----------`)
console.log('-----------------------------------')

// converting the time to military time
if(day=='PM' && hour<=12){
    console.log('ok it is PM')
    if(hour == 12){
        newHour=parseInt(hour)
        newMinute=parseInt(minute)
        newSecond=parseInt(second)
        console.log(`1 PM newhour ${newHour} ${newMinute} ${newSecond}`)
    }
    else if(hour!=12){
        newHour=12+parseInt(hour)
        newMinute=minute
        newSecond=second
        console.log(`2 PM newHour ${newHour} ${newMinute} ${newSecond}`)
    }
}
if(day=='AM' && hour<=12){
    console.log('ok it is AM')
    if(hour == 12){
        newHour='00'
        newMinute=minute
        newSecond=second
        console.log(`3 AM newhour ${newHour} ${newMinute} ${newSecond}`)
    }
    else if(hour!=12 && hour<10){
        newHour='0'+`${00+parseInt(hour)}`
        newMinute=minute
        newSecond=second
        console.log(`4 AM newHour ${newHour} ${newMinute} ${newSecond}`)
    }
    else{
        newHour=00+parseInt(hour)
        newMinute=minute
        newSecond=second
        console.log(`5 AM newHour ${newHour} ${newMinute} ${newSecond}`)
    }
}

console.log(newHour,newMinute,newSecond)

// formatting the time 
if(`${newHour}`.length<2){
    newHour='0'+newHour
    console.log('updating, newHour')
}
if(`${newMinute}`.length<2){
    newMinute='0'+newMinute
}
if(`${newSecond}`.length<2){
    newSecond='0'+newSecond
}
let updatedTime=`${newHour}:${newMinute}:${newSecond}`;
console.log(updatedTime)
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

let [hour,minute,second] = inputTime.slice(0,8).split(':')
let day= inputTime.slice(8,inputTime.length)
let newHour;
let newMinute;
let newSecond;

// adding 45 minute and 45 second with the time
if(parseInt(second)>=15){
    second=(parseInt(second)+45)-60;
    minute=parseInt(minute)+1;
    if(minute>=15){
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

// converting the time to military time
if(day=='PM' && hour<=12){
    if(hour == 12){
        newHour=parseInt(hour)
        newMinute=parseInt(minute)
        newSecond=parseInt(second)
    }
    else if(hour!=12){
        newHour=12+parseInt(hour)
        newMinute=minute
        newSecond=second
    }
}
else if(day=='AM' && hour<=12){
    if(hour == 12){
        newHour='00'
        newMinute=minute
        newSecond=second
    }
    else if(hour!=12 && hour<10){
        newHour='0'+`${00+parseInt(hour)}`
        newMinute=minute
        newSecond=second
    }
    else{
        newHour=00+parseInt(hour)
        newMinute=minute
        newSecond=second
    }
}


// formatting the time 
if(`${newHour}`.length<2){
    newHour='0'+newHour
}
if(`${newMinute}`.length<2){
    newMinute='0'+newMinute
}
if(`${newSecond}`.length<2){
    newSecond='0'+newSecond
}
let updatedTime=`${newHour}:${newMinute}:${newSecond}`;
console.log(updatedTime)
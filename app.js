// import Date from 'data';
var selected = prompt("Choose a month. Enter with first letter capital eg:January");
const display=document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
let date=new Date();
let month=date.getMonth();
try{
    changeToMonth(selected);
}
catch{
    alert("Error with entry");
}
buttons.map( button=>{
        button.addEventListener('click',(e)=>{
            switch(e.target.innerText){
                case 'Next Month':
                    const array = display.innerText.split(" ");
                    let currentMonth=array[0];
                    let currentYear =array[1];
                    display.innerText=nextMonth(currentMonth);
                    if(toNumber(nextMonth(currentMonth))==0){
                        currentYear=parseInt(currentYear)+1;
                    }
                    display.innerText+=" "+currentYear;
                    setDates(toNumber(nextMonth(currentMonth)),currentYear);
                    for(t=0;t<44;t++){
                        document.getElementById(buttons[t].id).style.background="white";
                        document.getElementById(buttons[t].id).style.color="black";
                    }
                    
                    break;
                default:
                    let iD=getId(parseInt(e.target.innerText));
                    console.log(document.getElementById(iD).style.background);
                    if(document.getElementById(iD).style.background=="white"){
                        document.getElementById(iD).style.background="green";
                        document.getElementById(iD).style.color="white";

                    }
                    else if(document.getElementById(iD).style.background=="green"){
                        document.getElementById(iD).style.background="red";
                        document.getElementById(iD).style.color="white";

                    }
                    else if(document.getElementById(iD).style.background=="red"){
                        document.getElementById(iD).style.background="white";
                        document.getElementById(iD).style.color="black";
                    }
            }
        }); 
});

function changeToMonth(month){
    let currentMonth=(month);
    let currentYear="2022";

    if(month=="December"){
        currentYear="2021";
    }
    
    display.innerText=currentMonth;
    if(toNumber((currentMonth))==0){
        currentYear=parseInt(currentYear)+1;
    }
    display.innerText+=" "+currentYear;
    for(t=7;t<44;t++){
        document.getElementById(buttons[t].id).style.background='white';
    }
    setDates(toNumber(currentMonth),currentYear);
    return;
}

function getId(number){
    for(i=0;i<44;i++){
        if(buttons[i].innerText==number){
            return buttons[i].id;
        }
    }
}
//Sun=0 , Mon=1 ,Tues=2 etc...
function getFirst(month,year){
    var Jan=6;//2022 jan starts on sat
    for(i=2022;i<year;i++){
        Jan++;
        Jan=Jan%7;
    }
    var date=Jan;
    let tmp=Jan;
    for(i=0;i<month;i++){
        let holder=getDays(i,year);
        tmp=(holder+tmp)%7;
        date=tmp;
    }
    console.log(date);
    return date;
}
function setDates(month,year){
    let first=getFirst(month,year);
    let days=getDays(month,year);
    var count=1;
    for(i=7;i<days+first+7;i++){
        if(i>=7+first){
            buttons[i].innerText=count;
            count++;
        }
        else{
            buttons[i].innerText="";
        }
    }
    for(i=days+first+7;i<44;i++){
        buttons[i].innerText="";
    }
}

function toNumber(month){
    if(month=='December'){
        return 11;
    }
    else if(month=='January'){
        return 0;
    }
    else if(month=='February'){
        return 1;
    }
    else if(month=='March'){
        return 2;
    }
    else if(month=='April'){
        return 3;
    }
    else if(month=='May'){
        return 4;
    }
    else if(month=='June'){
        return 5;
    }
    else if(month=='July'){
        return 6;
    }
    else if(month=='August'){
        return 7;
    }
    else if(month=='Septmber'){
        return 8;
    }
    else if(month=='October'){
        return 9;
    }
    else if(month=='November'){
        return 10;
    }
}

function toLetter(month){
    if(month==11){
        return 'December';
    }
    else if(month==0){
        return 'January';
    }
    else if(month==1){
        return 'February';
    }
    else if(month==2){
        return 'March';
    }
    else if(month==3){
        return 'April';
    }
    else if(month==4){
        return 'May';
    }
    else if(month==5){
        return 'June';
    }
    else if(month==6){
        return 'July';
    }
    else if(month==7){
        return 'August';
    }
    else if(month==8){
        return 'September';
    }
    else if(month==9){
        return 'October';
    }
    else if(month==10){
        return 'November';
    }
}
function nextMonth(month){
    if(month=='December'){
        return 'January';
    }
    else if(month=='January'){
        return 'February';
    }
    else if(month=='February'){
        return 'March';
    }
    else if(month=='March'){
        return 'April';
    }
    else if(month=='April'){
        return 'May';
    }
    else if(month=='May'){
        return 'June';
    }
    else if(month=='June'){
        return 'July';
    }
    else if(month=='July'){
        return 'August';
    }
    else if(month=='August'){
        return 'Septmber';
    }
    else if(month=='Septmber'){
        return 'October';
    }
    else if(month=='October'){
        return 'November';
    }
    else if(month=='November'){
        return 'December';
    }
}
//Jan=0 Feb=1 etc..
function getDays(month,year){
    if(month==0){
        return 31;
    }
    else if(month==1){
        if(isLeapYear(year)){
            return 29;
        }else{
            return 28;
        }
    }
    else if(month==2){
        return 31;
    }
    else if(month=3){
        return 30;
    }
    else if(month==4){
        return 31;
    }
    else if(month==5){
        return 30;
    }
    else if(month==6){
        return 31;
    }
    else if(month==7){
        return 31;
    }
    else if(month==8){
        return 30;
    }
    else if(month==9){
        return 31;
    }
    else if(month==10){
        return 30;
    }
    else if(month==11){
        return 31;
    }
}

function isLeapYear(year){
    if(year%100==0){
        if(year%4==0){
            return true;
        }
        else{
            return false;
        }
    }
    else if(year%4==0){
        return true;
    }
}

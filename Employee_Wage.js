const IS_Absent = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const Num_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWagearr = new Array();
let empCheck = Math.floor(Math.random()* 10) % 2;
const NUM_OF_WORKING_DAYS = 20;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap= new Map();
let empDailyHrsAndWageArr = new Array();
if(empCheck == IS_Absent){
    console.log("Employee is Absent");
    return;
}
else{
    console.log("Employee is Present");
}

function getWorkingHours(empCheck){
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR ;
}

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < Num_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random()* 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs
    empDailyWageMap.set(totalWorkingDays , calcDailyWage(empHrs))
    empDailyWagearr.push(calcDailyWage(empHrs))
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyHrsAndWageArr.push(
        {
            dayNum: totalWorkingDays,
            dailyHours :empHrs,
            dailyWage: calcDailyWage(empHrs),
            toString(){
                return '\nDay ' + this.dayNum + " => Working Hours is " + this.dailyHours + " And Wage Earned = " + this.dailyWage 
            }
        }
    )
 
}



let totalEmpWage = 0;
function sum(dailwage) {
    totalEmpWage += dailwage;
}

empDailyWagearr.forEach(sum);

console.log("UC7A - Total Days:- " + totalWorkingDays + " Total Hrs " + totalEmpHrs + " Emp Wage " + totalEmpWage);


function totalwages(totalWage , dailwage) {
    return totalWage + dailwage;
}

console.log("UC7A - Emp Wage with Reduce: " + empDailyWagearr.reduce(totalwages , 10));


let dailycntr = 0;
function mapDayWithWage(dailyWage) {
    dailycntr++;
    return dailycntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWagearr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);



function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage Filter When FUlltime Wage Earned");
console.log(fullDayWageArr);

function findFullTimeWage(dailyWage) {
    return dailyWage.includes('160');
}
console.log("UC 7D - First time Full Time wage was earned on day : " + mapDayWithWageArr.find(findFullTimeWage));


function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes('160');
}
console.log("UC 7E - Check All Elements have Full Time Wage : " + fullDayWageArr.every(isAllFullTimeWage));


function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes('80');
}
console.log("UC 7F - Check if Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));



function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("UC 7G - Number of Days Employee Worked : " + empDailyWagearr.reduce(totalDaysWorked, 0));

console.log(empDailyWageMap);
function totalwages(totalWage , dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC8A - EMp Wage Map totalHrs:- " + Array.from(empDailyWageMap.values()).reduce(totalwages , 0));



const findTotal = (totalVal , dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal , 0);
let totalSalary  = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal , 0);

console.log("UC9A - EMp Wage with Arrow: " +  " Total Hours: " + totalHours + " Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach( (value , Key , map ) => {
    if (value == 8) fullWorkingDays.push(Key);
    else if (value == 4) partWorkingDays.push(Key)
    else nonWorkingDays.push(Key);
})
console.log("Full Working Days:- " + fullWorkingDays);
console.log("Part Working Days:- " + partWorkingDays);
console.log("Non Working Days:- " + nonWorkingDays);


console.log("UC10 Showing Daily Hours Worked and Wage Earned " + empDailyHrsAndWageArr)
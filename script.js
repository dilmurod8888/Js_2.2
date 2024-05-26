var age =+prompt("Yoshingizni kiriting")

if (age <= 18 && age>= 0){
    alert("Yoshsiz,  O'qishingiz kerak")
}else if(age <= 50 && age > 18){
    alert("Islashingiz kerak")
}else if(age <= 59 && age > 50){
    alert("Yaqinda pensiyaga chiqasiz")
}else if(age <= 150 && age > 59){
    alert("Pensiyanerga o'xshaysiz, Hali hayot bo'lsangiz:")
}else{
    alert("Nimadir noto'gri ketib qoldi")
}
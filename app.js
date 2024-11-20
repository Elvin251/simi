let deyişen = 16;
// deyişen>15?console.log(deyişen+=1):console.log(deyişen-=1)
let a =+prompt("Birinci ədədi daxil edin:");
let b =+prompt("İkinci ədədi daxil edin:");
let c =+prompt("Üçüncü ədədi daxil edin:");
if (a>b&&a>c ) {
    document.write("birinci eded en boyuk ededdir"  )
    
} else if (b>a&&b>c) {
    document.write("ıkıncı eded en boyuk ededdir"  )
}
else if (c>b&&c>a ) {
    document.write("ucuncu eded en boyuk ededdir"  )
}
else{
    document.write("Error"  ) 
}
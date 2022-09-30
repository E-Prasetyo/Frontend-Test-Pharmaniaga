function ConvertNumberToText(n) {
   if ( n == 0 ){return "";}
   else if ( n <= 19 ){
    const arr =["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", 
                "sembilan", "sepuluh", "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", 
                "tujuh belas", "delapan belas", "sembilan belas"]
    return  arr[n-1]+ " ";
   }
   else if ( n <= 99 )return ConvertNumberToText(Math.floor(n/10)) +"puluh" +" " + ConvertNumberToText(n % 10);
   else if ( n <= 199 ) return "seratus " + ConvertNumberToText(n % 100);
   else if ( n <= 999 ) return ConvertNumberToText(Math.floor(n/100)) + "ratus " + ConvertNumberToText(n % 100);
   else if ( n <= 1999 ) return "seribu " + ConvertNumberToText(n % 1000);
   else if ( n <= 999999 ) return ConvertNumberToText(Math.floor(n/1000)) + "ribu " + ConvertNumberToText(n % 1000);  
}

console.log(ConvertNumberToText(12))
console.log(ConvertNumberToText(2012))
console.log(ConvertNumberToText(999999))

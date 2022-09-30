function ConvertNumberToText(n) {
    if ( n < 0 ){return "Minus " + ConvertNumberToText(-n);}
   else if ( n == 0 ){return "";}
   else if ( n <= 19 ){
    const arr =  ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", 
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
    "Seventeen", "Eighteen", "Nineteen"]
      return  arr[n-1];
   }else if ( n <= 99 ){
    const array =  ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", 
    "Eighty", "Ninety"]

     const result =   array[Math.floor(n/10)-2] + " " + ConvertNumberToText(n % 10);

      return result
   }
   else if ( n <= 199 )
      return "One Hundred " + ConvertNumberToText(n % 100);
   else if ( n <= 999 )
      return ConvertNumberToText(n / 100) + "Hundreds " + ConvertNumberToText(n % 100);
   else if ( n <= 1999 )
      return "One Thousand " + ConvertNumberToText(n % 1000);
   else if ( n <= 999999 )
      return ConvertNumberToText(n / 1000) + "Thousands " + ConvertNumberToText(n % 1000);
   else if ( n <= 1999999 )
      return "One Million " + ConvertNumberToText(n % 1000000);
   else if ( n <= 999999999)
      return ConvertNumberToText(n / 1000000) + "Millions " + ConvertNumberToText(n % 1000000);
   else if ( n <= 1999999999 )
      return "One Billion " + ConvertNumberToText(n % 1000000000);
   else 
      return ConvertNumberToText(n / 1000000000) + "Billions " + NumberToText(n % 1000000000);
    
}


console.log(ConvertNumberToText(12))

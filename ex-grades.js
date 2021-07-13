//Grade Marks
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A


 function myGrading(score) {
     var gscore;

     switch(true) {
       case (score <= 100 && score >= 90):
          gscore = 'A';
           break;
       case (score <= 89 && score >= 80):
           gscore = 'B';
            break;
       case (score <= 79 && score >= 70):
           gscore = 'C';
            break;
          case (score <= 69 && score >= 60):
           gscore = 'D';
            break;
       case (score <= 59 && score >= 1):
           gscore = 'F';
           break;
  
     }
  
     return gscore;
   };
  
   console.log(myGrading(91));
   console.log(myGrading(75));
   console.log(myGrading(100));
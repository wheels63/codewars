// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/javascript

class SmallestIntegerFinder {
    findSmallestInt(args) {
      let sortedArgs = args.sort( (a,b) => {
          if (a>b) {
              return 1
          } else if (a < b) {
              return -1
          } else {
              return 0
          }
      });
      return sortedArgs[0]
      
  //     return args.sort()[0]
    }
  }
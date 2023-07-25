class SmallestIntegerFinder {
    findSmallestInt(args) {
      let small = args[0];
      for(let i = 1; i < args.length; i++) {
        if(args[i] < small) {
          small=args[i];
        }
      }
      return small;
    }
  }
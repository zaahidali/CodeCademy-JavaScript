class Media{
  constructor(title){
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title(){
    return this._title;
  }
  get isCheckedOut(){
    return this._isCheckedOut;
  }
  get ratings(){
    return this._ratings;
  }
  
  set isCheckedOut(book){
    this._book = book;
  }
  toggleCheckOutStatus (){
    this._isCheckedOut = !this._isCheckedOut; 
  }
  getAverageRating(){
    let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
    return ratingsSum/ this.ratings.length;
  }
  addRatings(value){
    this.ratings.push(value);
  }
}

class Book extends Media{
  constructor(author,title,pages){
    super(title);
    this._pages = pages;
    this._author = author;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }
}

class Movie extends Media{
  constructor(director ,title,runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;        
  }
  get director(){
    return this._director;
  } 
  get runTime(){
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything',544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut );
historyOfEverything.addRatings(4);
historyOfEverything.addRatings(5);
historyOfEverything.addRatings(5);
console.log(historyOfEverything.getAverageRating());
const speed = new Movie('Jan de Bont','Speed',116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut)
speed.addRatings(1);
speed.addRatings(1);
speed.addRatings(5);
console.log(speed.getAverageRating());
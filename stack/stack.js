const Stack = function(){
  this.count = 0;
  this.storage = {};
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  }
  this.pop = () => {
    if(this.count === 0){
      return undefined
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  this.getCount = ()=>{
    return this.count;
  }
  this.getStorage = ()=>{
    return this.storage;
  }
  this.peek = () => {
    return this.storage[this.count - 1]
  }
}

let books = new Stack();
books.push(10);
books.push(12);
books.push(24);
books.pop()
books.push(34);
books.push(1001);
books.pop()
books.push(904);

console.log(books.peek());

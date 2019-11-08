const Queue = function(){
  let collection = []
  this.print = () =>{
    console.log(collection)
  }
  this.enqueue = (val) => {
    collection.push(val)
  }
  this.dequeue = () =>{
    return collection.shift()
  }

  this.front = () => {
    return collection[0]
  }
  this.isEmpty = () => {
    return collection.lenght === 0
  }

  this.size = () => {
    return collection.lenght
  }

}

let queue = new Queue();
queue.enqueue("Luis");
queue.enqueue("Jhon");
queue.enqueue("Peter");
queue.enqueue("Jhon II");
queue.enqueue("Fernando");
queue.dequeue();

queue.print();

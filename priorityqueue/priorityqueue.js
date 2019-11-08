const PriorityQueue = function(){
  this.collection = []
  this.print = () =>{
    console.log(this.collection)
  }
  this.enqueue = (val) => {
    if(this.collection.length === 0){
      this.collection.push(val);
    }else{
      let added = false;
      for(let i = 0; i < this.collection.length; i++){
        if(val[1] < this.collection[i][1]){
          this.collection.splice(i,0,val);
          added = true;
          break;
        }
      }
      if(!added){
        this.collection.push(val);
      }
    }
  }

  this.dequeue = () =>{
    return this.collection.shift()
  }

  this.front = () => {
    return this.collection[0]
  }
  this.isEmpty = () => {
    return this.collection.length === 0
  }

  this.size = () => {
    return this.collection.length
  }

}

let queue = new PriorityQueue();
queue.enqueue(["Luis",3]);
queue.enqueue(["Jhon",2]);
queue.enqueue(["Maria",2]);
queue.enqueue(["Redia",4]);
queue.enqueue(["William",1]);
queue.enqueue(["Joe",2]);
queue.dequeue()

queue.print();

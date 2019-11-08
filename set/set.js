const Set = function(){
  let collection = [];
  this.has = (val) => { 
    return (collection.indexOf(val) !== -1);
  }
  this.values = () => {
    return collection;
  }
  this.add = (val) => { 
    if(collection.indexOf(val) == -1){
      collection.push(val);
      return true
    }else{
      return false
    }
  }
  this.remove = (val) => {
    if(this.has(val)){
      index = collection.indexOf(val);
      collection.splice(index,1);
    }else{
      return false
    }
  }
  this.size = (val) => { 
    return collection.length;
  }
  this.union = (otherSet)=>{
    let resultSet = new Set();
    let firstCollection = this.values();
    let secondCollection = otherSet.values();
    firstCollection.forEach((val)=>{
      resultSet.add(val)
    })
    secondCollection.forEach((val)=>{
      resultSet.add(val)
    })
    return resultSet;
  }
  this.intersection = (otherSet)=>{
    let resultSet = new Set();
    let firstCollection = this.values();
    firstCollection.forEach((val)=>{
      if(otherSet.has(val)){
        resultSet.add(val)
      }
    })
    return resultSet;
  }

  this.difference = (otherSet)=>{
    let resultSet = new Set();
    let firstCollection = this.values();
    firstCollection.forEach((val)=>{
      if(!otherSet.has(val)){
        resultSet.add(val)
      }
    })
    return resultSet;
  }

  this.subset = (otherSet)=>{
    let resultSet = new Set();
    let firstCollection = this.values();
    return firstCollection.every((val)=>{
      return otherSet.has(val)
    })
    return resultSet;
  }
}

let box1 = new Set();
let box2 = new Set();
box1.add(10);
box1.add(20);
box1.add(10);

box2.add(40);
box2.add(20);
box2.add(30);
box2.add(50);

let isSubset = box1.subset(box2)
console.log(isSubset);

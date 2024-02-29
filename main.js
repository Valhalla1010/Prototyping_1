

class Iterator{
    constructor(arr) {
        this.f_iter = 0;
        this.l_iter = arr.length;
        this.arr = arr;
    }
    hasNext(){ // return true if the iteration has more element
        return this.f_iter < this.l_iter;
    }
    next(){ // return next element in the iteration
        return this.arr[this.f_iter++];
    }

}


Array.prototype.iterator = function (){
    return new it(this);
}

arr_a = [1, 2, 3, 4 , 5];
arr_b = [ "a", "b", "c", "d"];

it1 = new Iterator(arr_a);
it2 = new Iterator(arr_b);


while(it1.hasNext()){
    console.log(it1.next());
}

while(it2.hasNext()){
    console.log(it2.next());
}
class Human{
    constructor(name,weight){
        this.name=name;
        this.gender=true;
        this.weight=weight;
    }

    isMale(){
        return this.gender;
    }

    setGender(gender){
        this.gender=gender;
    }

    checkApple(apple){
        return apple.isEmpty();
    }

    eat(apple){
        if(!this.checkApple(apple)){
            apple.decrease();
            this.weight++;
           
        } 
        else{
            this.say('full');
            document.write(this.name+' say '+this.message);
            clearInterval(t);
        }  

        console.log(this.getWeight());
    }

    say(message){
        this.message=message;
    }


    getName(){
        return this.name;
    }

    setName(name){
        this.name=name;
    }
    
    getWeight(){
        return this.weight;
    }

    setWeight(weight){
        this.weight=weight;
    }
}
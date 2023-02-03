const person = {
    init (fullname,money,sleepmethod,heqlthrate)
    {
        this.fullname=fullname;
        this.money=money;
        this.sleepmethod=sleepmethod;
        this.heqlthrate=heqlthrate;
        sleep= function(houres)
        {
            if(houres<=7){
                this.sleepmethod="happy"
            }
            else if(houres>7){
                this.sleepmethod="tired"
            }
            else{
                this.sleepmethod="lazy"
            }
            return this.sleepmethod;
        }
        eat = function(meal)
        {
            if(meal==3){
                this.heqlthrate=100;
            }
            else if (meal==2){
                this.heqlthrate=75;
            }
            else{
                this.heqlthrate=50;
            }
            return this.heqlthrate;
        }
    
        Buy = function(item)
            {
                for(i=0;i<item;i++){
                    let bo = item*10;
                    this.money=this.money-bo;
                }
                return this.money;
            }
        
    }
    
}

        const ahmed = Object.create(person);
ahmed.init("ahmed",90,"lazy",90);
console.log(ahmed);
// console.log(ahmed.sleep());
// console.log(ahmed.init.Buy(3));
// console.log(ahmed.init.eat(1));
import Ember from 'ember';

const { Object } = Ember;

export default Object.create({
    fruitName: "",
    init(){
        this.set("fruitName", "Apple");
        console.log("init");
    }
});

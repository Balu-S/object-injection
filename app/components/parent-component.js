import Ember from 'ember';
import GlobalObject from '../utils/global-objects'

export default Ember.Component.extend({
    GlobalObject: GlobalObject,
    initialisation: function (){
        GlobalObject.set("fruitName", "Guava New");
        // GlobalObject.destroy();
        console.log(GlobalObject);
    }.on("init")
});

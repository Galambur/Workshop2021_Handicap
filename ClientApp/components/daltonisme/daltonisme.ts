import Vue from "vue";
import { Component } from "vue-property-decorator";




@Component
export default class DaltonismeComponent extends Vue {
    public visions : Array<string> = new Array('Normale', 'Deutéranomalie', 'Protanomalie', 'Tritanomalie');
    public visionPlus : string = "Normale";
    public visionMoins : string = "Protanomalie";
    public visionActuel : string = "Deutéranomalie";

    public definition : number = 1;

    
    
    public changeDef(){
        let defLast = this.definition;
        this.definition++;
        if(this.definition >= this.visions.length){
            this.definition = 0;
        }
        this.visionMoins = this.visions[defLast];
        
        let defPlus = this.definition + 1;
        if(defPlus >= this.visions.length){
            defPlus = 0;
        }
        this.visionPlus = this.visions[defPlus];
        this.visionActuel = this.visions[this.definition];
        
    }
    
    public changeDown(){
        let defLast = this.definition;
        this.definition--;
        if(this.definition < 0 ){
            this.definition = this.visions.length-1;
        }
        this.visionPlus = this.visions[defLast];
        
        let defMoins = this.definition - 1;
        if(defMoins < 0){
            defMoins = this.visions.length-1;
        }
        this.visionMoins = this.visions[defMoins];
        this.visionActuel = this.visions[this.definition];
    }
}




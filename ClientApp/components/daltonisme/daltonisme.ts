import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class DaltonismeComponent extends Vue {
    
    public definition : number = 1;
    

    public changeDef(){
        this.definition += 1;
        if(this.definition > 3){
            this.definition = 0;
        }
    }
}


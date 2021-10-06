import Vue from "vue";
import { Component } from "vue-property-decorator";


@Component
export default class DaltonismeComponent extends Vue {
    
    private _definition : number = 0;
    public get definition() : number {
        return this._definition;
    }
    public set definition(v : number) {
        if(this._definition <= 1){
            this._definition = v;
        } else {
            this._definition = 0;
        }
        
    }

    public changeDef(){
        this.definition += 1;
    }
}


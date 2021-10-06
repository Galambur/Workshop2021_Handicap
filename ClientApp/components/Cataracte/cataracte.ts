import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class CataracteComponent extends Vue {
    public definition : boolean = false;

    public changeDef(){
        this.definition = !this.definition;
    }
}

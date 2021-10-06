import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class HomeComponent extends Vue {
    public identifiant:string="";
    public password:string="";
    public verify_menu() {
        console.log(this.identifiant + this.password);
        
        }
    }

import { LightningElement, track, api } from "lwc";

export default class LightningComponent extends LightningElement {
  @api recordId;
  boxClass(x) {
    // return `color:white ; position: absolute; background-color:white; top:${this
    //   .top - 280}px; left:${this.left}px`;
    x.style.color = "white";
  }

  //   highlight(evt) {
  //     evt.stopPropagation();
  //     evt.target.classList.toggle("highlight");
  //     this.unselect(evt.target);
  //     this.selected = evt.target;
  //   }

  //   unselect(target) {
  //     if (this.selected && this.selected !== target) {
  //       this.selected.classList.remove("highlight");
  //       this.selected = null;
  //     }
  //   }
}

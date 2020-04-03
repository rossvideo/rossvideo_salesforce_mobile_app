import { LightningElement, track } from "lwc";

export default class HelloWorld extends LightningElement {
  @track activeSectionMessage = ["A", "C"];

  handleToggleSection(event) {
    this.activeSectionMessage =
      "Open section name:  " + event.detail.openSections;
  }

  handleSetActiveSectionC() {
    const accordion = this.template.querySelector(".example-accordion");

    accordion.activeSectionName = "C";
  }

  test() {
    alert("test");
  }

  highlight(evt) {
    evt.target.classList.toggle("highlight");
  }
}

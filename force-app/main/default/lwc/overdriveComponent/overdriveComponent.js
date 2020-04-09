import { LightningElement, track } from "lwc";
import fetchDataHelper from "./fetchDataHelper";

const columns = [{ label: "Product Family", fieldName: "Family" }];

export default class overdriveComponent extends LightningElement {
  @track data = [];
  @track columns = columns;

  // eslint-disable-next-line @lwc/lwc/no-async-await
  async connectedCallback() {
    const data = await fetchDataHelper({ amountOfRecords: 100 });
    this.data = data;
  }
}

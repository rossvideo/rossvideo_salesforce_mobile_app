const recordMetadata = {
  name: "Family"
};

export default function fetchDataHelper({ amountOfRecords }) {
  return fetch(
    "https://rossvideo--staging.lightning.force.com/lightning/r/a8nP00000008QzkIAE/related/Products__r/view",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        amountOfRecords,
        recordMetadata
      })
    }
  ).then(response => response.json());
}

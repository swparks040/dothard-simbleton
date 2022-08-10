import { getBusinesses } from "./database.js"

export const businessList = () => {
  const businessArray = getBusinesses()
  let businessListHTML = "<h1>Businesses</h1>"

  businessArray.forEach(
      (businessObject) => {
            businessListHTML += `
                <section class="businesses">
                    <h2 class="business__name">${businessObject.companyName}</h2>
                    <div class="business__address">
                        ${businessObject.addressFullStreet}<br>                       
                        ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<hr>
                    </div>
                </section>
            `
      }
  )
  return businessListHTML
}
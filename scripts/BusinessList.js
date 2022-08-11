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


document
.querySelector("#search")
.addEventListener(
    // Event is NAMED "keypress" on line 28
    "keypress",
    (keyPressEvent) => {

        const companySearchResultArticle = document.querySelector(".foundBusinesses")
        
        if (keyPressEvent.charCode === 13) {
            
            let businesses = getBusinesses()
            
            const foundBusiness = businesses.find((business) => {
                if (business.companyName.includes(keyPressEvent.target.value)) {
                    return true
            }
        }
    )
   
        companySearchResultArticle.innerHTML = `
            <section class="businesses">
                <h2>Found Businesses</h2>
                <h2 class="business__name">${foundBusiness.companyName}</h2>
                <div class="business__address">
                    ${foundBusiness.addressFullStreet}<br>                       
                    ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}<hr>
                </div>
            </section>
        `
                }
        });
import { getBusinesses } from "./database.js"

let businesses = getBusinesses()

const manufacturingBusinesses = (business) => {
    if (business.companyIndustry === "Manufacturing") {
        return true
    }
    return false
}

export const manufacturingBusinessesList = () => {
    const filteredForManufacturing = businesses.filter(manufacturingBusinesses)
    return filteredForManufacturing
}

let filteredForManufacturing = manufacturingBusinessesList()

export const manufacturingBusinessList = () => {
    const manufacturingBusinessArray = filteredForManufacturing
    let manufacturingBusinessesListHTML = ""
  
    manufacturingBusinessArray.forEach(
        (businessObject) => {
            manufacturingBusinessesListHTML += `
                  <section class="businesses--manufacturing">
                      <h2 class="business__name">${businessObject.companyName}</h2>
                      <div class="business__address">
                          ${businessObject.addressFullStreet}<br>                       
                          ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<hr>
                      </div>
                  </section>
              `
        }
    )
    return manufacturingBusinessesListHTML
  }
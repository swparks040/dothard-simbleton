import { getBusinesses } from "./database.js"

let businesses = getBusinesses()

const newYorkBusinesses = (business) => {
    if (business.addressStateCode === "NY") {
        return true
    }
    return false
}

export const newYorkBusinessesList = () => {
    const filteredForNY = businesses.filter(newYorkBusinesses)
    return filteredForNY
}

let filteredForNY = newYorkBusinessesList()

export const NYbusinessList = () => {
    const NYbusinessArray = filteredForNY
    let NYbusinessListHTML = ""
  
    NYbusinessArray.forEach(
        (businessObject) => {
              NYbusinessListHTML += `
                  <section class="businesses--newYork">
                      <h2 class="business__name">${businessObject.companyName}</h2>
                      <div class="business__address">
                          ${businessObject.addressFullStreet}<br>                       
                          ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<hr>
                      </div>
                  </section>
              `
        }
    )
    return NYbusinessListHTML
  }
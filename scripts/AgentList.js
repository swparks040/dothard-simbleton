import { getBusinesses } from "./database.js"

let businesses = getBusinesses()

const onlyAgents = (business) => {
//    for (const business of businesses) {
        if (business.purchasingAgent) {
            return true
        }
        return false
}
//}
export const purchasingAgentsList = () => {
    const filteredForAgents = businesses.filter(onlyAgents)
    return filteredForAgents
}

let filteredForAgents = purchasingAgentsList()

export const purchasingAgentList = () => {
    const agentBusinessArray = filteredForAgents
    let agentBusinessListHTML = ""
  
    agentBusinessArray.forEach(
        (businessObject) => {
              agentBusinessListHTML += `
                  <section class="agents">
                      <h3 class="agent__name">${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}</h3>
                      <h3 class="agent__business_info">
                          ${businessObject.companyName}<br> 
                          ${businessObject.phoneWork}<hr>
                      </h3>
                  </section>
              `
        }
    )
    return agentBusinessListHTML
  }
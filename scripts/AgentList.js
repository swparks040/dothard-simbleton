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

document
.querySelector("#search")
.addEventListener(
    // Event is NAMED "keypress" 
    "keypress",
    (keyPressEvent) => {

        const agentSearchResultArticle = document.querySelector(".foundAgents")
        
        if (keyPressEvent.charCode === 13) {
            
            let businesses = getBusinesses()
            
            const foundAgent = businesses.find((business) => {
                if (business.purchasingAgent.nameFirst.includes(keyPressEvent.target.value)) {
                    return true
            }
        }
    )
   
        agentSearchResultArticle.innerHTML = `
                  <section class="agents">
                  <h2>Found Agents</h2>
                      <h3 class="agent__name">${foundAgent.purchasingAgent.nameFirst} ${foundAgent.purchasingAgent.nameLast}</h3>
                      <h3 class="agent__business_info">
                          ${foundAgent.companyName}<br> 
                          ${foundAgent.phoneWork}<hr>
                      </h3>
                  </section>
              `
                }
        });
        
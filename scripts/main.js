import { businessList } from "./BusinessList.js"
import { NYbusinessList } from "./NewYorkBusinesses.js"
import { manufacturingBusinessList } from "./ManufacturingBusinesses.js"
import { purchasingAgentList } from "./AgentList.js"
const contentTarget = document.querySelector("#content")

const renderHTML = () => {
  contentTarget.innerHTML = `

    <article class="foundBusinesses">

    </article>

    <article class="foundAgents">

    </article>

    <article class="businesses">
        <h2>All Businesses</h2>
        ${businessList()}
    </article>
    <article class="businesses--newYork">
        <h2>New York Businesses</h2>
        ${NYbusinessList()}
    </article>
    <article class="businesses--manufacturing">
        <h2>Manufacturing Businesses</h2>
        ${manufacturingBusinessList()}
    </article>
    <article class="agents">
        <h2>Purchasing Agents</h2>
        ${purchasingAgentList()}
    </article>
    `
}

renderHTML()
import Glue from "@glue42/desktop"
import glue42config from "./glue42config"

(() => {
    const intent = "ViewChart"

    let element

    function component() {
        element = document.createElement('div')
        element.innerHTML = 'Waiting for intents...'
        return element
    }

    window.addEventListener("DOMContentLoaded", initializeApp)
    
    async function initializeApp() {
        const glue = await Glue(glue42config);
        console.log(`Glue42 initialized successfully!\nGlue42 version: ${glue.version}`)
        glue.intents.addIntentListener(intent, updateContext)
        document.body.appendChild(component())        
    }

    function updateContext(newContext) {
        const ticker = newContext.data.id.ticker
        const p = document.createElement('p')
        p.innerHTML = ` - received intent: ${ticker}`
        element.appendChild(p)
    }
})()

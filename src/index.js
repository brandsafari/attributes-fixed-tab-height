window.Webflow ||= []
window.Webflow.push(() => {
   // Define elements
   const tabsElement = document.querySelector("[brs-fixedtabs-element='tabs']")
   const tabsContent = tabsElement.querySelector(".w-tab-content")
   const tabPanes = Array.from(tabsContent.querySelectorAll(".w-tab-pane"))

   // Find highest tab
   let maxTabHeight = 0
   tabPanes.forEach((tp) => {
      tp.style.display = "block"
      const { height } = tp.getBoundingClientRect()
      if (height > maxTabHeight) maxTabHeight = height
      tp.style.display = ""
   })

   // Set tab content height to height of highest tab
   tabsContent.style.height = maxTabHeight + "px"
})

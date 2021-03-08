document.querySelector("#comments").hidden = true
document.querySelector("#respond").hidden = true
document.querySelectorAll("a[href*='/#comments']").forEach(element => element.hidden=true)

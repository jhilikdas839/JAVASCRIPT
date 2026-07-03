const parent = document.querySelector(".parent")
const OuterToster = (config) => {
    return function InnerToster(str) {
        let div = document.createElement("div");
        div.textContent = str;
        div.className = `w-fit  ${config.Theme === "Dark" ? "bg-blue-600 text-white" : "bg-white text-blue-900 "} p-2 rounded shadow-lg`
        parent.appendChild(div)

        //   dynamic place change throught the js 
        parent.classList.remove(
            "left-4",
            "right-4",
            "top-4",
            "bottom-4",
        )

        parent.classList.add(
            config.positionX === "right" ? "right-4" : "left-4",
            config.positionY === "top" ? "top-4" : "bottom-4"

        )

        // Remove the div in every 3 seconds Feature 
        setTimeout(() => {
            parent.removeChild(div)
        }, config.Duration * 1000);
    }
}

const Toster = OuterToster({
    positionX: "left",
    positionY: "top",
    Theme: "Dark",
    Duration: 3
})
Toster("Download finish")
setTimeout(() => {
    Toster("Download finish2")
}, 2000)
function getScroll() {
    let scrollAmount = (
        document.documentElement.scrollTop || document.body.scrollTop
    )
    let maxScroll = (
        document.documentElement.scrollHeight || document.body.scrollHeight
    )
    let scroll = (scrollAmount / maxScroll)

    let footer = document.getElementById("scrollFooter")
    let redValue = 255 - (255 * scroll)
    let blueValue = 255 * scroll
    footer.style.backgroundColor = `rgb(${redValue}, 0, ${blueValue})`
}

document.addEventListener("DOMContentLoaded", () => {
    addEventListener("scroll", () => {getScroll()})
})
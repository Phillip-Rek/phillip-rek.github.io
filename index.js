const playlistUsageInfoElement = document.createElement("div");

const playlistElement = document.getElementById("playlist-element");
const { x, width } = playlistElement.getBoundingClientRect();

playlistUsageInfoElement.id = "playlist-usage-info"
playlistUsageInfoElement.style.left = x + 20 + "px"
const playlistUsageInfo = document.createElement("p")
playlistUsageInfo.style.textAlign = "center";
playlistUsageInfo.style.color = "#eeef";
playlistUsageInfo.innerHTML = "The playlist is empty! Drop a video to the playlist"

playlistUsageInfoElement.appendChild(playlistUsageInfo)
document.body.appendChild(playlistUsageInfoElement);

setTimeout(() => { playlistUsageInfoElement.remove() }, 3500)

// setInterval(() => {
//     if (document.getElementsByTagName("video").item(0).paused) {
//         document.body.appendChild(playlistUsageInfoElement);

//         setTimeout(() => { playlistUsageInfoElement.remove() }, 3500)
//     }
// }, 10000)
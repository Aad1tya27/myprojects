let currentSong = new Audio()
let currentSongtags;
let mainfolderurl = window.location.href.replace("index.html", "")
// console.log();

async function playNext(currentSongtags) {
    // console.log(songtags);
    let songno = 1;
    for (key in currentSongtags) {
        if (Object.hasOwnProperty.call(currentSongtags, key)) {
            const element = currentSongtags[key];
            // console.log(element.href + " " + currentSong.src);

            if (currentSong.src == element.href) {
                songno = key
                break
            }
        }
    }
    let flag = 0
    while (songno != (currentSongtags.length - 1)) {
        if (currentSongtags[(parseInt(songno) + 1)].href.endsWith(".mp3")) {
            flag = 1
            currentSong.pause()

            currentSong = document.createElement("audio")
            currentSong.src = currentSongtags[(parseInt(songno) + 1)].href
            currentSong.play()
            // currentSong.preload="auto"
            // console.log(currentSong.src);

            const { artistname, songname } = extractArtistAndSong(currentSong.src);
            // console.log(artistname + " "+ songname);
            let photo = currentSong.src.replace(encodeURI(artistname + " - " + songname + ".mp3"), "")
            console.log(photo);
            photo = photo + songname + ".png"
            photo = encodeURI(photo)
            document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"
            songInfo(songname, artistname, photo)
            break
        }
        songno++
    }

    if (flag == 0) {
        document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "play.svg"
        currentSong.currentTime = currentSong.duration
    }

}


async function playPrev(currentSongtags) {
    // console.log(songtags);
    let songno = 1;
    let key = 1;
    for (key in currentSongtags) {
        if (Object.hasOwnProperty.call(currentSongtags, key)) {
            const element = currentSongtags[key];
            // console.log(element.href + " " + currentSong.src);

            if (currentSong.src == element.href) {
                songno = key
                break
            }
        }
    }
    let flag = 0
    while (songno > 1) {
        if (currentSongtags[(parseInt(songno) - 1)].href.endsWith(".mp3")) {
            flag = 1
            currentSong.pause()

            currentSong = document.createElement("audio")
            currentSong.src = currentSongtags[(parseInt(songno) - 1)].href
            currentSong.play()
            // currentSong.preload="auto"
            // console.log(currentSong.src);

            const { artistname, songname } = extractArtistAndSong(currentSong.src);
            // console.log(artistname + " "+ songname);
            let photo = currentSong.src.replace(encodeURI(artistname + " - " + songname + ".mp3"), "")
            photo = photo + songname + ".png"
            photo = encodeURI(photo)
            console.log(photo);
            document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"
            songInfo(songname, artistname, photo)
            break
        }
        songno--
    }

    if (flag == 0) {
        // document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "play.svg"
        currentSong.currentTime = 0
    }

}


function extractArtistAndSong(link) {
    // Split the link by '/'
    // const parts = link.split('/');

    // // Extract the artist and song part
    // let artistAndSongPart = parts[parts.length - 1];

    // artistAndSongPart = decodeURIComponent(artistAndSongPart)
    // // Split the artist and song part by ' - '
    // const [artist, songWithExtension] = artistAndSongPart.split(' - ');

    // // Remove the file extension from the song name
    console.log(decodeURIComponent(link).split("/")[decodeURIComponent(link).split("/").length - 1].split(" - "));
    const [artist, songWithExtension] = decodeURIComponent(link).split("/")[decodeURIComponent(link).split("/").length - 1].split(" - ")
    const song = (songWithExtension.split('.'))[0];


    return { artistname: artist, songname: song };
}

function convertSecondsToMinutesAndSeconds(seconds) {
    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = Math.floor(seconds % 60);
    var formattedTime = minutes + ":" + ("0" + remainingSeconds).slice(-2);
    return formattedTime;
}

function cardTopPlaylist(playlistname, thumbnail) {
    let card = document.createElement("div")
    card.classList.add("playlist")
    card.classList.add("cursor-hv")
    card.classList.add("songs-page-link")
    card.innerHTML = `<div class="image"><img src=${thumbnail} alt=""></div>
    <div class="content">
        <div class="playlistname">${playlistname}</div>
    </div>`
    document.querySelector(".topplaylists").append(card)
}

function cardMadeForU(playlistname, thumbnail, about) {
    let card = document.createElement("div")
    card.classList.add("playlist")
    card.classList.add("cursor-hv")
    card.classList.add("songs-page-link")
    card.innerHTML = `<img src=${thumbnail} alt="">
    <div class="playlistname">${playlistname}</div>
    <div class="intro">${about}</div>`
    document.querySelector(".madeforyou").append(card)
    // console.log(thumbnail)

}

function cardLibrary(songname, artist, thumbnail) {
    let card = document.createElement("div")
    card.classList.add("card")
    card.classList.add("songs-hv")
    card.innerHTML = `<div class="image"><img src=${thumbnail} alt=""></div>
    <div class="content">
        <div class="playlistname">${songname}</div>
        <div class="user">${artist}</div>
    </div>`
    document.querySelector(".library").append(card)

}

function songInfo(songname, artist, thumbnail) {

    document.getElementsByClassName("songinfo")[0].innerHTML = `<div class="image"><img src=${thumbnail} alt=""></div>
        <div class="content">
            <div class="playlistname">${songname}</div>
            <div class="user">${artist}</div>
        </div>`
    currentSong.onloadeddata = function () {

        document.querySelector(".totaltime").innerHTML = convertSecondsToMinutesAndSeconds(currentSong.duration)
        // console.log(document.querySelector(".rectangle").offsetWidth);
        let seekLength = document.querySelector(".rectangle").offsetWidth

        currentSong.addEventListener("timeupdate", () => {

            let extrLeftoffset = Math.ceil(((currentSong.currentTime) / (currentSong.duration)) * seekLength);
            document.querySelector(".circle").style.cssText = `left: ${eval(extrLeftoffset - seekLength - 6)}px`
            document.querySelector(".green-rectangle").style.cssText = `width:${extrLeftoffset}px`
            document.querySelector(".currenttime").innerHTML = convertSecondsToMinutesAndSeconds(currentSong.currentTime)

            if (currentSong.currentTime == currentSong.duration) {
                playNext(currentSongtags)
            }
        })

        document.querySelector(".rectangles").addEventListener("click", event => {
            // console.log(event.offsetX, seekLength);
            document.querySelector(".circle").style.cssText = `left: ${eval(8 + Math.floor(event.offsetX))}px`
            currentSong.currentTime = Math.floor((event.offsetX / seekLength) * (currentSong.duration))
        })
    }
}



async function main() {




    let playlistsdata = await fetch("playlists/")
    let response = await playlistsdata.text();
    // console.log(response);

    async function topplaylists(response) {

        // console.log(response);
        let div = document.createElement("div")
        div.innerHTML = response;
        let As = div.getElementsByTagName("a");
        // console.log(As);

        for (const playlist of As) {
            if (playlist.href.endsWith("/") && playlist.href != mainfolderurl) {
                let newhref = playlist.href.split("/")
                newhref = newhref[newhref.length - 2]
                newhref = newhref.replace(/%20/g, " ")
                // console.log(newhref);
                if (newhref != "Made For You") {
                    let photo = encodeURIComponent(newhref)
                    photo = "playlists/" + photo + ".png"
                    // let photo = "playlists/" + newhref + ".png"
                    // photo = encodeURI(photo)
                    // console.log(photo);

                    cardTopPlaylist(newhref, photo)
                }

            }
        }
    }

    async function addsongs(response, playlistname) {
        document.querySelectorAll(".card").forEach(e => {
            e.remove()
        })
        // console.log('hi');

        let songtags;
        let firstsong;
        let div = document.createElement("div")
        div.innerHTML = response;
        let As = div.getElementsByTagName("a");
        let selplay;
        let playlistnum = 0
        for (const playlist of As) {
            if (playlist.href.endsWith("/")) {

                let newhref = playlist.href.split("/")
                newhref = newhref[newhref.length - 2]
                newhref = newhref.replace(/%20/g, " ")
                // console.log(playlistname+" "+newhref);

                if (playlistname == newhref) {
                    playlistnum = 1
                    let songsjson = await fetch(playlist.href)
                    let songsdata = await songsjson.text();
                    selplay = playlist.href
                    let div = document.createElement("div")
                    div.innerHTML = songsdata;
                    songtags = div.getElementsByTagName("a");
                    let songno = 0
                    for (const songs of songtags) {
                        if (songs.href.endsWith(".mp3")) {
                            songno++
                            if (songno == 1) {
                                firstsong = songs
                            }
                            const { artistname, songname } = extractArtistAndSong(songs.href);
                            let photo = encodeURIComponent(songname)
                            photo = playlist.href + photo + ".png"
                            // console.log(photo);
                            cardLibrary(songname, artistname, photo)
                        }
                    }
                }
            }
        }
        if (playlistnum == 0) {
            let data = await fetch("Made%20For%20You/")
            let response = await data.text();
            let div = document.createElement("div")
            div.innerHTML = response;
            let As = div.getElementsByTagName("a");


            for (const playlist of As) {
                // if (playlist.href == "http://127.0.0.1:3000/") {
                //     continue
                // }

                // let newhref = playlist.href.replace("http://127.0.0.1:3000/Made%20For%20You/", "")
                // newhref = newhref.replace("/", "")

                let newhref = playlist.href.split("/")
                newhref = newhref[newhref.length - 2]
                newhref = newhref.replace(/%20/g, " ")

                if (playlistname == newhref) {

                    let songsjson = await fetch(playlist.href)
                    let songsdata = await songsjson.text();
                    selplay = playlist.href
                    let div = document.createElement("div")
                    div.innerHTML = songsdata;
                    songtags = div.getElementsByTagName("a");
                    let songno = 0
                    for (const songs of songtags) {
                        if (songs.href.endsWith(".mp3")) {
                            songno++
                            if (songno == 1) {
                                firstsong = songs
                            }
                            const { artistname, songname } = extractArtistAndSong(songs.href);
                            let photo = encodeURIComponent(songname)
                            photo = playlist.href + photo + ".png"

                            // console.log(photo);
                            // photo = encodeURI(photo)

                            cardLibrary(songname, artistname, photo)
                        }
                    }
                }

            }
        }

        if (document.body.offsetWidth < 900) {
            console.log(firstsong);
            currentSongtags=songtags
            const { artistname, songname } = extractArtistAndSong(firstsong.href);
            if (currentSong) {
                currentSong.pause()
            }
            currentSong = document.createElement("audio")
            currentSong.src = firstsong.href
            currentSong.play()

            let photo = firstsong.href.replace(encodeURI(artistname + " - " + songname + ".mp3"), "")

            photo = photo + encodeURIComponent(songname) + ".png"


            document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"
            songInfo(songname, artistname, photo)
        }


        if (document.body.offsetWidth > 900) {
            document.body.querySelectorAll(".songs-hv").forEach((element) => {
                element.addEventListener("mouseenter", () => {
                    document.body.style.cssText = "cursor: pointer;"
                    let playb = document.createElement("div")
                    playb.classList.add("playbutton")
                    playb.innerHTML = `<img src="play.svg" alt="" >`
                    element.insertAdjacentElement("afterbegin", playb)
                    // console.log(selplay);

                    document.body.getElementsByClassName("playbutton")[0].addEventListener("click", () => {
                        // console.log(element);
                        currentSongtags = songtags
                        for (const songs of songtags) {
                            if (!songs.href.endsWith(".mp3")) {
                                continue
                            }
                            const { artistname, songname } = extractArtistAndSong(songs.href);
                            // console.log(songs.href);

                            if (element.getElementsByClassName("playlistname")[0].innerText == songname && artistname == element.getElementsByClassName("user")[0].innerText) {
                                console.log(artistname + " " + songname);
                                if (currentSong) {
                                    currentSong.pause()
                                }
                                currentSong = document.createElement("audio")
                                currentSong.src = songs.href
                                currentSong.play()
                                // console.log(encodeURI(artistname+" - "+songname+".mp3"));

                                let photo = songs.href.replace(encodeURI(artistname + " - " + songname + ".mp3"), "")
                                console.log(songs.href, encodeURI(artistname + " - " + songname + ".mp3"));
                                console.log(photo);
                                photo = photo + encodeURIComponent(songname) + ".png"
                                // photo = encodeURI(photo)


                                document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"
                                songInfo(songname, artistname, photo)
                            }
                        }
                    })
                })

                element.addEventListener("mouseleave", () => {
                    document.body.style.cssText = "cursor: default;"
                    let playb = element.querySelector(".playbutton")
                    playb.remove()
                })
            })

        }
        else {
            document.body.querySelectorAll(".songs-hv").forEach((element) => {
                element.addEventListener("click", () => {
                    console.log(element.style.cssText);

                    currentSongtags = songtags
                    for (const songs of songtags) {
                        if (!songs.href.endsWith(".mp3")) {
                            continue
                        }
                        const { artistname, songname } = extractArtistAndSong(songs.href);
           
                        if (element.getElementsByClassName("playlistname")[0].innerText == songname && artistname == element.getElementsByClassName("user")[0].innerText) {
                            console.log(artistname + " " + songname);
                            if (currentSong) {
                                currentSong.pause()
                            }
                            currentSong = document.createElement("audio")
                            currentSong.src = songs.href
                            currentSong.play()
     
                            let photo = songs.href.replace(encodeURI(artistname + " - " + songname + ".mp3"), "")
                            console.log(songs.href, encodeURI(artistname + " - " + songname + ".mp3"));
                            console.log(photo);
                            photo = photo + encodeURIComponent(songname) + ".png"
             
                            document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"
                            songInfo(songname, artistname, photo)
                        }
                    }
    
                })

                element.addEventListener("mouseleave", () => {
                    document.body.style.cssText = "cursor: default;"
                    let playb = element.querySelector(".playbutton")
                    playb.remove()
                })
            })
        }
    }
    async function madeforu() {
        let data = await fetch("Made For You/")
        let response = await data.text();
        let div = document.createElement("div")
        div.innerHTML = response;
        let As = div.getElementsByTagName("a");
        for (const playlist of As) {
            if (playlist.href.endsWith("/")) {
                if (playlist.href != mainfolderurl) {
                    // let newhref = playlist.href.replace("http://127.0.0.1:3000/Made%20For%20You/", "")
                    // newhref = newhref.replace("/", "")
                    let newhref = playlist.href.split("/")
                    newhref = newhref[newhref.length - 2]
                    newhref = newhref.replace(/%20/g, " ")
                    let info = await fetch(`${playlist.href}/info.json`)
                    info = await info.json()
                    // console.log(info);

                    let photo = "Made For You/" + newhref + ".png"
                    photo = encodeURI(photo)
                    // console.log(photo);

                    cardMadeForU(newhref, photo, info.description)
                }
            }
        }
    }

    await topplaylists(response)
    await madeforu()


    let arrayplaylists = document.querySelectorAll(".songs-page-link")
    for (const button of arrayplaylists) {
        button.addEventListener("click", async function () {
            for (const element of this.getElementsByTagName("div")) {
                if (element.className == "playlistname") {
                    await addsongs(response, element.innerHTML)
                }
            }
        })
    }


    document.body.getElementsByClassName("playandpause")[0].addEventListener("click", () => {
        let state = document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src
        if (state == (mainfolderurl + "pause.svg")) {
            currentSong.pause()
            document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "play.svg"
        }
        else {
            if (currentSong.src) {
                currentSong.play()
                document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"
            }
        }
    })

    let seekLength = document.querySelector(".volrectangle").offsetWidth
    document.querySelector(".volrectangles").addEventListener("click", event => {
        // console.log(event.offsetX, seekLength);
        if (currentSong) {
            document.querySelector(".volcircle").style.cssText = `left: ${eval(Math.floor(event.offsetX) - 2)}px`
            document.querySelector(".green-volrectangle").style.cssText = `width: ${eval(Math.floor(event.offsetX) - 2)}px`
            currentSong.volume = (event.offsetX / seekLength)
        }
    })

    document.querySelector(".nextsong").addEventListener("click", event => {
        // console.log(event.offsetX, seekLength);
        if (currentSong) {
            playNext(currentSongtags)
        }
    })
    document.querySelector(".prevsong").addEventListener("click", event => {
        // console.log(event.offsetX, seekLength);
        if (currentSong) {
            if (currentSong.currentTime < 2) {
                playPrev(currentSongtags)
            }
            else {
                currentSong.currentTime = 0
                currentSong.play()
                document.body.getElementsByClassName("playandpause")[0].getElementsByTagName("img")[0].src = "pause.svg"

            }
        }
    })

    // if(document.body.offsetWidth<=900){





    document.querySelector("#cross").addEventListener("click", event => {
        let transElements = [document.querySelector(".home"), document.querySelector(".library"), document.querySelector(".back")]
        transElements.forEach(e => {
            // e.style.cssText = `transform: translateX(${eval(-e.offsetWidth-5)}px)`
            e.style.cssText = `animation: closeAnim 0.3s ease-in forwards`
        })
    })

    document.querySelector("#hamburger").addEventListener("click", event => {
        let transElements = [document.querySelector(".home"), document.querySelector(".library"), document.querySelector(".back")]
        transElements.forEach(e => {
            e.style.cssText = `animation: openAnim 0.3s ease-in forwards`

        })
    })

    // }
}

main()



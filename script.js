const strings = document.querySelector('.strings')
//Sounds
const everyString = [g, c, e, a]
const indexCorrection = [,1,,2,,3,,4]
const sounds = ['g', 'c', 'e', 'a']


strings.childNodes.forEach((node, index) => node.addEventListener('click', () => {
    stopSongs()
    const newIndex = index - indexCorrection[index]
    const sound = sounds[newIndex]
    document.getElementById(sound).play()
}))

function stopSongs() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound)

        audio.pause()
        audio.currentTime = 0
    })
}
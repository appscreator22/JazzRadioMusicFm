import { v4 as uuidv4 } from "uuid"; 

function chillHop() {
    return [

        {
            name:"NRK Jazz",
            artist: "NRKJazz",
            cover: "https://img.freepik.com/psd-gratis/maqueta-reproductor-multimedia-rose-gold-maqueta-reproductor-multimedia-rose-gold-3d_106244-1745.jpg",
            id: uuidv4(),
            color: ["#F24933", "#F9B437"],
            audio: "https://lyd.nrk.no/nrk_radio_jazz_mp3_h",
            active: true,
        },
        {
            name:"Jazz Radio",
            artist: "JazzRadio",
            cover: "https://img.freepik.com/psd-gratis/maqueta-microfono-escritorio-rectangular-vista-frontal_1332-10597.jpg",
            id: uuidv4(),
            color: ["#D7B0D5", "#CBDFE0"],
            audio: "https://streaming.radio.co/s774887f7b/listen",
            active: false,
        },
        {
            name:"Jazz Cafe",
            artist: "JazzCafe",
            cover: "https://img.freepik.com/vector-gratis/concepto-marco-neon-aire_52683-52393.jpg",
            id: uuidv4(),
            color: ["#1D2731", "#F17E76"],
            audio: "https://radio.wanderingsheep.net:8000/jazzcafe",
            active: false,
        },
        {
            name:"Jazz Ascona",
            artist: "JazzAscona",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41309.jpg",
            id: uuidv4(),
            color: ["#008781", "#cfc08c"],
            audio: "https://streaming.smartradio.ch:9502/stream",
            active: false,
        },
        {
            name:"Locos Por El Jazz",
            artist: "LocosPorElJazz",
            cover: "https://img.freepik.com/foto-gratis/microfono-moderno_144627-41314.jpg",
            id: uuidv4(),
            color: ["#845648","#FDFBDF"],
            audio: "https://stream2.305stream.com/proxy/client041?mp=/stream/1/",
            active: false,
        },
        {
            name:"KISS Jazz",
            artist: "KISSJazz",
            cover: "https://img.freepik.com/vector-gratis/silueta-aparato-radio_23-2147501018.jpg",
            id: uuidv4(),
            color: ["#578CCE", "#E9D6D0"],
            audio: "https://fred.torontocast.com:2515/stream",
            active: false,
        },
        {
            name:"4Drive Jazz",
            artist: "4DriveJazz",
            cover: "https://img.freepik.com/vector-gratis/radio-plana-retro-ilustrada_23-2148812864.jpg",
            id: uuidv4(),
            color: ["#191516", "#82698E"],
            audio: "https://radio.streemlion.com:4870/stream",
            active: false,
        },
        {
            name:"Sublime Pure Jazz",
            artist: "SublimePureJazz",
            cover: "https://img.freepik.com/vector-gratis/aire-letrero-neon-marco_23-2148818543.jpg",
            id: uuidv4(),
            color: ["#7BC8DD", "#D64A59"],
            audio: "https://25293.live.streamtheworld.com/SUBLIMEPUREJAZZ_SC",
            active: false,
        },
        {
            name:"Radio Jazz FM",
            artist: "RadioJazzFM",
            cover: "https://img.freepik.com/vector-gratis/fondo-musica_53876-90528.jpg",
            id: uuidv4(),
            color: ["#FDE1A9", "#A46874"],
            audio: "https://radiojazz.out.airtime.pro/radiojazz_a",
            active: false,
        },
    ];
}

export default chillHop;



const onePieceDate = new Date(1997,9,27);

const mangas = [
    {
        id: 1,
        name: "One Piece",
        author: "Eichiro Oda",
        description: "Mangas de piratas",
        price: 9.99,
        year: onePieceDate.getFullYear(),
        image: "https://cdn.kobo.com/book-images/f29137c9-3258-4e45-9250-6b87a4ab690b/1200/1200/False/one-piece-vol-1.jpg"
    },
    {
        id: 2,
        name: "Naruto",
        author: "Masashi Kishimoto",
        description: "Ninjas, chakra y el camino del héroe",
        price: 8.95,
        year: 1999,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQW_5RCRmlOekQyvL7QF9JH-FzQtURRAphHtgFF7uld1nWKWCtdWcYJLv-Np2SJehaQMCqAEnS5p_cyfzfsdIr_j3MRnWCsWcqOZEuB0SQ0HlTbOBC1O_x_Yw&usqp=CAchttps://m.media-amazon.com/images/I/91tA8515i5L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 3,
        name: "Dragon Ball",
        author: "Akira Toriyama",
        description: "Aventuras y artes marciales",
        price: 9.99,
        year: 1984,
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRDr8jxvGTOIobwlMGafHJDPb_ZMxQcmzYlIuaKrNYDSoISb2uk6bULuK4VPPv22idqYrvGoxPwj8lyOKGwaoitUWsrkgV2-bk2kpPfWCYacBgmVm6Q0JET&usqp=CAc"
    },
    {
        id: 4,
        name: "Attack on Titan",
        author: "Hajime Isayama",
        description: "La humanidad contra los titanes",
        price: 10.99,
        year: 2009,
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBrYeQxrZYWJxmMMCMKcprLZ2DDXvJxx-5qNGIAWJ-Cm3LM2yhgD_fLd9JU-lriK3HpQLkeXkH37-O726k9jUDcV4k12iXbD-XubMzAmotpbcwqdRgFg0xTw"
    },
    {
        id: 5,
        name: "Demon Slayer",
        author: "Koyoharu Gotouge",
        description: "Cazadores de demonios y espadas",
        price: 8.50,
        year: 2016,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSZSBGQZGX1Jckr-LAbZTkkYHLgWDE_8Fj1mxKlQQ1MRg5O2Uj2uSHY_RR1XUcxnvymlfvmm0rWmITRrXIqHW7B-03NdzKew0Vc6POA1JeQ"
    },
    {
        id: 6,
        name: "Death Note",
        author: "Tsugumi Ohba",
        description: "Thriller psicológico y sobrenatural",
        price: 7.99,
        year: 2003,
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS_9A2J5FU5uvPjHJzJkoxiwQVRs2PKNHaqckE4nJV3mo3ZRGmEyTk94kron580gUlQJGQuaIghTxfMBo8t4pppoOoVPkVt"
    },
]
export default mangas

// Meter mas informacion, eso por un lado
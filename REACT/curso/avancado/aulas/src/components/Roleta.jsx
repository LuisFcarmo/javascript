import { useState } from "react";
import React from 'react'

const Roleta = () => {
    const [list] = useState([
        {id: 1, link: "https://i.pinimg.com/originals/c6/df/65/c6df65269e1df6b9a17503315fe1a9fa.png"},
        {id: 2, link: "https://imgb.ifunny.co/images/188e2187f7816c6dc098c7a43ddb8500ee40c646399938badd58e978ebae55d8_1.webp"},
        {id: 4, link: "https://scontent.fgyn11-1.fna.fbcdn.net/v/t1.6435-9/61471730_717934528622354_6468866530468691968_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=QXVJ4wpiU34AX9_zCGB&_nc_ht=scontent.fgyn11-1.fna&oh=00_AfABTZAb2s4pVj6_-4MV8yrvlEHVp_WahvlzYiW4P2qWnA&oe=660F2A04"}
        ]
    );

    let [linkx, setLink] = useState({id: 9, link:""})

    const LestGO = () => {
        var numeroAleatorioIntervalo = Math.floor(Math.random() * 4) + 1;
        setLink(
            list.find(((element) => {
                return element.id === numeroAleatorioIntervalo;
            }))
        )
    }

    return (
        <div>
            <button onClick = {LestGO}>
            </button>
            <img src = {linkx.link} alt="" />
        </div>
    )
};

export default Roleta;
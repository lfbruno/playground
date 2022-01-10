import React from 'react';

export default function FebroTypography() {
    return (
        <div> {/*LESSON: hyphenization requires using width*/}
            <p className="text-center text-bosser text-uppe">Bosser Text</p>
            <p className="text-center text-boss text-uppe">The Boss Title</p>
            <p className="text-center text-boss-less text-uppe">The Boss Less text</p>

            <p className="text-center text-larger text-capi">larger text</p>
            <p className="text-center text-large text-capi">large text</p>
            <p className="text-center text-large-less text-capi">large less text</p>

            <p className="text-center text-normal-next text-capi">normal next text</p>
            <p className="text-center text-normal text-capi">normal text</p>
            <p className="text-center text-normal-less text-capi">normal less text</p>

            <p className="text-center text-small-next text-capi">small next text</p>
            <p className="text-center text-small text-capi">small text</p>

            <p className="text-center text-topic mx-1">The Best Topic</p>
            <p className="text-center text-title mx-1">The Best Title</p>
            <p className="text-center text-subtitle mx-1">The best subtitle</p>
            <p className="text-paragraph text-align">Demais... testando... Acumule Pontos e Ganhe Produ­­&shy;tos e Serviços Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.</p>
        </div>

    );
}
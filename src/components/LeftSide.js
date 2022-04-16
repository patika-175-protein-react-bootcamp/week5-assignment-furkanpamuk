import React from 'react'
import PatikadevSvg from '../constants/patikadevSvg'

export default function LeftSide() {
    return (
        <div className="leftside">
            <div className='context'>
            <PatikadevSvg />
            <p className="title">YAZILIM PATİKALARI</p>
            <p className="text">Bootcamp'ler teknoloji kariyerine girmek isteyenler için yeni bir eğitim modelidir.
                Ekibini
                büyütmek
                isteyen şirketler bir bootcamp'lere sponsor olurlar. Teknik beceriler kazanmaya başlamış ancak işe
                girmeye hazır olmayan kişiler bootcamp'lere başvururlar. Seçilen adaylar 4-8 haftalık ücretsiz ve
                yoğun
                eğitime kabul alırlar. Bootcamp'lerde başarılı olan öğrenciler sponsor şirkette ya da sektörde başka
                şirketlere işe yerleşirler.
            </p>
            <div className="box1"></div>
            <div className="box2"></div>
        </div>
        </div>
    )
}

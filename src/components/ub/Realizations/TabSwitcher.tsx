import RealizationButton from '@c/ub/Realizations/TabSwitcherButton';
import kk7 from '@i/kk-7.png';
import kt7 from '@i/kt-7.png';
import gr7 from '@i/gr-7.png';
import mx from '@i/mx.png';
import kkThumb from '@i/ub/komplete-kontrol-7-thumbnail.png';
import grThumb from '@i/ub/guitar-rig-thumbnail.png';
import ktThumb from '@i/ub/kontakt-7-thumbnail.png';
import mxThumb from '@i/ub/massive-x-thumbnail.png';
import { useState } from 'preact/hooks';


import type { Props as ButtonProps } from '@c/ub/Realizations/TabSwitcherButton';

export default function TabSwitcher() {
        const [currentSlide, setCurrentSlide] = useState<ButtonProps["option"]>('komplete-kontrol');

        const options: Pick<ButtonProps, 'text' | 'option' | 'logo' | 'thumbnail' | 'textWrap' >[] = [
                {
                        text: 'GUITAR RIG 7',
                        option: 'guitar-rig-7',
                        logo: gr7.src,
                        thumbnail: grThumb.src,
                        textWrap: false,
                },
                {
                        text: 'KONTAKT 7',
                        option: 'kontakt-7',
                        logo: kt7.src,
                        thumbnail: ktThumb.src,
                        textWrap: false,
                },
                {
                        text: 'KOMPLETE KONTROL',
                        option: 'komplete-kontrol',
                        logo: kk7.src,
                        thumbnail: kkThumb.src,
                        textWrap: true,
                },
                {
                        text: 'MASSIVE X',
                        option: 'massive-x',
                        logo: mx.src,
                        thumbnail: mxThumb.src,
                        textWrap: false,
                },
        ];
        return (
                <>
                        <div className='lg-gap-7 grid grid-cols-4 items-stretch gap-1 pb-6 md:gap-4 lg:gap-7'>
                                {options.map((x) => (
                                        <RealizationButton
                                                currentSlide={currentSlide}
                                                logo={x.logo}
                                                onClick={() => {
                                                        setCurrentSlide(x.option);
                                                }}
                                                option={x.option}
                                                text={x.text}
                                                textWrap={x.textWrap}
                                                thumbnail={x.thumbnail}
                                        />
                                ))}
                        </div>

                        {currentSlide === 'komplete-kontrol' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>KOMPLETE KONTROL</h3>
                                                <p className='body-text text-white'>
                                                        The most recent realization of the new browsing experience appears in KOMPLETE KONTROL, the software counterpart to the <a href="https://www.native-instruments.com/de/products/komplete/keyboards/kontrol-s49-s61-s88/"><u>award-winning keyboard hardware.</u></a>                                      
                                                </p>
                                                <p className='pt-12'>
                                                        <iframe
                                                                src='https://www.youtube.com/embed/-Jlpo82Jc6M?si=MmXJSoTz7T_lRmT5'
                                                                title='YouTube video player'
                                                                frameborder='0'
                                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                                                class='w-full h-auto aspect-video rounded-2xl'
                                                        ></iframe>
                                                </p>
                                        </div>
                                </div>
                        ) : currentSlide === 'kontakt-7' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>KONTAKT</h3>
                                                <p className='body-text text-white'>                                                KONTAKT 7 is the world’s largest virtual instrument platform. Download and install KONTAKT Player and KONTAKT products via Native Access.</p> 
                                                <p className='pt-10'>
                                                        <iframe
                                                                src='https://www.youtube.com/embed/cANXrimv8C8?si=7Mu4K28s-rCmxFK2&amp;start=947'
                                                                title='YouTube video player'
                                                                frameborder='0'
                                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                                                class='w-full h-auto aspect-video rounded-2xl'
                                                        ></iframe>
                                                </p>
                                        </div>
                                </div>
                        ) : currentSlide === 'guitar-rig-7' ? (
                                                <div>
                                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                                <h3 className='body-text font-bold text-white'>Guitar Rig</h3>
                                                                <p className='body-text text-white'>We piloted the new browsing experience in the award-winning modular guitar effects software, Guitar Rig.</p>
                                                                <p className='pt-10'>
                                                                        <iframe
                                                                                src='https://www.youtube.com/embed/RRcTI_xrM3Q?si=5LEX6Kf8k_SkBt80&amp;start=77'
                                                                                title='YouTube video player'
                                                                                frameborder='0'
                                                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-shar e'
                                                                                class='w-full h-auto aspect-video rounded-2xl'
                                                                        ></iframe>
                                                                </p>
                                                        </div>
                                                </div>
                        ) : currentSlide === 'massive-x' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>Massive X</h3>
                                                <p className='body-text text-white'>The second realization of the new browsing experience was in Massive X, the world's best-selling software synthesizer.</p>
                                                <p className='pt-10'>
                                                        <iframe
                                                                src='https://www.youtube.com/embed/T4mfM73egsQ?si=_t9cj_AzK652s63N'
                                                                title='YouTube video player'
                                                                frameborder='0'
                                                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                                                class='w-full h-auto aspect-video rounded-2xl'
                                                        ></iframe>
                                                </p>
                                        </div>

                                        
                                </div>
                        ) : null}
                </>
        );
}

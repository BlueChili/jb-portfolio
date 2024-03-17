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

export type CurrentSlide = 'guitar-rig-7' | 'kontakt-7' | 'komplete-kontrol' | 'massive-x';

export default function TabSwitcher() {
        const [currentSlide, setCurrentSlide] = useState<CurrentSlide>('komplete-kontrol');

        const options: { text: string; option: CurrentSlide; image: any }[] = [
                {
                        text: 'GUITAR RIG 7',
                        option: 'guitar-rig-7',
                        logo: gr7,
                        thumbnail: grThumb,
                        textWrap: false,
                },
                {
                        text: 'KONTAKT 7',
                        option: 'kontakt-7',
                        logo: kt7,
                        thumbnail: ktThumb,
                        textWrap: false,
                },
                {
                        text: 'KOMPLETE KONTROL',
                        option: 'komplete-kontrol',
                        logo: kk7,
                        thumbnail: kkThumb,
                        textWrap: true,
                },
                {
                        text: 'MASSIVE X',
                        option: 'massive-x',
                        logo: mx,
                        thumbnail: mxThumb,
                        textWrap: false,
                },
        ];
        return (
                <>
                        <div className='lg-gap-7 grid grid-cols-4 items-stretch gap-1 pb-6 md:gap-4 lg:gap-7'>
                                {options.map((x) => (
                                        <RealizationButton
                                                currentSlide={currentSlide}
                                                logo={x.logo.src}
                                                onClick={() => {
                                                        setCurrentSlide(x.option);
                                                }}
                                                option={x.option}
                                                text={x.text}
                                                textWrap={x.textWrap}
                                                thumbnail={x.thumbnail.src}
                                        />
                                ))}
                        </div>

                        {currentSlide === 'komplete-kontrol' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>Enough Filetypes</h3>
                                                <p className='body-text text-white'>
                                                        The 200+ product UIs our new browser will serve present many different form factors and
                                                        dimensions. We had to create a UI experience which felt natural as users navigated through
                                                        Presets.
                                                </p>
                                                <p className='text-5xl text-red-500'>youtube-embed</p>
                                        </div>
                                </div>
                        ) : currentSlide === 'guitar-rig-7' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>Guitar Rig text heading</h3>
                                                <p className='body-text text-white'>Presets.</p>
                                        </div>
                                </div>
                        ) : currentSlide === 'kontakt-7' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>Kontakt 7 text heading</h3>
                                                <p className='body-text text-white'>Presets.</p>
                                        </div>
                                </div>
                        ) : currentSlide === 'massive-x' ? (
                                <div>
                                        <div className='px-2.5 pb-8 pt-2.5 md:pb-12 lg:pb-16 laptop:pb-20'>
                                                <h3 className='body-text font-bold text-white'>Massive X text heading</h3>
                                                <p className='body-text text-white'>Presets.</p>
                                        </div>
                                </div>
                        ) : null}
                </>
        );
}

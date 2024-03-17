import RealizationButton from '@c/ub/Realizations/TabSwitcherButton';
import kk7 from '@i/kk-7.png';
import kt7 from '@i/kt-7.png';
import gr7 from '@i/gr-7.png';
import mx from '@i/mx.png';
import { useState } from 'preact/hooks';

export type CurrentSlide = 'guitar-rig-7' | 'kontakt-7' | 'komplete-kontrol' | 'massive-x';

export default function TabSwitcher() {
        const [currentSlide, setCurrentSlide] = useState<CurrentSlide>('komplete-kontrol');

        const options: { text: string; option: CurrentSlide; image: any }[] = [
                {
                        text: 'GUITAR RIG 7',
                        option: 'guitar-rig-7',
                        image: gr7,
                },
                {
                        text: 'KONTAKT 7',
                        option: 'kontakt-7',
                        image: kt7,
                },
                {
                        text: 'KOMPLETE KONTROL',
                        option: 'komplete-kontrol',
                        image: kk7,
                },
                {
                        text: 'MASSIVE X',
                        option: 'massive-x',
                        image: mx,
                },
        ];
        return (
                <>
                        <div className='lg-gap-7 grid grid-cols-4 items-stretch gap-1'>
                                {options.map((x) => (
                                        <RealizationButton
                                                text={x.text}
                                                option={x.option}
                                                currentSlide={currentSlide}
                                                onClick={() => {
                                                        setCurrentSlide(x.option);
                                                }}>
                                                <img
                                                        src={x.image.src}
                                                        alt='Komplete Kontrol application icon'
                                                        className='h-[22px] w-[22px]'
                                                />
                                        </RealizationButton>
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

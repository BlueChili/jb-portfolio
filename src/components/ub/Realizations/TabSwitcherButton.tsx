import type { PropsWithChildren } from 'preact/compat';

export type CurrentSlide = 'guitar-rig-7' | 'kontakt-7' | 'komplete-kontrol' | 'massive-x';

export type Props = PropsWithChildren<{
        currentSlide: string;
        option: CurrentSlide;
        text: string;
        onClick: () => void;
        thumbnail: string;
        logo: string;
        textWrap?: boolean;
}>;

export default function RealizationButton(props: Props) {
        return (
                <button
                        type='button'
                        onClick={props.onClick}
                        className={[
                                'grow-1 box-border flex shrink-0 flex-col items-center justify-center gap-2 rounded-xl p-3.5 backdrop-blur-[15px] lg:justify-between',
                                props.currentSlide === props.option
                                        ? 'border-2 border-[#7879F1] bg-[#D9D9D90D] shadow-[0px_0px_2vw_2vw_rgba(0,0,0,0.2)]'
                                        : 'to-[#00000036 !bg-gradient-to-b from-[#000000D6] shadow-[0px_0px_1.5vw_1.5vw_rgba(0,0,0,0.0.8)]',
                        ].join(' ')}>
                        <img
                                src={props.thumbnail}
                                alt={`${props.text} application thumbnail`}
                                className={[
                                        'hidden w-full transition-all duration-150 md:block lg:mb-auto lg:mt-auto',
                                        props.currentSlide === props.option ? 'w-5/6' : '',
                                ].join(' ')}
                        />
                        <div className='flex flex-col items-center gap-2 lg:flex-row'>
                                <img
                                        src={props.logo}
                                        alt={`${props.text} application icon`}
                                        className='h-[22px] w-[22px]'
                                />
                                <p className={[props.textWrap ? '' : 'whitespace-nowrap', 'text-[10px] font-bold'].join(' ')}>{props.text}</p>
                        </div>
                </button>
        );
}

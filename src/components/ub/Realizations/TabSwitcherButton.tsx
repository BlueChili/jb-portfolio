import type { PropsWithChildren } from 'preact/compat';

import type { CurrentSlide } from './TabSwitcher';

type Props = PropsWithChildren<{
        currentSlide: string;
        option: CurrentSlide;
        text: string;
        onClick: () => void;
}>;

export default function RealizationButton(props: Props) {
        return (
                <button
                        type='button'
                        onClick={props.onClick}
                        className={[
                                'grow-1 box-border flex shrink-0 flex-col items-center justify-center gap-2 rounded-xl p-3.5 backdrop-blur-[15px]',
                                props.currentSlide === props.option
                                        ? 'border-2 border-[#7879F1] bg-[#D9D9D90D]'
                                        : '!bg-gradient-to-b from-[#000000D6] to-[#00000036]',
                        ].join(' ')}>
                        {props.children}
                        <p className='whitespace-nowrap text-[10px] font-bold'>{props.text}</p>
                </button>
        );
}

type Props = {
    duration: number,
    src: string
}

const TransitionButton = ({ duration, src }: Props) => (
        <div>
            <li id="cartButton" className={`ml-3 pt-2 md:pt-2 md:pr-10 transition duration-${duration} ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
                <img src={src} className="w-6 h-6 mt-2 md:w-8 md:h-8 cursor-pointer" alt="" />
            </li>
        </div>
    );

export default TransitionButton;
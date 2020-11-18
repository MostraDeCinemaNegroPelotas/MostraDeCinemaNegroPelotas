import ArrowLeftIcon from 'public/arrow-left.svg';
import ArrowRightIcon from 'public/arrow-right.svg';

const Arrow = ({side, leftClickHandle, rightClickHandle}) => { 
    const isLeftSide = side === 'left';

    return ( 
        <button className={`${isLeftSide ? 'arrow-left' : 'arrow-right'} arrow`}>
        { isLeftSide ? <ArrowLeftIcon onClick={leftClickHandle} /> : <ArrowRightIcon onClick={rightClickHandle} /> }
        </button>
    )
}

export default Arrow;
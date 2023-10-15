import './InputWrapper.scss';

function InputWrapper(props) {
    return (
        <div className='input-search-wrapper'>
            {props.children}
        </div>
    );
}

export default InputWrapper;
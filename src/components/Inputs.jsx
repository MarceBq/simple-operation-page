import PorpType from 'prop-types';


export default function Inputs({ num1, num2, handleInputChange }) {
    return (
        <div className="w-full flex justify-around">
            <input className='w-1/4 border-2 border-gray-300 p- rounded-md text-center'
                type="text"
                name="num1"
                placeholder="0"
                value={num1}
                onChange={handleInputChange}
            />
            <input
                className='w-1/4 border-2 border-gray-300 p- rounded-md text-center'
                type="text"
                name="num2"
                placeholder="0"
                value={num2}
                onChange={handleInputChange}
            />
        </div>
    );    
}

Inputs.propTypes = {
    num1: PorpType.string.isRequired,
    num2: PorpType.string.isRequired,
    handleInputChange: PorpType.func.isRequired
}
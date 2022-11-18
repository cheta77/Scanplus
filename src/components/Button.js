import React from 'react';
import { BsArrowUpRight, BsChevronDown } from 'react-icons/bs';

function Button(props) {
	if (props.variant === 'primary') {
		return (
			<div>
				<button onClick={props.onClick} className={` flex items-center text-sm justify-around ${props.className}`}>
					{props.title}
				</button>
			</div>
		);
	} else if (props.variant === 'icon-arrow') {
		return (
			<div>
				<button onClick={props.onClick} className={` flex text-sm items-center justify-around ${props.className}`}>
					<> {props.title}</>

					<BsArrowUpRight className='font-bold' />
				</button>
			</div>
		);
	} else if (props.variant === 'icon-chevron') {
		return (
			<div>
				<button onClick={props.onClick} className={`flex text-sm items-center justify-around ${props.className}`}>
					<> {props.title}</>

					<BsChevronDown className='font-bold' />
				</button>
			</div>
		);
	}
}

export default Button;

import { Ellipsis } from 'react-css-spinners';

export const Button = ({ isLoading, isDisabled, children }) => {
	if (isLoading) {
		return (
			<button type="button" disabled>
				<Ellipsis color="rgba(255, 255, 255, 1)" size="70" />
			</button>
		);
	}
	return (
		<button
			type="submit"
			disabled={isDisabled}
			className={isDisabled ? 'button-disabled' : ''}
		>
			{children}
		</button>
	);
};

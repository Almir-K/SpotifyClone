export const formatTime = (seconds) => {
	const rest = (seconds % 60).toFixed(0);
	const min = Math.floor(seconds / 60); // Fixed typo: "Math.floow" should be "Math.floor"
	const restSeconds = rest < 10 ? `0${rest}` : rest;

	return `${min}:${restSeconds}`;
};

import styled from 'styled-components';
import { fadeInDown } from 'react-animations';

export const Background = styled.div`
    background-image: url('https://i.imgur.com/LkGuWbL.jpg');
    background-size: cover;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const Container = styled.div`
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
`

export const FormContainer = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	&.sign-in-container {
		left: 0;
		width: 50%;
		z-index: 2;
	}
	&.sign-up-container {
		left: 0;
		width: 50%;
		opacity: 0;
		z-index: 1;
	}

	/* position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1; */
	`



export const SignupContainer = styled.div`
	margin: auto;
	width: 50%;
	animation: 1s ${fadeInDown};
	/* position: absolute;
	top: 0;
	height: 100%;
	left: 0;
	width: 50%;
	z-index: 2;
	transition: all 0.6s ease-in-out; */
	`

export const OverlayContainer = styled.div`

`

export const Input = styled.input`
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 75%;
`

export const Form = styled.form`
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
`
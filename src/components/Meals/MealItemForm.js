import classes from './MealItemForm.module.css'
import Input from '../UI/Input'
import { useRef ,useState} from 'react'
const MealItemForm = (props) => {

	const amountInputRef = useRef()
	const [amountIsValid,setAmountIsValid] = useState(true)	

	const submitHandler = event =>{
		event.preventDefault()
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = Number(enteredAmount)
		if(
			enteredAmount.trim().length === 0 || 
			enteredAmountNumber < 1 ||
			enteredAmountNumber > 5
		){
			setAmountIsValid(false)
			return
		}
		

		props.onAddToCart(enteredAmountNumber)
	}


	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input 
				ref={amountInputRef}
				label='Amount' 
				input={{
					id: 'Amount' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					defaultValue: '1',
				}}
			/>
\			<button type='submit'>+ Add</button>
			{!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
		</form>
	)
}

export default MealItemForm

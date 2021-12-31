import { forwardRef } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogTitle, IconButton, Slide } from '@mui/material'
import { Close } from '@mui/icons-material'

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />
})

const DialogCustom = ({ open, handleClose }) => {
	return (
		<div>
			<Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
				<DialogTitle>
					<IconButton onClick={handleClose}>
						<Close />
					</IconButton>
				</DialogTitle>
				<DialogContent>
					<DialogContentText>5555</DialogContentText>
				</DialogContent>
			</Dialog>
		</div>
	)
}

export default DialogCustom

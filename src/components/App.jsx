// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
// import { Card } from './Card/Card'

// const App = () => {
// 	return <Card isOnline />
// }

// export default App


import { Component } from 'react'
import Header from './Header/Header'
import ToDoList from './ToDoList/ToDoList'
import Modal from './Modal/Modal'
import FormLogin from './FormLogin/FormLogin'

import { nanoid } from 'nanoid'

class App extends Component {
	state = {
		isShowModal: false,
	}

	showModal = () => {
		this.setState({ isShowModal: true })
	}

	closeModal = () => {
		this.setState({ isShowModal: false })
	}

	createUser = (data) => {
		const newUser = {
			...data,
			id: nanoid(),
		}
		console.log('newUser :>> ', newUser)
	}

	render() {
		return (
			<div className='container'>
				<Header showModal={this.showModal} />
				<ToDoList />
				{this.state.isShowModal && (
					<Modal closeModal={this.closeModal}>
						<FormLogin
							closeModal={this.closeModal}
							createUser={this.createUser}
						/>
					</Modal>
				)}
			</div>
		)
	}
}

export default App
import Logo from "./assets/logo-nlw-expert.svg"

export function App() {
	return (
		<div className="">
			<img src={Logo} alt="logo" />
			<input type="text" placeholder="Busque em suas notas..." />
		</div>
	)
}
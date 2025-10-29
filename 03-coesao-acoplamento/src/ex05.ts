class AutenticacaoDeUsuario {
	public usuarios: Map<string, string> = new Map();

	registrarUsuario(user: string, pwd: string) {
		this.usuarios.set(user, pwd);
	}

	autenticarUsuario(userParam: string, pwd: string) {
        return this.usuarios.get(userParam) === pwd
	}
}

const autenticacao = new AutenticacaoDeUsuario();
autenticacao.registrarUsuario("Alice", "senha123");
autenticacao.registrarUsuario("Bob", "outrasenha");

const usuarioAutenticado = autenticacao.autenticarUsuario("Alice", "senha123");

if (usuarioAutenticado) {
	console.log("Usuário autenticado com sucesso");
} else {
	console.log("Falha na autenticação do Usuário");
}

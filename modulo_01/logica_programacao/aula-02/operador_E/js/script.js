let login = prompt("Login:");
let senha = prompt("Senha:");

/* Para permitir o login deve-se entrar
com as credenciais ADMIN e senha: admin123 */

if(login == "ADMIN" && senha == "admin123") {
    alert("Acesso autorizado");
} else {
    ("Acesso negado");
}
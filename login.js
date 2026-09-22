function login(username, password) {
    if (!username || !password) {
        throw new Error("Nom d'utilisateur et mot de passe requis");
    }

    console.log(`Tentative de connexion pour ${username}`);

    // Simulation d'une vérification des identifiants
    const isAuthenticated = username.length > 0 && password.length >= 8;

    if (isAuthenticated) {
        console.log("Connexion réussie!");
        return true;
    }

    console.log("Échec de la connexion");
    return false;
}

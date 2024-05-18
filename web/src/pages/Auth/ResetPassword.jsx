import '../../styles/login.css'

export function ResetPassword() {
    return(
        <div id="app">
            <form>
                <div>
                    <svg width="12" height="12" fill="#451715" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                    </svg>
                    <p id="error"></p>
                </div>
                <div>
                    <a href="/" aria-label="arrow-back">
                        <svg width="16" height="10.097" fill="#ffffff" viewBox="0 0 16 10.097" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55.874,63.232H46.165a1.165,1.165,0,1,1,0-2.33h9.709a1.165,1.165,0,1,1,0,2.33Zm3.883,0a1.195,1.195,0,0,1-1.165-1.165.493.493,0,0,1,.039-.233.552.552,0,0,1,.078-.233c.039-.078.078-.117.117-.194a.682.682,0,0,1,.155-.194l.155-.155c.078-.039.117-.078.194-.117s.155-.039.233-.078a1.152,1.152,0,0,1,1.049.311.847.847,0,0,1,.155.194c.039.078.078.117.117.194s.039.155.078.233c0,.078.039.155.039.233a.493.493,0,0,1-.039.233.552.552,0,0,1-.078.233.849.849,0,0,1-.117.194.682.682,0,0,1-.155.194l-.155.155c-.078.039-.117.078-.194.117s-.155.039-.233.078Z" transform="translate(-45 -57.018)" />
                            <path d="M50.049,61.1a1.118,1.118,0,0,1-.816-.35L45.35,56.864a1.126,1.126,0,0,1,0-1.631l3.883-3.883a1.153,1.153,0,0,1,1.631,1.631L47.8,56.049l3.068,3.068a1.165,1.165,0,0,1-.816,1.981Z" transform="translate(-45 -51)" />
                        </svg>
                    </a>
                    <p>Réinitialiser votre mot de passe</p>
                </div>

                <input type="email" name="email" placeholder="Email" autoComplete="off" required />

                <button type="submit">Réinitialiser</button>
                <div>
                    <p>Nouveau sur TopStream ?</p>
                    <a href="/auth/register">Créer un compte</a>
                    <p>Mot de passe oublié ?</p>
                    <a href="../dashboard/password">Réinitialiser votre mot de passe</a>
                </div>
            </form>
        </div>
    )
}
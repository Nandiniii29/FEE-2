import { useState } from 'react'
import './formhandling.css'

function FormHandling() {
    const [isLogin, setIsLogin] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        if (!isLogin && formData.get('password') !== formData.get('confirmPassword')) {
            setError('Passwords do not match.')
            setSubmitted(false)
            return
        }

        setError(' ')
        setSubmitted(true)
        event.currentTarget.reset()
    }



    function switchMode(loginMode) {
        setIsLogin(loginMode)
        setSubmitted(false)
        setError(' ')
    }


    return (
        <main className="auth-page">
            <section className="auth-panel" aria-labelledby="auth-title">
                <div className="auth-intro">
                    <span className="auth-kicker">Welcome back</span>
                    <h1 id="auth-title">Make yourself at home.</h1>
                    <p>{isLogin ? 'Sign in to continue to your account.' : 'Create an account and get started in seconds.'}</p>
                </div>

                <div className="auth-tabs" role="tablist" aria-label="Account access">
                    <button className={!isLogin ? 'active' : ''} onClick={() => switchMode(false)} role="tab" aria-selected={!isLogin} type="button">
                        Sign up
                    </button>
                    <button className={isLogin ? 'active' : ''} onClick={() => switchMode(true)} role="tab" aria-selected={isLogin} type="button">
                        Log in
                    </button>
                </div>

                <form className="auth-form" onSubmit={handleSubmit}>
                    {!isLogin && (
                        <label>
                            Full name
                            <input name="name" type="text" placeholder="Alex Morgan" required />
                        </label>
                    )}
                    <label>
                        Email address
                        <input name="email" type="email" placeholder="alex@example.com" required />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" placeholder="At least 6 characters" minLength="6" required />
                    </label>
                    {!isLogin && (
                        <label>
                            Confirm password
                            <input name="confirmPassword" type="password" placeholder="Repeat your password" minLength="6" required />
                        </label>
                    )}

                    {error && <p className="form-message error" role="alert">{error}</p>}
                    {submitted && <p className="form-message success" role="status">{isLogin ? 'You are logged in.' : 'Your account was created.'}</p>}

                    <button className="submit-button" type="submit">{isLogin ? 'Log in' : 'Create account'}</button>
                </form>
            </section>
        </main>
    )
}

export default FormHandling


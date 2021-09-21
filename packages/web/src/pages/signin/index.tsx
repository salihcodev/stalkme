// pkgs:
import { useState } from 'react'
import type { NextPage } from 'next'

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp'
import ViewHead from '../../components/base/view-head/view-head.comp'

// utils:
import styles from './style.module.sass'
import Layout from '../../components/distributed/layout/layout.comp'
import { SignInFormNames } from '../../common/types/signin-form.types'
import { HeadMetaPropsTypes } from '../../common/interfaces/views/view-head.interface'

// component>>>
const SignInPage: NextPage = () => {
    // comps info:

    // preConfigured hooks:

    const formSchema = {
        email: null,
        password: null,
    }

    // collect inputs data:
    const [formData, setFormData] = useState<SignInFormNames>(formSchema)

    const handleSignInSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }

    return (
        <Layout expanded>
            <div className="page Signin-page">
                <ViewHead title={pageTitle} meta={meta} />

                {/* ::page contents:: */}
                <main>
                    <section className="Signin-form">
                        <div className="header">
                            <h2>Signin</h2>
                        </div>
                        <div className="Signin-form">
                            <form onSubmit={handleSignInSubmit}>
                                {/* START ADD YOUR INPUTS AS BE MIGHT NEEDED */}
                                <FormInput
                                    type="text"
                                    label="Email"
                                    inputName="email"
                                    collectInputData={(
                                        name: string,
                                        value: string
                                    ) =>
                                        setFormData({
                                            ...formData,
                                            [name]: value,
                                        })
                                    }
                                />
                                <FormInput
                                    type="password"
                                    label="password"
                                    inputName="password"
                                    collectInputData={(
                                        name: string,
                                        value: string
                                    ) =>
                                        setFormData({
                                            ...formData,
                                            [name]: value,
                                        })
                                    }
                                />

                                {/* submitter btn */}
                                {/* you can use btn component here as you like */}
                                <button type="submit">Login</button>

                                <p className="not-registered">
                                    Do not have one.. no worries
                                    {/* <a href="/Signin">Signin</a> */}
                                    now!
                                </p>
                            </form>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}

export default SignInPage

// PAGE DATA::
// head
let pageTitle: string = `Stalkme — Signin`
const meta: HeadMetaPropsTypes[] = [
    {
        mName: `description`,
        mCont: `Your productivity is our concern, Once you be registered in @stalkme you gonna be tracked your daily/weekly/monthly activities not only... but also you can get a year history coverage.`,
    },
]

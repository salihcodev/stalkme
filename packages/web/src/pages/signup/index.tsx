// pkgs:
import { useState } from 'react'
import type { NextPage } from 'next'

// comps:
import FormInput from '../../components/distributed/form-input/form-input.comp'
import ViewHead from '../../components/base/view-head/view-head.comp'

// utils:
import styles from './style.module.sass'
import { HeadMetaPropsTypes } from '../../common/interfaces/views/view-head.interface'
import { SignupFormNames } from '../../common/types/signup-form.types'
import Layout from '../../components/distributed/layout/layout.comp'

// component>>>
const SignupPage: NextPage = () => {
    // comps info:

    // preConfigured hooks:

    const formSchema = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
    }

    // collect inputs data:
    const [formData, setFormData] = useState<SignupFormNames>(formSchema)

    const handleSignupSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
    }

    return (
        <Layout expanded>
            <div className="page signup-page">
                <ViewHead title={pageTitle} meta={meta} />

                {/* ::page contents:: */}
                <main>
                    <section className="Signup-form">
                        <div className="header">
                            <h2>Signup</h2>
                        </div>
                        <div className="Signup-form">
                            <form onSubmit={handleSignupSubmit}>
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

                                {/* submitter btn */}
                                {/* you can use btn component here as you like */}
                                <button type="submit">Signup</button>

                                <p className="not-registered">
                                    Do not have one.. no worries
                                    {/* <a href="/signup">Signup</a> */}
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

export default SignupPage

// PAGE DATA::
// head
let pageTitle: string = `Stalkme — Signup`
const meta: HeadMetaPropsTypes[] = [
    {
        mName: `description`,
        mCont: `Your productivity is our concern, Once you be registered in @stalkme you gonna be tracked your daily/weekly/monthly activities not only... but also you can get a year history coverage.`,
    },
]

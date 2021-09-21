// pkgs:
import type { NextPage } from 'next'

// comps:
import ViewHead from '../components/base/view-head/view-head.comp'

// utils:
import styles from './style.module.sass'
import { HeadMetaPropsTypes } from '../common/interfaces/views/view-head.interface'
import Layout from '../components/distributed/layout/layout.comp'

// component>>>>
const Home: NextPage = () => {
    return (
        <Layout expanded>
            <div className="page landing-page">
                <ViewHead title={pageTitle} meta={meta} />

                {/* ::page contents:: */}
                <main>
                    <h1 className="heading">Landing</h1>
                </main>
            </div>
        </Layout>
    )
}

export default Home

// PAGE DATA::
// head
let pageTitle: string = `Stalkme — Landing page`
const meta: HeadMetaPropsTypes[] = [
    {
        mName: `description`,
        mCont: `Your productivity is our concern, Once you be registered in @stalkme you gonna be tracked your daily/weekly/monthly activities not only... but also you can get a year history coverage.`,
    },
]

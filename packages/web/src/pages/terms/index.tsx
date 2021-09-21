// pkgs:
import type { NextPage } from 'next'

// comps:
import ViewHead from '../../components/base/view-head/view-head.comp'

// utils:
import styles from './style.module.sass'
import Layout from '../../components/distributed/layout/layout.comp'
import { HeadMetaPropsTypes } from '../../common/interfaces/views/view-head.interface'

// component>>>>
const TermsPage: NextPage = () => {
    return (
        <Layout expanded>
            <div className="page terms-page">
                <ViewHead title={pageTitle} meta={meta} />

                {/* ::page contents:: */}
                <main>
                    <h2 className={styles.heading}>Terms & Conditions</h2>
                </main>
            </div>
        </Layout>
    )
}

export default TermsPage

// PAGE DATA::
// head
let pageTitle: string = `Stalkme — Terms & Conditions`
const meta: HeadMetaPropsTypes[] = [
    {
        mName: `description`,
        mCont: `Your productivity is our concern, Once you be registered in @stalkme you gonna be tracked your daily/weekly/monthly activities not only... but also you can get a year history coverage.`,
    },
]

// pkgs:
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

// comps:
import ViewHead from '../../components/base/view-head/view-head.comp'

// utils:
import styles from './style.module.sass'
import Layout from '../../components/distributed/layout/layout.comp'
import { HeadMetaPropsTypes } from '../../common/interfaces/views/view-head.interface'

// component>>>
const NotFound: NextPage = () => {
    // const [redirectionCountDown, setRedirectionCountDown] = useState<number>(5);

    // useEffect(() => {
    //   setTimeout(() => setRedirectionCountDown(redirectionCountDown - 1), 1000);
    //   if (redirectionCountDown === 0) {
    //     history.push('/');
    //   }

    //   // clear the effect
    //   return () => {
    //     if (redirectionCountDown === 0) {
    //       setRedirectionCountDown(5);
    //     }
    //   };
    // }, [history, redirectionCountDown]);

    return (
        <Layout expanded>
            <div className="page notfound-page">
                <ViewHead title={pageTitle} meta={meta} />

                {/* ::page contents:: */}
                <main>
                    <h2 className="notfound-number">404</h2>
                    <p className="notfound-description">
                        <b>Error 404</b> May you hit a broken/not existed route,
                        Sadness
                    </p>
                </main>
            </div>
        </Layout>
    )
}
export default NotFound

// PAGE DATA::
// head
let pageTitle: string = `Stalkme — 404 Not Found`
const meta: HeadMetaPropsTypes[] = [
    {
        mName: `description`,
        mCont: `Your productivity is our concern, Once you be registered in @stalkme you gonna be tracked your daily/weekly/monthly activities not only... but also you can get a year history coverage.`,
    },
]

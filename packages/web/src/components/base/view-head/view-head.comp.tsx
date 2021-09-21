// pkgs:
import Head from 'next/head'
import { VFC } from 'react'

// utils:
import { ViewHeadPropsTypes } from '../../../common/interfaces/views/view-head.interface'

// comps:
import HeadMeta from './meta.subcomp'

// component>>>
const ViewHead: VFC<ViewHeadPropsTypes> = ({ title, meta }) => {
    return (
        <Head>
            <title>{title}</title>
            {/* inject a default one */}
            <HeadMeta
                key="viewport"
                mName="viewport"
                mCont="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
            />

            {/* loop other meta /s */}
            {meta.map(({ mName, mCont }) => (
                <HeadMeta key={mName} mName={mName} mCont={mCont} />
            ))}
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default ViewHead

// pkgs:
import { VFC } from 'react'

// utils:
import { HeadMetaPropsTypes } from '../../../common/interfaces/views/view-head.interface'

// component>>>
const HeadMeta: VFC<HeadMetaPropsTypes> = ({ mName, mCont }) => {
    return <meta name={mName} content={mCont} />
}

export default HeadMeta

// pkgs:

// utils:
import './style.module.sass'
import { RootState } from '../../redux/store'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'

// comps:

// component>>>
const CompName = () => {
    // use preConfigured hooks:
    const dispatch = useAppDispatch()

    // component's state extractions:
    // const {  } = useAppSelector((state: RootState) => state.TempRed);
    return <h1>CompName</h1>
}

export default CompName

import { connected } from '@helpers/container_helpers'
import { push } from 'connected-react-router'
import GroupsList from './index'

const mapDispatchToProps = {
  navigateTo: push
}

export default connected({
  component: GroupsList,
  mapDispatchToProps
})

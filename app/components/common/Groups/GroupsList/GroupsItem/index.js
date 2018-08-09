import React from 'react'
import { push } from 'connected-react-router'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import GroupIcon from '@material-ui/icons/Group'
import ArrowDown from '@material-ui/icons/KeyboardArrowDown'
import './index.scss'

const GroupsItem = ({ item, link }) => {
  return (
    <ListItem
      button
      onClick={() => {
        console.log('ListItem', link)
        push(link)
      }}
    >
      {item.newMessages ? (
        <Badge
          badgeContent={10}
          color="secondary"
          classes={{ badge: 'groups-item__badge' }}
        >
          <Avatar classes={{ root: 'groups-item__avatar' }}>
            <GroupIcon />
          </Avatar>
        </Badge>
      ) : (
        <Avatar classes={{ root: 'groups-item__avatar' }}>
          <GroupIcon />
        </Avatar>
      )}
      <ListItemText
        primary={item.primary}
        secondary={item.secondary}
        classes={{
          primary: 'nowrap-hidden',
          secondary: 'nowrap-hidden'
        }}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={e => console.log('IconButton')}>
          <ArrowDown />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  )
}

export default GroupsItem

// return (
//   <ListItem divider button component="li" className="list__item groups-item">
//     {/*<Link to={link || '/'} className="groups__list-item-link" />*/}
//     {item._new ? (
//       <Badge
//         badgeContent={item._new}
//         color="secondary"
//         classes={{ badge: badge }}
//       >
//         <Avatar>
//           <GroupIcon />
//         </Avatar>
//       </Badge>
//     ) : (
//       <Avatar>
//         <GroupIcon />
//       </Avatar>
//     )}
//     <ListItemText
//       primary={item.primary}
//       secondary={item.secondary}
//       classes={{ primary: linearText, secondary: linearText }}
//     />
//     <ListItemSecondaryAction
//       className="groups-item__action"
//       onClick={e => {
//         console.log('ListItemSecondaryAction', e)
//       }}
//     >
//       <Checkbox />
//       {/*<IconButton>*/}
//       {/*<ArrowDown className="groups-item__action-icon" />*/}
//       {/*</IconButton>*/}
//     </ListItemSecondaryAction>
//     <Typography
//       variant="caption"
//       color="textSecondary"
//       className="groups-item__date"
//     >
//       {item.date}
//     </Typography>
//   </ListItem>
// )

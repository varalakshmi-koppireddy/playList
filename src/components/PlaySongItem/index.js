import {AiOutlineDelete} from 'react-icons/ai'
import {
  ListItem,
  ImageNameContainer,
  ImageItem,
  NameSongContainer,
  NameHeading,
  SongDes,
  DurationIconCon,
  Duration,
  DeleteBtn,
} from './styledComponents'

const PlaySongItem = props => {
  const {playSongDetails, onDeleteIcon} = props
  const {id, imageUrl, name, genre, duration} = playSongDetails

  const onClickDeleteItem = () => {
    onDeleteIcon(id)
  }

  return (
    <ListItem>
      <ImageNameContainer>
        <ImageItem src={imageUrl} alt="track" />
        <NameSongContainer>
          <NameHeading>{name}</NameHeading>
          <SongDes>{genre}</SongDes>
        </NameSongContainer>
      </ImageNameContainer>
      <DurationIconCon>
        <Duration>{duration}</Duration>
        <DeleteBtn
          type="button"
          data-testid="delete"
          onClick={onClickDeleteItem}
        >
          <AiOutlineDelete size={25} />
        </DeleteBtn>
      </DurationIconCon>
    </ListItem>
  )
}

export default PlaySongItem

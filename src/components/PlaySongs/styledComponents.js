import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100%;
`
export const ImageItemContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 50px;
  padding-left: 50px;
`
export const SingerName = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 28px;
`
export const Description = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
`
export const BottomContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: #152850;
  padding-top: 30px;
  padding-left: 60px;
  padding-right: 60px;
  overflow-y: scroll;
`
export const SearchDesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const ItemText = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 23px;
  padding-left: 30px;
`
export const SearchContainer = styled.div`
  border: 1px solid #cbd5e1;
  height: 25px;
  width: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`
export const InputSearch = styled.input`
  border: none;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  width: 130px;
  padding-left: 10px;
  background: none;
  outline: none;
`
export const IconContainer = styled.div`
  color: #ffffff;
`

export const NoPlayListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 100%;
`

export const NotFoundText = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 40px;
`
export const PlaySongsList = styled.ul`
  list-style-type: none;
`

import requests

# fill clientId and client_secret with provided tokens
clientID = ''
client_secret = ''

# Generate access token
access_token = ''

def get_access_token():
  url = "https://accounts.spotify.com/api/token"
  headers = {'Content-Type': 'application/x-www-form-urlencoded'}
  data = {'grant_type':'client_credentials', 'client_id':f'{clientID}', 'client_secret':f'{client_secret}'}

  token = requests.post(url, headers=headers, data=data)

  return token

def test():

  headers = {'Authorization': f'Bearer  {access_token}'}

  response = requests.get(url='https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', headers=headers)

  return response

def get_album_picture_links(album_id):

  url = f'https://api.spotify.com/v1/albums/{album_id}'

  headers = {'Authorization': f'Bearer  {access_token}'}
  response = requests.get(url=url, headers=headers)

  json = response.json()

  pictures = json['images']

  first = pictures[0]

  link = first['url']

  return link

def get_artist_details(artist_id):

  url = f'https://api.spotify.com/v1/artists/{artist_id}'

  headers = {'Authorization': f'Bearer  {access_token}'}
  response = requests.get(url=url, headers=headers)

  json = response.json()

  name   = json['name']
  genres = json['genres']
  links  = [ img['url'] for img in json['images'] ]


  return {'name': name, 'genres': genres, 'pictures links': links}

def main():

  '''
  token = get_access_token()
  print(token)
  token = token.json()
  print(token)
  '''

  # print( get_album_picture_links('4aawyAB9vmqN3uQ7FjRGTy') )

  album_ids = ['0pGk5GqEidvPcTratzBAyJ',
               '3694mRyFRENNzNml798Krk',
               '7bO2aXCaoPZi6ozNSWFwy6',
               '0xEUOENXKtOMg0BVr34jur',
               '2AQiTJswhoWbCFGOsiEPBP',
               '2R0nfEjaMFMb8qyPnQmDzK',
               '7x5TwT9mdui63xxYpnZdNU',
               '5W1XY5ucNATjTULERvXx9j',
               '4HDJMKkwAMVFewqfZcmf84',
               '2jBsjUNWT1qKhYEZVXlnj0']

  '''
  for id in album_ids:
    print(f"https://open.spotify.com/embed/album/{id}?utm_source=generator")
  exit(0)
  '''

  # album_pictures_links = [get_album_picture_links(id) for id in album_ids]

  artist_ids = ['3Ebn7mKYzD0L3DaUB1gNJZ',
                '7MP3vdAhPGxCkUVgOP1Nln',
                '7knmbOGe07k85GmK50vACB',
                '6wa1AsxB9oJP7lwNSmbcYx',
                '2esEiOAGqbIDlRwwUK2wnP',
                '4Rj9lQm9oSiMlirgpsM6eo',
                '4D22jVMhvZgzvt8Hh9AcKY',
                '3Nrfpe0tUJi4K4DXYWgMUX',
                '0f3EsoviYnRKTkmayI3cux',
                '4s7xsFTPsZZcIzKv0Ryg22']

  flags = [
     'https://flagicons.lipis.dev/flags/4x3/ie.svg',
     'https://flagicons.lipis.dev/flags/4x3/pe.svg',
     'https://flagicons.lipis.dev/flags/4x3/fr.svg',
     'https://flagicons.lipis.dev/flags/4x3/in.svg',
     'https://flagicons.lipis.dev/flags/4x3/rw.svg',
     'https://flagicons.lipis.dev/flags/4x3/ke.svg',
     'https://flagicons.lipis.dev/flags/4x3/pl.svg',
     'https://flagicons.lipis.dev/flags/4x3/kr.svg',
     'https://flagicons.lipis.dev/flags/4x3/au.svg',
     'https://flagicons.lipis.dev/flags/4x3/sy.svg']
  
  artist_details = [get_artist_details(id) for id in artist_ids]

  for ad, flag in zip(artist_details, flags):
      ad['flag'] = flag

  print(artist_details)

  return

if __name__ == '__main__':
  main()

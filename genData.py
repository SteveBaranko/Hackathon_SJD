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
  token = token.json()
  print(token)

def main():
  with open('artists.csv', 'a') as f:
    search = ''
    while search != 'quit':
      search = input('search: ').rstrip()
      searchType = input('album, artist, track [0,1,2]: ').rstrip()
      searchType = int(searchType)
      types = ['album', 'artist', 'track']
      searchType = types[searchType]

      # search = 'igor'
      # searchType = 'album'

      url = f'https://api.spotify.com/v1/search?q={ search.encode("utf-8") }&type={searchType}'

      headers = {'Authorization': f'Bearer  {access_token}'}
      response = requests.get(url=url, headers=headers)

      json = response.json()

      firstResponse = json[f'{searchType}s']

      items = firstResponse['items']


      print(firstResponse)

      link = items[0]['external_urls']['spotify']
      itemId = items[0]['id']
      print()
      print()
      print()
      print()
      print()
      print(f'link:\t\t{link}')
      print(f'itemId:\t\t{itemId}')

      if searchType == 'album':
        releaseDate = items[0]['release_date']
        name = items[0]['name']
        images = ''
        try:
          images = items[0]['images'][0]['url']
        except IndexError:
          pass
        artistId = items[0]['artists'][0]['id']
        print(f'releaseDate:\t{releaseDate}')
        print(f'name:\t\t{name}')
        print(f'images:\t\t{images}')
        print(f'artistID:\t{artistId}')

      if searchType == 'artist':
        followers = items[0]['followers']['total']
        genres  = items[0]['genres']
        images = ''
        try:
          images = items[0]['images'][0]['url']
        except IndexError:
          pass
        name = items[0]['name']
        print(f'followers:\t{followers}')
        print(f'genres:\t\t{genres}')
        print(f'name:\t\t{name}')
        print(f'images:\t\t{images}')
        f.write(f'{itemId},{name},{genres},{followers},{images}\n')

      if searchType == 'track':
        name = items[0]['name']
        duration_ms = items[0]['duration_ms']
        artistId = items[0]['artists'][0]['id']
        print(f'name:\t\t{name}')
        print(f'duration_ms:\t\t{duration_ms}')
        print(f'artistID:\t\t{artistId}')

      print()
      print()

  return

if __name__ == '__main__':
  main()
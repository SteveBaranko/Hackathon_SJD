import {useState} from 'react';
import {ArtistTag} from './ArtistTag.js';

export default function ArtistTags() {
  const [ind, setInd] = useState(0);

  function updateInd() {
    setInd( (ind+1)%10 );
  }

  // flag icons came from https://flagicons.lipis.dev/

  const artistsDetails = [
    {'name': 'Christy Moore', 'genres': ['celtic', 'irish folk'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5ebab90ddc44636e1904139fba2', 'https://i.scdn.co/image/ab67616100005174ab90ddc44636e1904139fba2', 'https://i.scdn.co/image/ab6761610000f178ab90ddc44636e1904139fba2'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/ie.svg'},
    {'name': 'Ezio Oliva', 'genres': ['pop peruano', 'pop reggaeton', 'salsa peruana'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5eb0324e8ca35b3f919b53601f2', 'https://i.scdn.co/image/ab676161000051740324e8ca35b3f919b53601f2', 'https://i.scdn.co/image/ab6761610000f1780324e8ca35b3f919b53601f2'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/pe.svg'},
    {'name': 'Indochine', 'genres': ['chanson', 'francoton', 'french pop', 'french rock', 'french synthpop'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5ebfd39ed4c2d6f08028cc1ce3c', 'https://i.scdn.co/image/ab67616100005174fd39ed4c2d6f08028cc1ce3c', 'https://i.scdn.co/image/ab6761610000f178fd39ed4c2d6f08028cc1ce3c'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/fr.svg'},
    {'name': 'Daler Mehndi', 'genres': ['bhangra', 'desi hip hop', 'desi pop', 'filmi', 'modern bollywood'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5eb5a2c374361fb255c0768c9e4', 'https://i.scdn.co/image/ab676161000051745a2c374361fb255c0768c9e4', 'https://i.scdn.co/image/ab6761610000f1785a2c374361fb255c0768c9e4'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/in.svg'},
    {'name': 'Bruce Melodie', 'genres': ['azontobeats', 'rwandan pop', 'ugandan pop'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5ebc0b6f1557df45abb4a00d46f', 'https://i.scdn.co/image/ab67616100005174c0b6f1557df45abb4a00d46f', 'https://i.scdn.co/image/ab6761610000f178c0b6f1557df45abb4a00d46f'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/rw.svg'},
    {'name': 'Sauti Sol', 'genres': ['afropop', 'azontobeats', 'gengetone', 'kenyan pop'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5eb9259d4f16bc0e83c70974d04', 'https://i.scdn.co/image/ab676161000051749259d4f16bc0e83c70974d04', 'https://i.scdn.co/image/ab6761610000f1789259d4f16bc0e83c70974d04'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/ke.svg'},
    {'name': 'Brodka', 'genres': ['polish alternative', 'polish indie', 'polish pop'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5ebdcb1776393d0054af499a159', 'https://i.scdn.co/image/ab67616100005174dcb1776393d0054af499a159', 'https://i.scdn.co/image/ab6761610000f178dcb1776393d0054af499a159'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/pl.svg'},
    {'name': 'BTS', 'genres': ['k-pop', 'k-pop boy group'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5eb5704a64f34fe29ff73ab56bb', 'https://i.scdn.co/image/ab676161000051745704a64f34fe29ff73ab56bb', 'https://i.scdn.co/image/ab6761610000f1785704a64f34fe29ff73ab56bb'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/kr.svg'},
    {'name': 'Men At Work', 'genres': ['australian rock', 'classic rock', 'mellow gold', 'new romantic', 'new wave', 'new wave pop', 'rock', 'soft rock'], 'pictures links': ['https://i.scdn.co/image/296d057590a19ef7dbbe9205186e96cd6078c290', 'https://i.scdn.co/image/29eea102fd8b9b1ba9844b8a2d9e08c534271d36', 'https://i.scdn.co/image/0f4ac6cb37ec8e13245de83277c2f5dc634aa283', 'https://i.scdn.co/image/0ecaff09bfc19d8366f490ffb4a5119798b21483'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/au.svg'},
    {'name': 'Samo Zaen', 'genres': ['arab pop', 'egyptian pop', 'syrian pop', 'world chill'], 'pictures links': ['https://i.scdn.co/image/ab6761610000e5eb090851db0308ae74a4a50681', 'https://i.scdn.co/image/ab67616100005174090851db0308ae74a4a50681', 'https://i.scdn.co/image/ab6761610000f178090851db0308ae74a4a50681'], 'flag': 'https://flagicons.lipis.dev/flags/4x3/sy.svg'},
    ];

  const v = (x) => (x % artistsDetails.length);

  return (
    <div>
      <div className="tagsMainContainer">
        <ArtistTag name={artistsDetails[ind].name} genre={artistsDetails[ind].genres[0]} image={artistsDetails[ind]['pictures links'][0]} flag={artistsDetails[ind]['flag']}/>
        <ArtistTag name={artistsDetails[v(ind+1)].name} genre={artistsDetails[v(ind+1)].genres[0]} image={artistsDetails[v(ind+1)]['pictures links'][0]} flag={artistsDetails[v(ind+1)]['flag']}/>
        <ArtistTag name={artistsDetails[v(ind+2)].name} genre={artistsDetails[v(ind+2)].genres[0]} image={artistsDetails[v(ind+2)]['pictures links'][0]} flag={artistsDetails[v(ind+2)]['flag']}/>
        <ArtistTag name={artistsDetails[v(ind+3)].name} genre={artistsDetails[v(ind+3)].genres[0]} image={artistsDetails[v(ind+3)]['pictures links'][0]} flag={artistsDetails[v(ind+3)]['flag']}/>
        <ArtistTag name={artistsDetails[v(ind+4)].name} genre={artistsDetails[v(ind+4)].genres[0]} image={artistsDetails[v(ind+4)]['pictures links'][0]} flag={artistsDetails[v(ind+4)]['flag']}/>
        <ArtistTag name={artistsDetails[v(ind+5)].name} genre={artistsDetails[v(ind+5)].genres[0]} image={artistsDetails[v(ind+5)]['pictures links'][0]} flag={artistsDetails[v(ind+5)]['flag']}/>
      </div>

      <button onClick={updateInd}>
        switch profile
      </button>
    </div>
  );
}
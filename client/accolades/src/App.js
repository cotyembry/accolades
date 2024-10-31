import logo from './logo.svg';
import { useEffect, useState, Component } from 'react';
import './App.css';
import { WOMClient, Metric } from  '@wise-old-man/utils';
// import fs from 'fs';
//
const client = new WOMClient({
    apiKey: 'f2lt6fmp4e6yipahvm47sbld',
    userAgent: 'cotyembry',
});
//
const customRanks = {
        'owner': '',
        'deputy_owner': '',
        'completionist': '',
        'collector': '',
        'beast': '',
        'gamer': '',
        //
        'colonel': '',
        'brigadier': '',
        'admiral': '',
        //
        'master': '',
        'officer': '',
        'commander': '',
        //
        'mediator': '',
        //
        'explorer': '',
        'adventurer': '',
    };
    //
/*
//
let {
        memberships = [],
    } = group;
//
for (let i = 0; i < memberships.length; i++) {
    let playerObject = memberships[i],
        {
            player = {},
            role = '',
        } = playerObject,
        {username = '',} = player;
    //
    ranks[role] = '';
    if (i % 10 === 0) console.log(`processing ${i + 1} of ${memberships.length}`);
    // if (requestCount >= 19) {
    //     await new Promise((resolve, reject) => {
    //         console.log(`Processed item ${i + 1} out of ${memberships.length} - waiting 61 seconds for next 20 requests due to api constraints`);
    //         setTimeout(resolve, 61000);
    //         requestCount = 0;
    //     })
    // }
    // console.log(playerObject);
    const playerDetails = await client.players.getPlayerDetails(username),
        {latestSnapshot = {}} = playerDetails,
        {data = {},} = latestSnapshot === null ? {} : latestSnapshot,
        {skills = {}} = data,
        {overall = {}} = skills,
        {level = 0} = overall;
    //
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 5000);
    })
    //
    if (level === 0) {
        //do nothing
    }
    else if (level <= 499 && role !== 'sapphire' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'sapphire';
        console.log(`${username} needs updated to sapphire`);
    }
    else if (level >= 500 && level <= 999 && role !== 'emerald' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'emerald';
        console.log(`${username} needs updated to emerald`);
    }
    else if (level >= 1000 && level <= 1499 && role !== 'ruby' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'ruby';
        console.log(`${username} needs updated to ruby`);
    }
    else if (level >= 1500 && level <= 1749 && role !== 'diamond' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'diamond';
        console.log(`${username} needs updated to diamond`);
    }
    else if (level >= 1750 && level <= 1999 && role !== 'dragonstone' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'dragonstone';
        console.log(`${username} needs updated to dragonstone`);
    }
    else if (level >= 2000 && level <= 2199 && role !== 'onyx' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'onyx';
        console.log(`${username} needs updated to onyx`);
    }
    else if (level >= 2200 && level <= 2276 && role !== 'zenyte' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'zenyte';
        console.log(`${username} needs updated to zenyte`);
    }
    else if (level === 2277 && role !== 'maxed' && customRanks.hasOwnProperty(role) === false) {
        toUpdate[username] = 'maxed';
        console.log(`${username} needs updated to maxed`);
    }
}
//
// Step 3: Convert the JSON object to a string
const jsonData = JSON.stringify(toUpdate, null, 2);
/*
// Step 4: Write the JSON string to a file
fs.writeFileSync('whoNeedsUpdated.json', jsonData, 'utf8', (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File whoNeedsUpdated.json has been created successfully');
    }
});
*/
//
export default class App extends Component {
	render() {
		return (
			<div>test</div>
		);
	}
}

/*
function App() {
	const [memberships, setMemberships] = useState([]);
	const [players, setPlayers] = useState([]);
	useEffect(() => {
		async function fetchData() {
			const group = await client.groups.getGroupDetails(5404);
			let currentPlayers = [];
			await new Promise((resolve, reject) => {                        //wait 5 seconds between each network request to help with api constraints
				setTimeout(resolve, 5000);
			});
			let {
					memberships = [],
				} = group,
				ranks = {},
				toUpdate = {};
			setMemberships(memberships);
			//
			for (let i = 0; i < memberships.length; i++) {
				let playerObject = memberships[i],
					{
						player = {},
						role = '',
					} = playerObject,
					{username = '',} = player;
				//
				ranks[role] = '';
				if (i % 10 === 0) console.log(`processing ${i + 1} of ${memberships.length}`);
				// if (requestCount >= 19) {
				//     await new Promise((resolve, reject) => {
				//         console.log(`Processed item ${i + 1} out of ${memberships.length} - waiting 61 seconds for next 20 requests due to api constraints`);
				//         setTimeout(resolve, 61000);
				//         requestCount = 0;
				//     })
				// }
				// console.log(playerObject);
				const playerDetails = await client.players.getPlayerDetails(username),
					{latestSnapshot = {}} = playerDetails,
					{data = {},} = latestSnapshot === null ? {} : latestSnapshot,
					{skills = {}} = data,
					{overall = {}} = skills,
					{level = 0} = overall;
				//
				// const [players, setPlayers] = useEffect([]);
				// setPlayers([...players, {username, level,}]);
				currentPlayers.push({username, level})
				//
				await new Promise((resolve, reject) => {
					setTimeout(resolve, 5000);
				})
				//
				if (level === 0) {
					//do nothing
				}
				else if (level <= 499 && role !== 'sapphire' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'sapphire';
					console.log(`${username} needs updated to sapphire`);
				}
				else if (level >= 500 && level <= 999 && role !== 'emerald' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'emerald';
					console.log(`${username} needs updated to emerald`);
				}
				else if (level >= 1000 && level <= 1499 && role !== 'ruby' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'ruby';
					console.log(`${username} needs updated to ruby`);
				}
				else if (level >= 1500 && level <= 1749 && role !== 'diamond' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'diamond';
					console.log(`${username} needs updated to diamond`);
				}
				else if (level >= 1750 && level <= 1999 && role !== 'dragonstone' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'dragonstone';
					console.log(`${username} needs updated to dragonstone`);
				}
				else if (level >= 2000 && level <= 2199 && role !== 'onyx' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'onyx';
					console.log(`${username} needs updated to onyx`);
				}
				else if (level >= 2200 && level <= 2276 && role !== 'zenyte' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'zenyte';
					console.log(`${username} needs updated to zenyte`);
				}
				else if (level === 2277 && role !== 'maxed' && customRanks.hasOwnProperty(role) === false) {
					toUpdate[username] = 'maxed';
					console.log(`${username} needs updated to maxed`);
				}
			}
		}
		fetchData();
	}, []);
	// console.log('players =', players);
	return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> * /}
        <ul>
			{players.map((playerValue, i) => {
				let {username = '', level = ''} = playerValue;
				return (
					<li>{username} {level}</li>
				)
			})}
        </ul>
      </header>
    </div>
  );
}
export default App;
*/

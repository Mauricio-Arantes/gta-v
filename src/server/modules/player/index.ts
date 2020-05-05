import spawnPoints from './spawn_points.json';


mp.events.add('playerJoin', (player: PlayerMp) => {
  player.call('playerConnect', [{ lang: process.env.LANGUAGE }]);
});

mp.events.add('playerDeath', (player)=> {
  player.spawn(spawnPoints[Math.floor(Math.random() * spawnPoints.length)]);
  player.health = 100;
});

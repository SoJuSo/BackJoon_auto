function solution(players, callings) {
    const playerPositions = {};
    
    players.forEach((player, index) => {
        playerPositions[player] = index;
    });
    
    for (const name of callings) {
        const curIndex = playerPositions[name];
        
        if (curIndex > 0) {
            const prevIndex = curIndex - 1;
            const prevPlayer = players[prevIndex];
            
            players[prevIndex] = name;
            players[curIndex] = prevPlayer;
            
            playerPositions[name] = prevIndex;
            playerPositions[prevPlayer] = curIndex;
        }
    }
    
    return players;
}

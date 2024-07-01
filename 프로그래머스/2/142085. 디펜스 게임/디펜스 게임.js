function solution(n, k, enemy) {
    if(enemy.length <= k) return enemy.length // 무적권이 더 많은 경우, enemy의 길이를 early return
    
    let start = 0;
    let end = enemy.length;
    
    while(start <= end){
        const mid = Math.floor((start + end) / 2)
        let invincible = k
        const cur = enemy.slice(0, mid).sort((a,b) => b - a)
        
        const rest = cur.reduce((acc,cur) => {
            if(invincible){
                invincible--;
                return acc
            }else{
                return acc + cur
            }
        }, 0)
        
        if(n - rest >= 0){
            start = mid + 1
        }else{
            end = mid - 1
        }
    }
    
    return start - 1;
}
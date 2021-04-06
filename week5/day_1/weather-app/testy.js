function windDirectionCardinal(deg){
    deg = parseInt(deg)
    let direction = ''
    if(deg > 337 || deg <= 22){
        direction = 'N'
    } else if(deg > 22 && deg <= 67 ){
        direction = 'NE'
    } else if(deg > 67 && deg <= 112){
        direction = 'E'
    } else if(deg > 112 && deg <= 157){
        direction = 'SE'
    } else if(deg > 157 && deg <= 203){
        direction = 'S'
    } else if(deg > 203 && deg <= 248){
        direction = 'SW'
    } else if(deg > 248 && deg <= 293){
        direction = 'W'
    } else {
        direction = 'NW'
    }
    return direction
}



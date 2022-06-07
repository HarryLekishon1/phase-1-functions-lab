// Code your solution in this file!
distanceFromHqInBlocks = (block) => {
    return (block >= 42) ? block -42 : 42 -block;
}
function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet (start, destination){
    return start > destination ? (start-destination)*264 :(destination-start)*264;
}
function calculatesFarePrice(start, destination){

    let distance = distanceTravelledInFeet(start,destination);

    if(distance< 400){
        return 0;
    }
    if(400< distance && distance < 2000){
        return (distance-400) *0.02;
    }
    if(distance > 2000 && distance <= 2500){
        return 25;
    }
    else if (distance >2500){
        return "cannot travel that far";
    }
}
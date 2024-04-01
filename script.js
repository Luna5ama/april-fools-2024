const msg = document.getElementById("msg");

switch(Math.floor(Math.random() * 16)) {
    case 0:
    case 1:
        msg.innerHTML = "Rickrolled!";
        window.location.href = "https://youtu.be/mx86-rTclzA"; 
        break;
    case 2:
    case 3:
        msg.innerHTML = "Coconut malled!";
        window.location.href = "https://youtu.be/cGw-8FrRT1E"; 
        break;
    case 4:
    case 5:
        msg.innerHTML = "Trolled!"
        window.location.href = "https://youtu.be/gkTb9GP9lVI?t=4";
        break;
    case 6:
        msg.innerHTML = "Pull up!"
        window.location.href = "https://youtu.be/oLsVrshvOaI?t=10";
        break;
    case 7:
        msg.innerHTML = "Roger Roger'd!"
        window.location.href = "https://youtu.be/PKocF-P4Phs";
        break;
    case 8:
        msg.innerHTML = "HEYYEYAAEYAAAEYAEYAA!"
        window.location.href = "https://youtu.be/ZZ5LpwO-An4";
        break;
    case 9:
        msg.innerHTML = "Skibidi'd!"
        window.location.href = "https://youtu.be/bjPu3_u7tYA?t=6";
        break;
    case 10:
    case 11:
        msg.innerHTML = "Skibidi Toilet'd!"
        window.location.href = "https://youtube.com/shorts/tzD9OxAHtzU";
        break;
    case 12:
    case 13:
        msg.innerHTML = "Funck town'd!"
        window.location.href = "https://youtu.be/t9NU4d2c8-A?t=3793";
        break;
    default:
        msg.innerHTML = "IndiHomed!";
        window.location.href = "https://youtu.be/_IneeB-UDFA?t=60"; 
        break;
}

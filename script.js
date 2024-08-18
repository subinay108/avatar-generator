const myCanvas = document.getElementById('myCanvas');
myCanvas.height = 360;
myCanvas.width = 360;
const ctx = myCanvas.getContext('2d');
ctx.fillStyle = 'skyblue';

const avatarSize = 5

const generateBtn = document.getElementById('generateBtn')
generateBtn.addEventListener('click', (e) => {
    const avatar = generateAvatar(avatarSize);
    const color = generateRandomPastel();
    displayAvatar(avatar, color)
})

function generateRandomPastel(){
    let r = 150 + Math.floor(Math.random() * 50)
    let g = 150 + Math.floor(Math.random() * 50)
    let b = 150 + Math.floor(Math.random() * 50)

    r = Math.floor((r + 255) / 2)
    g = Math.floor((g + 255) / 2)
    b = Math.floor((b + 255) / 2)

    const pastel_color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
    return pastel_color;    
}

function generateAvatar(size = 5){
    const img = Array(size).fill(0).map(e => Array(size).fill(0))
    for(let i = 0; i < size; i++){
        for(let j = 0; j < Math.floor(size / 2) + 1; j++){
            img[i][j] = Math.floor(Math.random() * 2)
        }
    }

    for(let i = 0; i < size; i++){
        for(let j = 0; j < Math.floor(size / 2); j++){
            img[i][size - j - 1] = img[i][j];
        }
    }

    return img;
}


function displayAvatar(img, color){
    const size = img.length;
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = color;
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(img[i][j]){
                drawBlock(i, j);
            }
        }
    }
}

function drawBlock(row, col){
    const size = myCanvas.height / avatarSize;
    const x = col * size;
    const y = row * size;
    ctx.fillRect(x, y, size, size);    
}
